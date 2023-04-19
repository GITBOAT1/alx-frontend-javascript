export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const error = 'The fake API is not working currently';
    if (success) {
      const response = {
        status: 200,
        body: 'Success',
      };
      resolve(response);
    } else {
      reject(error);
    }
  }).then((response) => {
    console.log(response);
    // Handle successful response here
  }).catch((error) => {
    console.error(error);
    // Handle error response here
  });
}
