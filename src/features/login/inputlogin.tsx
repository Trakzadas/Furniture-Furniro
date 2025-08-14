import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';

// Tipagem para o componente Input
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon: React.ComponentType<{ size?: number }>;
};

const Input: React.FC<InputProps> = ({ icon: Icon, ...props }) => (
  <div className="relative w-full">
    <div className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
      <Icon size={20} />
    </div>
    <input
      {...props}
      className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B88E2F]/50 focus:border-[#B88E2F] outline-none transition-all duration-300"
    />
  </div>
);

const InputLogin: React.FC = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Adicione sua lógica de validação/autenticação aqui
    console.log("Login submetido com:", form);
    navigate("/home");
  };

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
      <div className="space-y-5">
        <Input
          icon={HiOutlineMail}
          type="email"
          name="email"
          placeholder="Seu e-mail"
          required
          value={form.email}
          onChange={handleChange}
        />
        <Input
          icon={HiOutlineLockClosed}
          type="password"
          name="password"
          placeholder="Sua senha"
          required
          value={form.password}
          onChange={handleChange}
        />
      </div>

      <div className="mt-6 flex flex-col gap-y-4">
        <button
          type="submit"
          className="w-full bg-[#B88E2F] text-white py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-opacity-90 transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B88E2F]"
        >
          Entrar
        </button>
      </div>

     
    </form>
  );
};

export default InputLogin;