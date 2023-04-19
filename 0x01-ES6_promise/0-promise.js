export function getResponseFromAPI(){
    return new Promise((resolve, reject) => {
    const response = getResponseFromAPI(); // Call the original function to fetch data
    if (response.isSuccessful) {
      resolve(response.data); // Resolve the Promise with the fetched data
    } else {
      reject(new Error(response.errorMessage)); // Reject the Promise with an error message
    }
  });
}
