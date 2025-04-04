import { uploadPhoto, createUser } from './utils.js';


export default function handleProfileSignup(){
    const promises = [uploadPhoto(), createUser()];
    return Promise.all(promises)
        .then(([photoResult, userResult]) => {
            console.log(`${photoResult.body} ${userResult.firstName} ${userResult.lastName}`);
        })
        .catch((error) => {
            console.log('Signup system offline');
    });
}