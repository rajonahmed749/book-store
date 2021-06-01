import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {

    // const handleGoogle = () => {
    //     const googleProvider = new firebase.auth.GoogleAuthProvider();
    //     firebase.auth().signInWithPopup(googleProvider)
    //       .then((result) => {
    //         const { displayName: name, email, photoURL: userImg } = result.user;
    //         setLoggedInUser({ name, email, userImg });
    //         history.replace(from);
    //       })
    //   }




    return (
        <div className="text-center">
            <h4 className="mt-5">this is login page</h4>
            {/* <Button onClick={handleGoogle} variant="outline-dark"><FontAwesomeIcon icon={faGoogle} size="2x" /></Button> */}
            <button type="button" className="btn  btn-outline-secondary"><FontAwesomeIcon icon={faGoogle} size="1x" /></button>
            
        </div>
    );
};

export default Login;