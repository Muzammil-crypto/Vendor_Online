import React from "react";
import { TextInput } from "react-native";
export default function InputText({
  name,
  placeholder,
  style,
  onChangeText,
  onBlur,
  value,
  keyboardType,
  secureTextEntry,
}) {
  return (
    <TextInput
      name={name}
      placeholder={placeholder}
      style={style}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
    />
  );
}
