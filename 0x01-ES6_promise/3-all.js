import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return new Promise((resolve, reject) => {
    try {
      const message = `${uploadPhoto.body} ${createUser.firstName} ${createUser.lastName}`;
      console.log(message);
      resolve(message);
    } catch (error) {
      console.error('Error:', error);
      reject(error);
    }
  });
}
