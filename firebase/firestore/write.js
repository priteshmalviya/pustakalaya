import {db} from "../pages/firebase";
import { doc, setDoc } from "firebase/firestore"; 

export function write(user,collection){
  setDoc(doc(db, collection, user.uid),user.reloadUserInfo);
}