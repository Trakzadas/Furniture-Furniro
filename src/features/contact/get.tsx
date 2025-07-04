import Logo from '../../assets/img/logo.svg';
import FundoShop from '../../assets/img/fundoshop.svg';
import { Link } from 'react-router-dom';

function Get() {
  return (
    <div>
      <div className="relative">
        <img className="w-full" src={FundoShop} alt="Background" />
        
        
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <img
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20"
                    src={Logo}
                    alt="Logo"
                />
          <h1 className=" absolute top-[60%] left-1/2 transform -translate-x-1/2 text-[32px] sm:text-[40px] font-bold text-center">
            Contact
          </h1>

        
          <div className="flex space-x-2 mt-[180px] font-semibold text-sm sm:text-base">
            <Link to="/home" className="hover:underline">
              home &gt;
            </Link>
            <span>Contact</span>
          </div>
        </div>
      </div>

      
      <div className="max-w-xl sm:max-w-2xl mx-auto text-center px-4 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Get In Touch With Us
        </h2>
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>
    </div>
  );
}

export default Get;
