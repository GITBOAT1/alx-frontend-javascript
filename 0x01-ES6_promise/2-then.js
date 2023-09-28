const respons = {
  status: 200,
  body: 'success',
};

export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => respons)
    .catch((error) => (error))
    .finally(() => {
      console.log('Got a response from the API');
    });
}
