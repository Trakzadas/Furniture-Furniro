import React, { useState } from "react";
import Button from "../../components/buttom";
import Input from "../../components/imput";
import { useNavigate } from 'react-router-dom';

const inputLogin = [
  {
    type: "email",
    name: "Email",
    label: "Email",
    placeholder: "Digite seu email",
    className: "w-full p-2 border border-gray-300 rounded-[8px] px-[20px] py-[20px] shadow-2xl",
    required: true,
  },
  {
    type: "password",
    name: "Senha",
    label: "Senha",
    placeholder: "Digite sua senha",
    className: "w-full p-2 border border-gray-300 rounded-[8px] px-[20px] py-[20px] shadow-2xl pr-[200px]",
    required: true,
  },
];

const InputLogin: React.FC = () => {
  const [form, setForm] = useState({ Email: "", Senha: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <form className="space-y-4 max-w-md mx-auto" onSubmit={handleSubmit}>
      {inputLogin.map((input, index) => (
        <Input
          key={index}
          type={input.type}
          name={input.name}
          label={input.label}
          placeholder={input.placeholder}
          className={input.className}
          required={input.required}
          value={form[input.name as "Email" | "Senha"]}
          onChange={handleChange}
        />
      ))}
      <Button
        type="submit"
        className="w-[245px] h-[48px] text-[#B88E2F] text-[20px] border-[2px] border-[#B88E2F] ml-[70px] rounded-md shadow-lg"
      >
        Entrar
      </Button>
    </form>
  );
};

export default InputLogin;