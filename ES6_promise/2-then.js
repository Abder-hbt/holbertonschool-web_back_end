export default function handleResponseFromAPI(promise){
    
    return promise
        .then((message) => {
            console.log("Got a response from the API");
            return { status: 200, body: 'success' };
            
        })
        .catch((message)=> {
            console.log("Got a response from the API");
            throw new Error('An error occurred');
        });
}
