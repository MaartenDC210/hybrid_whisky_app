import { initializeApp } from "firebase/app";
import { initializeFirestore, persistentLocalCache } from "firebase/firestore";
import { firebaseConfig } from "./config";
import { getAuth } from "firebase/auth";

export const firebaseApp = initializeApp(firebaseConfig);

export const firestoreDB = initializeFirestore(firebaseApp, {localCache: persistentLocalCache(/*settings*/{})});
export const firebaseAuth = getAuth(firebaseApp);

