import { Alert } from "react-native";

export function checkBoxValidator(isPressed) {
  if (isPressed == false) return Alert("CheckBox can't be empty.");

  return "";
}
