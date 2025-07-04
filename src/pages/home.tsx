import Fundo from '../assets/img/fundo.svg'
import Disc from '../features/home/discover';
import Bro from '../features/home/browse';
import CardList from '../features/home/products';
import Button from '../components/buttom';

function Home() {
  return (
    <div>
      <img className="w-full object-cover max-h-[400px] sm:max-h-[500px] md:max-h-[600px]" src={Fundo} alt="" />
      <div>
        <Disc />
      </div>
      <div>
        <Bro />
        <h1 className="text-2xl sm:text-3xl md:text-[35px] font-bold w-full text-center my-8">
          Our products
        </h1>
        <CardList />
        <div className="flex justify-center mt-8 mb-4">
          <Button
            className="w-48 h-12 text-[#B88E2F] font-bold border border-[#B88E2F] rounded-sm"
            title="Show More"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;