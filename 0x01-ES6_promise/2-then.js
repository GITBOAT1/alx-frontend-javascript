const respons = {
  status: 200,
  body: 'Success',
};

export default function handleResponseFromAPI(promise) {
  console.log('Got a response from the API');
  promise.then(() => respons);
  promise.catch(() => new Error());
}
