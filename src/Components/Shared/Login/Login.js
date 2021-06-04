import React, { useContext } from 'react';
import firebase from "firebase/app";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import firebaseConfig from './firebaseConfig';
import "firebase/auth";
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    const handleGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {                
                var credential = result.credential;
                var token = credential.accessToken;
                console.log(result.user)
                 const { displayName, email ,photoURL} = result.user;
                 const signedInUser = { name: displayName, email, img: photoURL }
                 setLoggedInUser(signedInUser)
                 history.replace(from);
                console.log(signedInUser);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);
            });
    }



    return (
        <div className="text-center">
            <h4 className="mt-5">this is login page</h4>
            {/* <Button onClick={handleGoogle} variant="outline-dark"><FontAwesomeIcon icon={faGoogle} size="2x" /></Button> */}
            <button onClick={handleGoogle} type="button" className="btn  btn-outline-secondary"><FontAwesomeIcon icon={faGoogle} size="1x" /></button>
            
        </div>
    );
};

export default Login;