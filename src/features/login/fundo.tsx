import InputLogin from "./inputlogin";
import { useNavigate } from "react-router-dom";
import loginImage from "../../assets/img/logo.svg";

function Fundo() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="relative flex flex-col md:flex-row m-6 space-y-8 md:space-y-0 bg-white shadow-2xl rounded-2xl">
        
        {/* Coluna da Esquerda (Formulário) */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Bem-vindo de volta!</span>
          <span className="font-light text-gray-500 mb-8">
            Faça login para continuar de onde parou.
          </span>

          <InputLogin />

          {/* Botão "Cadastre-se" abaixo do InputLogin */}
          <div className="mt-8 flex justify-center items-center">
            <p className="font-medium text-base text-gray-500">Não tem uma conta?</p>
            <button
              onClick={() => navigate("/cadastro")}
              className="text-[#B88E2F] font-semibold ml-2 hover:underline"
            >
              Cadastre-se
            </button>
          </div>
        </div>

        {/* Coluna da Direita (Imagem) */}
        <div className="relative">
          <img
            src={loginImage}
            alt="Imagem de login"
            className="w-[400px] hidden rounded-r-2xl md:block object-cover mt-[80px]"
          />
          <div className="absolute hidden md:block inset-0 bg-gradient-to-t from-[#B88E2F] to-transparent opacity-30 rounded-r-2xl"></div>
        </div>
      </div>
    </div>
  );
}

export default Fundo;
