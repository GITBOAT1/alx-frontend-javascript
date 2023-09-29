import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const msg = new Promise((resolve) => {
    const message = `${uploadPhoto.body} ${createUser.firstName} ${createUser.lastName}`;
    resolve(message);
  });

  msg.then((message) => {
    console.log(message);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
