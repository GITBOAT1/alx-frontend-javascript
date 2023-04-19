const API_ERROR_MESSAGE = 'The fake API is not working currently'

export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const respons = {
        status: 200,
        body: 'Success',
      };
      resolve(respons);
    }
    reject(API_ERROR_MESSAGE);
  });
}
