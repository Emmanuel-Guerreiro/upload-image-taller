import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

// dotenv.config();

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyA9c3gSD43-kzl8NrNzQwROAP_piQOXAc8",
  authDomain: "prueba0-af5f7.firebaseapp.com",
  projectId: "prueba0-af5f7",
  storageBucket: "prueba0-af5f7.appspot.com",
  messagingSenderId: "205344732152",
  appId: "1:205344732152:web:349f6dfe7c66e2ca68dc0d",
};
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export const uploadImage = async (image: Buffer, name?: string) => {
  const imageName = `${name}-${Date.now().toString()}` ?? Date.now().toString();
  const storageRef = ref(storage, `taller-programacion/${imageName}`);
  // 'file' comes from the Blob or File API
  await uploadBytes(storageRef, image);
  console.log("Uploaded image: ", name);
  return getDownloadURL(storageRef);
};
