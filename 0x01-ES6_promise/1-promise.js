export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const error = 'The fake API is not working currently';
    if (success) {
      const respons = {
        status: 200,
        body: 'Success',
      };
      return resolve(respons);
    }
    return reject(error);
  });
}
