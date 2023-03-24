import { doc, getDoc } from "firebase/firestore";
import {db} from "../../pages/firebase";
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '../../pages/firebase'
import { useEffect } from 'react';

async function read(id){
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log(docSnap.data());
        return(<>hdjodokds</>);
    } else {
        console.log('No data');
    }
}

const UserData=()=>{
    const [user,setuser]=useAuthState(auth);
    useEffect(()=>{
        if(!user){
            console.log("No user");
        }else{
            
        }
      },[user]);
    return(<>hi</>);
}

export default UserData;