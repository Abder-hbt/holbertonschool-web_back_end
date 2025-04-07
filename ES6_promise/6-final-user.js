import uploadPhoto from './5-photo-reject.js';
import signUpUser from './4-user-promise.js';


export default function handleProfileSignup (firstName, lastName, fileName){

    const signUpPromise = signUpUser(firstName, lastName);
    const uploadPromise = uploadPhoto(fileName)
    return Promise.allSettled([uploadPromise, signUpPromise])
        .then((results) => results.map((result) => ({
            status: result.status,
            value: result.status === 'fulfilled' ? result.value : result.reason.toString(),
        })));
}
