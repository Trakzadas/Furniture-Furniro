import React from "react";
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineLockClosed,
} from "react-icons/hi";
import Logo from "../../assets/img/logo.svg"; // ajuste o caminho conforme seu projeto
import { useNavigate } from "react-router-dom";

// Tipagem para o layout
interface AuthLayoutProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  children: React.ReactNode;
}

// Componente de layout de autenticação
const AuthLayout: React.FC<AuthLayoutProps> = ({
  title,
  subtitle,
  imageUrl,
  children,
}) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="relative flex flex-col md:flex-row m-6 space-y-8 md:space-y-0 bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Coluna da Esquerda (Formulário) */}
        <div className="flex flex-col justify-center p-8 md:p-14 w-full md:w-[400px]">
          <h1 className="mb-3 text-4xl font-bold">{title}</h1>
          <p className="font-light text-gray-500 mb-8">{subtitle}</p>
          {children}
        </div>

        {/* Coluna da Direita (Imagem) */}
        <div className="relative w-full md:w-[400px]">
          <img
            src={imageUrl}
            alt="Imagem de autenticação"
            className="w-full mt-[150px] object-cover md:block hidden"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#B88E2F] to-transparent opacity-30 md:block hidden"></div>
        </div>
      </div>
    </div>
  );
};

// Tipagem para o componente Input
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ComponentType<{ size?: number }>;
}

//////////////////////////////////////////////////////////////
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

// Página de cadastro
const Cadastro: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout
      title="Crie sua conta"
      subtitle="É rápido e fácil, vamos começar!"
      imageUrl={Logo}
    >
      <div className="w-full max-w-sm">
        <div className="space-y-5">
          <Input
            icon={HiOutlineUser}
            type="text"
            name="nome"
            placeholder="Nome completo"
          />
          <Input
            icon={HiOutlineMail}
            type="email"
            name="email"
            placeholder="Seu melhor e-mail"
          />
          <Input
            icon={HiOutlineLockClosed}
            type="password"
            name="senha"
            placeholder="Crie uma senha"
          />
          <Input
            icon={HiOutlineLockClosed}
            type="password"
            name="confirmarSenha"
            placeholder="Confirme sua senha"
          />
        </div>

        <div className="mt-6">
          <button
            type="button"
            className="w-full bg-[#B88E2F] text-white py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-opacity-90 transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B88E2F]"
          >
            Cadastrar
          </button>
        </div>

        <div className="mt-8 flex justify-center items-center">
          <p className="font-medium text-base text-gray-500">Já tem uma conta?</p>
          <button
            onClick={() => navigate("/")}
            className="text-[#B88E2F] font-semibold ml-2 hover:underline"
          >
            Faça login
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Cadastro;
