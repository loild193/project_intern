import { createContext, useEffect, useReducer } from "react";
import firebase from "../lib/firebase";
import { auth } from "../lib/firebase";
import { authReducer } from "../reducers/authReducer";

export const AuthContext = createContext();
// domain to check g-suite mail
const HOST_DOMAIN = "hblab.vn"; 

const AuthContextProvider = ({ children }) => {
	const [authState, dispatch] = useReducer(authReducer, {
		authChecked: false,
		authLoading: true,
		isAuthenticated: false,
		user: null,
		error: null,
	});

	// redirect to google login
	const registerWithRedirect = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		provider.setCustomParameters({
			hd: HOST_DOMAIN,
		});
		auth.signInWithRedirect(provider);
	}

	// check user when render page and login with G-Suite
	const getAuthState = () => {
		auth
			.getRedirectResult()
			.then(({ user, additionalUserInfo  }) => {
				if (user) {
					if (additionalUserInfo.profile.hd === HOST_DOMAIN) {
						dispatch({
							type: "SET_AUTH_GSUITE",
							payload: {
								user,
							},
						});
					}
					else {
						auth.signOut();
						dispatch({
							type: "SET_AUTH_GSUITE_ERROR",
							payload: {
								error: {
									code: 'auth/not-hblab-email',
									message: "Please login with HBLab G-Suite account",
								}
							}
						});
					}
				}
				else {
					// Default auth state check
					const unsubscribe = auth.onAuthStateChanged(user => {
						unsubscribe();
						if (user) {
							// user already login
							// do nothing
						} else {
							dispatch({
								type: "SET_AUTH_GSUITE",
								payload: {
									user: null,
								},
							});
						}
					});
				}
			})
			.catch(error =>
				dispatch({
					type: "SET_AUTH_GSUITE",
					payload: {
						error,
					},
				})	
			)
	}

	// Check google
	useEffect(() => getAuthState(), [])

	// need API to check user when reload page

	// normal login
	const normalLogin = ({ email }) => {
		// Test
		if (email === "dekaito193@gmail.com") {
			dispatch({
				type: "SET_AUTH_NORMAL_LOGIN",
				payload: {
					isAuthenticated: true,
					user: email,
				},
			})
		}
	}

	const authContextData = {
		authState,
		registerWithRedirect,
		getAuthState,
		normalLogin,
	};

	return (
		<AuthContext.Provider value={authContextData}>
			{ children }
		</AuthContext.Provider>
	)
}

export default AuthContextProvider;