export const checkValidateData = (email, password, userName) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  // console.log(userName.length);
  const isUserNameValid = userName.length > 0;
  if (!isEmailValid) return "* email id is not valid";
  if (!isPasswordValid) return "* password is not valid";
  if (!isUserNameValid) return "* userName is not valid";
  return null;
};
