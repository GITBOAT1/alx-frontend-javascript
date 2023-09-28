import { uploadPhoto, createUser } from './utils';

const log = 'Signup system offline';

const uploadPhotePromise = new Promise((reslove) => {
  reslove(uploadPhoto);
});

const createUserPromise = new Promise((resolve, reject) => {
  resolve(createUser);
});

export default function handleProfileSignup() {
  Promise.all([uploadPhotePromise, createUserPromise])
    .then(([photo, user]) => {
      console.log(photo.body, user.firstName, user.lastName);
    })
    .catch(() => {
      console.log(log);
    });
}
