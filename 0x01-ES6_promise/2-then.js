const respons = {
  status: 200,
  body: 'Success',
};

export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      console.log('Got a response from the API');
      return respons;
    })
    .catch((error) => {
      console.error('Error:', error);
      return new Error();
    });
}