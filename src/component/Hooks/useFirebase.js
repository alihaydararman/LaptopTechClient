import {
  getAuth,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  getIdToken,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthenticationInit from "../firebase/firebase.init";
firebaseAuthenticationInit();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  // auth
  const auth = getAuth();

  // CreateUser
  const signUp = (name, email, pass, history) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        setError("");

        setUser({ displayName: name, email: email });
        updateuser(name);
        setUserDatabase("post", name, email);
        history.push(`/home`);
        alert("Create user successfully");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // UpdateProfile
  const updateuser = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  // Login user
  const logIn = (email, password, history, locationis) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        history.replace(locationis);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // googleProvider
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSign = (locationis, history) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUserDatabase("PUT", user.displayName, user.email);
        setError("");
        history.push(locationis);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Logout
  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // userHandle
  useEffect(() => {
    const unsubscrib = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);

      } else {
        setUser({});
      }
      setLoading(false);
    });

    return () => unsubscrib;
  }, [auth]);

  // Get admin api
  useEffect(() => {
    fetch(`https://aqueous-wildwood-06277.herokuapp.com/user/${user?.email}`)
      .then((res) => res.json())
      .then((result) => {
        setIsAdmin(result);
      });
  }, [user.email]);

  // set user on database
  const setUserDatabase = (method, name, email) => {
    const user = { name, email };
    fetch("https://aqueous-wildwood-06277.herokuapp.com/user", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => { });
  };

  return {
    handleGoogleSign,
    user,
    logOut,
    loading,
    signUp,
    logIn,
    isAdmin,
    error,
    setIsAdmin,
  };
};
export default useFirebase;
