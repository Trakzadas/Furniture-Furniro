import FundoShop from '../../assets/img/fundoshop.svg';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.svg';
import Fil from '../../assets/img/filter.svg';
import Pontinho from '../../assets/img/pontinho.svg';
import Sla from '../../assets/img/sla.svg';

function Filter() {
    return (
        <div>
            {/* Banner */}
            <div className="relative w-full flex flex-col items-center">
                <img className="w-full object-cover" src={FundoShop} alt="Fundo Shop" />

                {/* Logo central no banner */}
                <img
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-20 sm:h-20"
                    src={Logo}
                    alt="Logo"
                />

                {/* Container para título e breadcrumb */}
                <div className="absolute top-[65%] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3">
                    <h1 className="text-[28px] sm:text-[40px] font-bold text-center">Shop</h1>
                    <div className="flex flex-wrap gap-1 sm:gap-2 text-xs sm:text-base justify-center">
                        <Link to="/home" className="font-bold">home &gt;</Link>
                        <span>shop</span>
                    </div>
                </div>
            </div>

            {/* Barra de filtro */}
            <div className="bg-[#F9F1E7] w-full py-4 px-4 sm:px-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                
                {/* Parte esquerda */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <ul className="flex items-center flex-wrap gap-3 sm:gap-4">
                        <li><img className="w-5 h-5 sm:w-6 sm:h-6" src={Fil} alt="Filter Icon" /></li>
                        <li className="text-[#35322d] text-sm sm:text-base">Filter</li>
                        <li><img className="w-5 h-5 sm:w-6 sm:h-6" src={Pontinho} alt="Icon" /></li>
                        <li><img className="w-5 h-5 sm:w-6 sm:h-6" src={Sla} alt="Icon" /></li>
                    </ul>
                    <p className="border-[#9F9F9F] border-l-[2px] h-[24px] sm:h-[28px] pl-4 text-xs sm:text-base text-black">
                        Showing 1–16 of 32 results
                    </p>
                </div>

                {/* Parte direita */}
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-base">
                    <span className="text-[#35322d]">Show</span>
                    <span className="text-[#9F9F9F] bg-white px-3 py-1 rounded shadow">16</span>
                    <span className="text-[#35322d]">Sort by</span>
                    <span className="text-[#9F9F9F] bg-white px-3 py-1 rounded shadow min-w-[100px] sm:min-w-[120px] text-center">
                        Default
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Filter;
