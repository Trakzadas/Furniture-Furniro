import FundoShop from '../../assets/img/fundoshop.svg';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.svg';
import Fil from '../../assets/img/filter.svg';
import Pontinho from '../../assets/img/pontinho.svg';
import Sla from '../../assets/img/sla.svg';

function Filter() {
    return (
        <div>
           
            <div className="relative w-full">
                <img className="w-full" src={FundoShop} alt="Fundo Shop" />

              
                <img
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20"
                    src={Logo}
                    alt="Logo"
                />

                <h1 className="absolute top-[60%] left-1/2 transform -translate-x-1/2 text-[32px] sm:text-[40px] font-bold text-center">
                    Shop
                </h1>

               
                <div className="absolute top-[78%] left-1/2 transform -translate-x-1/2 flex space-x-2 text-sm sm:text-base justify-center">
                    <Link to="/home">
                        <h1 className="font-bold">home &gt;</h1>
                    </Link>
                    <h1>shop</h1>
                </div>
            </div>

          
            <div className="bg-[#F9F1E7] w-full py-4 px-4 sm:px-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <ul className="flex items-center space-x-4">
                        <li><img src={Fil} alt="Filter Icon" /></li>
                        <li className=' text-[#35322d]'>Filter</li>
                        <li><img src={Pontinho} alt="Icon" /></li>
                        <li><img src={Sla} alt="Icon" /></li>
                    </ul>
                    <p className="border-[#9F9F9F] border-l-[2px] h-[28px] pl-4 text-sm sm:text-base  text-black">
                        Showing 1–16 of 32 results
                    </p>
                </div>

               
                <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base">
                    <span className=' text-[#35322d]'>Show</span>
                    <span className="text-[#9F9F9F] bg-white px-4 py-2 rounded shadow">16</span>
                    <span className=' text-[#35322d]'>Sort by</span>
                    <span className="text-[#9F9F9F] bg-white px-4 py-2 rounded shadow min-w-[120px] text-center">Default</span>
                </div>
            </div>
        </div>
    );
}

export default Filter;
