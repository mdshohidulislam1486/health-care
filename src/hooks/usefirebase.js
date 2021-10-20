import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { flushSync } from "react-dom";
import initiliazeAuthentication from "../pages/Login/Firebase/firebase.init";

initiliazeAuthentication()

const useFirebase =() =>{
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] =useState('')
    const [isLoged, setIsLoged] =useState(false)
    const [pageLoading, setPageLoading] = useState(true)
    
    const auth = getAuth();

    const sinInUsingGoogle = ()=>{
        setPageLoading(true)
        const googleProvider = new GoogleAuthProvider();
         return signInWithPopup(auth, googleProvider)
        /* .then(result =>{
            setUser(result.user)
        }) */
    }

        // observer for user state change 

        useEffect(()=>{
            const unSubscribed = onAuthStateChanged(auth, user=>{
                if(user){
                    setUser(user)
                } else{
                    setUser({})
                }
                setPageLoading(false)
            })
            return ()=> unSubscribed;

        },[]);

        const logOut =()=>{
            signOut(auth)
            .then(()=>{})
            .finally(()=>setPageLoading(false))
        }

        const handleEmailChange =e =>{
            setEmail(e.target.value)
        }
    
        const handlePasswordChange =e =>{
            setPassword(e.target.value)
        }
    
        const handleRegistration =e =>{
            e.preventDefault()
            if(password.length <6 ){
                setError('Password must be at leaset 6 characters')
                return
            } else{
                setError('')
            }
            isLoged ? startLogin(email, password) : createUser(email, password)
            
        }

        const startLogin = (email, password) => {
            signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('')
            }).catch(error => {
                setError(error.message)
            })

        }

        const loginUpdate = e =>{
            setIsLoged(e.target.checked)
            
        }

        const createUser = (email, password) =>{
            createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
            console.log(email, password)
        }

        
            

        return{
            user,
            sinInUsingGoogle,
            logOut,
            error,
            handleRegistration,
            handlePasswordChange,
            handleEmailChange,
            loginUpdate,
            isLoged,
            setPageLoading,
            pageLoading

        }
    

}

export default useFirebase;