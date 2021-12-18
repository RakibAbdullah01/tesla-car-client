import axios from "axios";
import {
	createUserWithEmailAndPassword,
	getAuth,
	getIdToken,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();
const useFirebase = () => {
	const [user, setUser] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [admin, setAdmin] = useState(false);
	const [token, setToken] = useState("");

	//Universal Auth
	const auth = getAuth();
	const GoogleProvider = new GoogleAuthProvider();

	// Register Function
	const registerUser = (email, password, name, histry) => {
		setIsLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				alert("Successfully Registered!");

				const newUser = { email, displayName: name };
				setUser(newUser);

				// send user data to Database
				saveUser(email, name);

				// send data to firebase
				updateProfile(auth.currentUser, {
					displayName: name,
				})
					.then(() => {})
					.catch((error) => {});

				// redirect
				histry.replace("/");
			})
			.catch((error) => {
				// alert(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	// GoogleSignin
	const signInWithGoogle = (location, histry) => {
		setIsLoading(true);
		signInWithPopup(auth, GoogleProvider)
			.then((result) => {
				const user = result.user;
				alert("Successfully Login!");
				updateUser(user.email, user.displayName);
				const destination = location?.state.form || "/";
				histry.replace(destination);

				// update
			})
			.catch((error) => {
				// alert(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	// Login Function
	const loginUser = (email, password, location, histry) => {
		setIsLoading(true);

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				alert("Successfully Login!");
				const destination = location?.state.form || "/";
				histry.replace(destination);
			})
			.catch((error) => {
				// alert(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	// Observe User State
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				getIdToken(user).then((idToken) => {
					setToken(idToken);
				});
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		return () => unsubscribe;
	}, []);

	// Logout Function
	const logOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				alert(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	// Send data to Database
	const saveUser = (email, displayName) => {
		const user = { email, displayName };
		axios
			.post("https://enigmatic-sierra-10657.herokuapp.com/users", user)
			.then();
	};

	// update user data to Datebase
	const updateUser = (email, displayName) => {
		const user = { email, displayName };
		axios
			.put("https://enigmatic-sierra-10657.herokuapp.com/users", user)
			.then();
	};

	// Admin check
	useEffect(() => {
		axios
			.get(`https://enigmatic-sierra-10657.herokuapp.com/users/${user.email}`)
			.then((res) => {
				setAdmin(res.data.admin);
			});
	}, [user.email]);

	return {
		user,
		registerUser,
		logOut,
		loginUser,
		isLoading,
		signInWithGoogle,
		admin,
		token,
	};
};
export default useFirebase;
