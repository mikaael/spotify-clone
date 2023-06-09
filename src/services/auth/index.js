import { createUser, getUsers } from '../users';

const AUTH_KEY = 'SPOTIFY_INSPIRED_USER';

export async function registerUser(
  email,
  password,
  username,
  birthDate,
  genderId
) {
  const usersResponse = await getUsers();

  if (usersResponse.status !== 200) {
    return users;
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

export async function authenticateUser(usernameEmail, password) {
  const { data: users } = await getUsers();

  const foundUser = users.find(
    (user) =>
      (user.email === usernameEmail || user.username === usernameEmail) &&
      user.password === password
  );

  if (!foundUser) {
    return {
      status: 401,
      error: 'Nome de usuário ou senha incorretos.',
    };
  }

  localStorage.setItem(
    AUTH_KEY,
    JSON.stringify({
      ...foundUser,
      expiration_date: new Date(new Date().getTime() + 60 * 60 * 1000), // 1 hour (60 minutes * 60 seconds * 1000 milliseconds)
    })
  );

  return {
    status: 200,
  };
}

export function logoutUser() {
  localStorage.removeItem(AUTH_KEY);
}

export function getAuthenticatedUser() {
  const authenticatedUser = JSON.parse(localStorage.getItem(AUTH_KEY));

  if (
    authenticatedUser?.id &&
    new Date(authenticatedUser?.expiration_date) >= new Date()
  ) {
    return authenticatedUser;
  }

  return null;
}
