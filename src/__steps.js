/**
 * 
 *             ..........................
 *              0. initial setup
 *                -------------------------------
 * 
 * 1.visit: console.firebase.google.com.
 * 
 * 2.create a project, (skip google analytics)
 * 3.register app (create config)
 * 4.install firebase : npm install firebase
 * 5.add config file to your project
 * 6.DANGER: do not publish or make firebase config to public by pushing those to github 
 

........... integration -----------

* 7.go to docs > build > authentication >web > get started
 * 8.export app from firebase.config.js : export default app
 * 9. login.jsx : import getAuth from firebase/auth
 *10. create  const auth = getAuth(app)

------------------
           provider setup
...................

11.import googleAuthProvider and create a new provider
12. useSignInWithPopUp and pass auth and provider
13.activate sign in method (google, facebook,github,)
14.[vite]: change 127.0.0.1 to localhost
--------------------
More auth provider

1. active the auth provider
2 (create app,provide redirect url, client id, client secret)




  */