import { ChangeEvent, HTMLInputTypeAttribute } from "react";

import * as S from "./styles";

interface IInput {
  onClick?: () => void;
  className?: string;
  label?: string;
  id: string;
  mask?: string;
  type?: HTMLInputTypeAttribute;
  disabled?: boolean;
  placeholder?: string;
  name?: string;
  maxLength?: number;
  min?: number;
  max?: number;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  onClick = () => null,
  className = "",
  label,
  id,
  type,
  max,
  disabled = false,
  placeholder,
  min,
  name = id,
  maxLength,
  value,
  onChange,
  onBlur,
}: IInput) {
  return (
    <S.InputContainer
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      id={id}
      name={name}
      maxLength={maxLength}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      min={min}
      max={max}
    />
  );
}
