import React from "react";

interface InputProps {
  type: string;
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  value?: string; // Adicione esta linha
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // E esta
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  label,
  placeholder,
  className,
  required,
  value,
  onChange,
}) => (
  <div>
    <label className="block mb-1 font-medium">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={className}
      required={required}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Input;