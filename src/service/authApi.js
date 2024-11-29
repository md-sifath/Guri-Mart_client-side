import supabase from './supabase';

export async function SignupUser({ email, password, name }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName: name,
      },
    },
  });
  if (error) throw new Error(error.message);
  console.log(data);
  return data;
}

export async function loginUser({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw new Error(error.message);
  }
  console.log(data);
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logOutUser() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
  console.log(error);
}

export async function UpdateCurrentUser(password) {
  let UpdateData;
  if (password) UpdateData = { password: password.newPassword };
  console.log(UpdateData);

  const { data, error } = await supabase.auth.updateUser(UpdateData);
  console.log(UpdateData);
  if (error) {
    throw new Error(error.message);
  }
  console.log(data);
  return data;
}
