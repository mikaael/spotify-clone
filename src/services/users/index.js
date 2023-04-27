import { api } from '../index';

export async function getUsers(cancelToken) {
  try {
    const response = await api.get('/users', {
      cancelToken,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function createUser(
  genderId,
  email,
  password,
  username,
  birthDate,
  cancelToken
) {
  try {
    const response = await api.post('/users', {
      gender_id: genderId,
      region_id: 1,
      email,
      password,
      username,
      birth_date: birthDate,
      cancelToken,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}
