const loginUser = async (email, password) => {
  if (!email || !password) {
    throw Error("All fields are required!");
  }

  const res = await fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  if (!res.ok) {
    throw Error(data.error);
  }
  localStorage.setItem("token", data.token);
  localStorage.setItem("email", data.email);
  return data;
};

const registerUser = async (email, password, confirmPassword) => {
  if (!email || !password) {
    throw Error("All fields are required!");
  }
  if (confirmPassword != password) {
    throw Error("Passwords do not match!");
  }
  const res = await fetch("/api/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  if (!res.ok) {
    throw Error(data.error);
  }
  localStorage.setItem("token", data.token);
  localStorage.setItem("email", data.email);
  return data;
};

export { loginUser, registerUser };
