import uploadPhoto from './5-photo-reject.js';
import signUpUser from './4-user-promise.js';


export default function handleProfileSignup (firstName, lastName, fileName){

    const signUpPromise = signUpUser(firstName, lastName);
    const uploadPromise = uploadPhoto(fileName)
    return Promise.allSettled([uploadPromise, signUpPromise])
}
