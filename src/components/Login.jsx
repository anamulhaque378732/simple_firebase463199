import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.init";
import { useState } from "react";


const Login = () => {
    const [user, setUser] = useState([])


    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()



    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const loginUser = result.user;
                console.log(loginUser);
                setUser(loginUser)
            }).catch(error => {
                console.log('error', error.message);

            });
    };
    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);


                setUser(null)
            })
            .catch(error => {
                console.log(error);

            });
    };
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const logInUser = result.user
                console.log(logInUser);

                setUser(logInUser)
            }).catch(error => {
                console.log(error);

            });
    };


    return (
        <div>
            {/* user?logout:sign in */}

            {user ?
                <button onClick={handleSignOut}>Sign Out</button> :
                <div> <button onClick={handleGoogleSignIn}>Google login</button>
                    <button onClick={handleGithubSignIn}> Github Login</button></div>
            }


            <div>
                {user &&
                    <div>
                        <h3> User: {user?.displayName}</h3>


                        <p> Email : {user.email}</p>
                        <img src={user.photoURL} alt="" />
                    </div>
                }
            </div>
        </div>
    );
};

export default Login;