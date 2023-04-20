const respons = {
  status: 200,
  body: 'Success',
};

export default function handleResponseFromAPI(promise) {
  promise.then(() => respons);
  promise.catch((error) => {
    console.error('Error:', error);
    return new Error();
  });
  promise.finally(() => {
    console.log('Got a response from the API');
  });
}
