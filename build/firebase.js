"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = void 0;
const app_1 = require("firebase/app");
const storage_1 = require("firebase/storage");
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
const app = (0, app_1.initializeApp)(firebaseConfig);
const storage = (0, storage_1.getStorage)(app);
const uploadImage = (image, name) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const imageName = (_a = `${name}-${Date.now().toString()}`) !== null && _a !== void 0 ? _a : Date.now().toString();
    const storageRef = (0, storage_1.ref)(storage, `taller-programacion/${imageName}`);
    // 'file' comes from the Blob or File API
    yield (0, storage_1.uploadBytes)(storageRef, image);
    console.log("Uploaded image: ", name);
    return (0, storage_1.getDownloadURL)(storageRef);
});
exports.uploadImage = uploadImage;
