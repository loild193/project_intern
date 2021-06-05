import { createContext, useEffect, useReducer } from "react";
import userAPI from "../api/userAPI";
import { HOST_DOMAIN, SET_AUTH_GSUITE, SET_AUTH_GSUITE_ERROR, SET_AUTH_NORMAL } from "../lib/constant";
import firebase from "../lib/firebase";
import { auth } from "../lib/firebase";
import { authReducer } from "../reducers/authReducer";

export const AuthContext = createContext();

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
							type: SET_AUTH_GSUITE,
							payload: {
								user,
							},
						});
					}
					else {
						auth.signOut();
						dispatch({
							type: SET_AUTH_GSUITE_ERROR,
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
								type: SET_AUTH_GSUITE,
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
					type: SET_AUTH_GSUITE,
					payload: {
						error,
					},
				})	
			)
	}

	// Check google
	useEffect(() => getAuthState(), [])

	// need API to check user when reload page
	// Authenticate user
	const loadUser = async () => {
		let email;
		if (localStorage.getItem('email')) {
			email = JSON.parse(localStorage.getItem('email'));
		}
		const response = await userAPI.checkUser(email);
		
		if (response.email) {
			dispatch({
				type: SET_AUTH_NORMAL,
				payload: {
					isAuthenticated: true,
					user: response,
				}
			});
		}
		else {
			localStorage.removeItem("email");
			dispatch({
				type: SET_AUTH_NORMAL,
				payload: {
					isAuthenticated: false,
					user: null,
				}
			});
		}
	}

	useEffect( () => loadUser(), []);

	// normal login
	const normalLogin = async (userInfo) => {
		const response = await userAPI.login(userInfo);
		if (response.success) {
			localStorage.setItem('email', JSON.stringify(response.data.email));
		}
		await loadUser();

		return response;
	}

	// log out
	const logout = () => {
		localStorage.removeItem("email");
		dispatch({
			type: SET_AUTH_NORMAL,
			payload: {
				isAuthenticated: false,
				user: null,
			}
		});
	}
 
	const authContextData = {
		authState,
		registerWithRedirect,
		getAuthState,
		normalLogin,
		logout,
	};

	return (
		<AuthContext.Provider value={authContextData}>
			{ children }
		</AuthContext.Provider>
	)
}

export default AuthContextProvider;