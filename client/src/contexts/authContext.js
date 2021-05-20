import { createContext, useReducer } from "react";
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

	const registerWithRedirect = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		provider.setCustomParameters({
			hd: HOST_DOMAIN,
		});
		auth.signInWithRedirect(provider);
	}

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
							// console.log(user)
							// dispatch({
							// 	type: "SET_AUTH_GSUITE",
							// 	payload: {
							// 		user,
							// 	},
							// });
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

	const authContextData = {
		authState,
		registerWithRedirect,
		getAuthState,
	};

	return (
		<AuthContext.Provider value={authContextData}>
			{ children }
		</AuthContext.Provider>
	)
}

export default AuthContextProvider;