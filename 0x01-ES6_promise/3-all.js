import { uploadPhoto, createUser } from './utils';

export async function handleProfileSignup() {
  const uploadPhotoPromise = Promise.resolve(uploadPhoto);
  const createUserPromise = Promise.resolve(createUser);

  try {
    const [photo, user] = await Promise.all([uploadPhotoPromise, createUserPromise]);
    console.log(photo.body, user.firstName, user.lastName);
  } catch {
    console.log('Signup system offline');
  }
}
