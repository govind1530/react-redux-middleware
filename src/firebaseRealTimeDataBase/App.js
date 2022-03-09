import React, { useReducer, useEffect } from "react";



import { v4 } from "uuid";
// firebase stuffs
//TODO: import firebase config and firebase database


import {getDownloadURL, getStorage,ref as storageRef,uploadBytes, uploadBytesResumable} from "firebase/storage";
import {getDatabase,ref as dbRef,set} from 'firebase/database'
// context api stuffs
// to compress image before uploading to the server
import { readAndCompressImage } from "browser-image-resizer";

// configs for image resizing
//TODO: add image configurations

 const imageConfig = {
  quality: 0.2,
  maxWidth: 800,
  maxHeight: 600,
  autoRotate: true
};


const App = () => {
  const storage = getStorage();
 
  
  const addContact = async () => {
    const database = getDatabase();
    try{
    set(dbRef(database,"contacts/"+v4()),{
      name:"mayank",
      email:"m@gmail.com",
      phoneNumber:"9782",
      address:"jaipur",
      picture:'https://firebasestorage.googleapis.com/v0/b/react-firebase-pratice.appspot.com/o/images%2FWhatsApp%20Image%202022-02-24%20at%201.50.03%20PM.jpegWed%20Mar%2009%202022%2012%3A34%3A37%20GMT%2B0530%20(India%20Standard%20Time)?alt=media&token=68f03394-2c2e-4e69-bdd5-37e22eae08c9',
      star:true,
      data:new Date().getDate() + new Date().getTime(),
    }).then((res)=>{
      console.log("db sucess",res)
    }).catch((err)=>{
        console.log("db err",err);
    })
  }
  catch(e){
    console.error("db err",e)
  }
    //TODO: add contact method

  };


  const imagePicker = async e => {
    
    // TODO: upload image and set D-URL to state
    try{
        const file = e.target.files[0];
        let metaData = {
          contentType: file.type
        }

        let resizedImage = await readAndCompressImage(file,imageConfig);
        const storageRefs = storageRef(storage,'images/'+file.name+new Date());
        // let uploadImage = storageRef.child('images/'+file.name+new Date().getTime).put(resizedImage,metaData);
        const uploadTask=uploadBytesResumable(storageRefs,resizedImage,metaData)
        uploadTask.on('state_changed',(snapshot)=>{
            const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            console.log(`upload is ${progress} done`);
        },error=>{
          console.log(error);
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break;
            case 'storage/canceled':
              // User canceled the upload
              break;
      
            // ...
      
            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        
        },()=>{
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
              console.log("download url is --",downloadURL);
            
          })
        })
       
    }
    catch(e){
        console.error(e)
       
    }
  };


  return (
  <div>
    <input type="file" name="file" onChange={(e)=>imagePicker(e)} />
    <button onClick={()=>addContact()} style={{height:"50px",width:"100px"}}>
      upload
      </button>
  </div>
  );
};

export default App;
