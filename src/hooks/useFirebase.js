import initFirebaseConfig from "../Firebase/firebase.init";
import {getAuth, GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut,
    createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile,sendPasswordResetEmail} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";

initFirebaseConfig();

const useFirebase = () =>{

    const [user,setUser] = useState({});
    const [error,setError] = useState('');
    const [isLoading,setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInGoogle = (history,redirect_url) =>{
        setIsLoading(true)
        signInWithPopup(auth,googleProvider)
        .then(result =>{
            setUser(result.user);
            history.push(redirect_url);
            setError('');
        }).catch(e =>{
            setError(e.message);
        }).finally(() =>{
            setIsLoading(false);
        })
    }

    const signOutClick = () =>{
        signOut(auth)
        .then(result=>{
            setUser({});
            setError('');
        })
        .catch(e =>{
            setError(e.message);
        })
    }

    useEffect(() =>{
        setIsLoading(true)
        const subscriber = onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
            }else{
                setUser({});
            }
            setIsLoading(false);
        });
        return subscriber;
    },[auth]);
    
    /// create user with firebase
    const createUser = (email,password,name,phone,history,redirect_url) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
            handleUpdate(name,phone);
            setError('');
            history.push(redirect_url);
        }).catch(e =>{
            setError(e.message);
        }).finally(() =>{
            setIsLoading(false);
        })
    }

    const signUser = (email,password,history,redirect_url) =>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            setUser(result.user);
            history.push(redirect_url);
            setError('')
        }).catch(e =>{
            setError(e.message);
        }).finally(() =>{
            setIsLoading(false);
        })
    }

    const handleUpdate =  (name,phone) =>{
        setIsLoading(true);
        updateProfile(auth.currentUser, {
            displayName:name,photoURL:user.photoURL ||"https://lh3.googleusercontent.com/a-/AOh14GjFagRswZECmhBi_rUYm9C4I-G6uGbq5BnS8wxLsg=s96-c",
            phoneNumber:phone
        }).then(()=>{setError('');})
        .catch(e =>{
            setError(e.message)
        }).finally(() =>{
            setIsLoading(false)
        })
    }

    const userResetPassword = (email) =>{
        setIsLoading(true)
        sendPasswordResetEmail(auth, email)
        .then(result =>{
            setError(' ');
        }).catch(e =>{
            setError(e.message)
        }).finally(() =>{
            setIsLoading(false)
        });
    }
    return {
        user,
        error,
        isLoading,
        setIsLoading,
        signInGoogle,
        signOutClick,
        createUser,
        signUser,
        userResetPassword
    }
}

export default useFirebase;