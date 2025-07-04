import Div from '../../assets/img/diningcard.svg';
import Liv from '../../assets/img/livingcard.svg';
import Bear from '../../assets/img/bearcard.svg';

function Bro() {
  return (
    <div className="relative w-full text-center pb-14 mt-[60px] mb-10">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-[35px] font-bold">Browse The Range</h1>
        <p className="text-base sm:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="mt-10">
        <ul className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 w-full">
          <li className="flex flex-col items-center">
            <img src={Div} alt="Dining" className="w-56 sm:w-64 md:w-72" />
            <h1 className="font-bold text-base sm:text-lg md:text-[19px] mt-2">Dining</h1>
          </li>
          <li className="flex flex-col items-center">
            <img src={Liv} alt="Living" className="w-56 sm:w-64 md:w-72" />
            <h1 className="font-bold text-base sm:text-lg md:text-[19px] mt-2">Living</h1>
          </li>
          <li className="flex flex-col items-center">
            <img src={Bear} alt="Bedroom" className="w-56 sm:w-64 md:w-72" />
            <h1 className="font-bold text-base sm:text-lg md:text-[19px] mt-2">Bedroom</h1>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Bro;
