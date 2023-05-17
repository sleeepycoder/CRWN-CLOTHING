// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword,getAuth,signInWithEmailAndPassword,signInWithRedirect,
    signInWithPopup,GoogleAuthProvider,signOut,onAuthStateChanged,

} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc,collection,writeBatch,query,getDocs} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9Xxje64UHvOtcjsZXyDFhdDmA3er8jjM",
  authDomain: "crwn-clothing-3a89d.firebaseapp.com",
  projectId: "crwn-clothing-3a89d",
  storageBucket: "crwn-clothing-3a89d.appspot.com",
  messagingSenderId: "1034550292113",
  appId: "1:1034550292113:web:f45c088c94b67f68b25930"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);


const provider =new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth =getAuth();
export const signInWithGooglePopup= () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect =() => signInWithRedirect(auth,provider);
export const db =getFirestore();

export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd,
    field
  ) => {
    const batch = writeBatch(db);
    const collectionRef = collection(db, collectionKey);
    
    objectsToAdd.forEach((object) => {
       const docRef = doc(collectionRef, object.title.toLowerCase());
       batch.set(docRef, object);
    });
  
    await batch.commit();
    console.log('done');
  };
  
  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
  
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  
    return categoryMap;
  }; 




export const createUserDocumentFromAuth = async (userAuth,additionalInformation={})  =>{
if(!userAuth) return;

    const userDocref =doc(db,'users',userAuth.uid);
    console.log(userDocref);

    const userSnapshot = await getDoc(userDocref);
    console.log(userSnapshot);

if(!userSnapshot.exists()){
    const {displayName,email} =userAuth;
    const createdAt =new Date();
try {
    await setDoc(userDocref,{
        displayName,
        email,
        createdAt,  
        ...additionalInformation, 
    });
} catch (error) {
    console.log('error creating user',error.message);
}

}

return userDocref;
};


export  const createAuthUserWithEmailAndPassword =async (email, password) => {

    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password)
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  };

  export const signOutUser = async () => await signOut(auth);

  export const  onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback);