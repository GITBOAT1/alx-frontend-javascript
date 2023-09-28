export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const response = {
        status: 200,
        body: 'Success',
      };
      resolve(response);
    } else {
      const error = 'The fake API is not working currently';
      reject(error);
    }
  });
}
