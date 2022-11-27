export function confirmPasswordValidator(confirmPassword, password) {
  if (confirmPassword !== password) return "Password do not matches.";

  return "";
}
