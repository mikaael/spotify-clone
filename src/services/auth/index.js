import { createUser, getUsers } from '../users';
import { getGenders } from '../genders';

export async function registerUser(
  email,
  password,
  username,
  birthDate,
  genderId
) {
  const { data: users } = await getUsers();
  const { data: genders } = await getGenders();

  const foundUser = users.find((user) => user.email === email);
  const foundGender = genders.find(({ id }) => id === Number(genderId));

  if (foundUser) {
    return {
      status: 409,
      error: 'Esse e-mail já está vinculado a uma conta. Faça login.',
    };
  }

  if (!foundGender) {
    return {
      status: 500,
      error: 'Houve um erro interno. Por favor tente novamente mais tarde.',
    };
  }

  const { status, data: createdUser } = await createUser(
    Number(genderId),
    email,
    password,
    username,
    birthDate.toISOString().split('T')[0]
  );

  return { status, createdUser };
}
