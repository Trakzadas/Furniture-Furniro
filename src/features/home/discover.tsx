import Button from "../../components/buttom";

function Disc() {
  return (
    <div className="w-full max-w-xl bg-[#FFF3E3] mx-auto md:mx-0 md:absolute md:right-12 md:top-32 h-auto md:h-[443px] shadow-md rounded-lg p-6 md:p-10 flex flex-col justify-center">
      <div>
        <h1 className="font-bold text-lg sm:text-xl text-[#35322d] md:text-2xl">New Arrival</h1>
        <h2 className="text-2xl sm:text-3xl md:text-[45px] text-[#B88E2F] font-bold mt-4">
          Discover Our New Collection
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#35322d]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quam dolorem, quod
          beatae quisquam.
        </p>
        <Button
          title="BUY NOW"
          className="w-full sm:w-[222px] h-14 bg-[#B88E2F] text-white mt-8 font-bold text-base sm:text-[17px] rounded-md"
        />
      </div>
    </div>
  );
}

export default Disc;