import Get from "../features/contact/get";
import CardComi from "../features/contact/comuni";
import InputList from "../features/contact/cardinput";
import Button from "../components/buttom";

function Contact() {
  return (
    <div>
      <Get />
      <div className="flex flex-col md:flex-row w-full px-4 md:px-20 gap-10">
        <div className="md:w-1/3 w-full flex justify-center">
          <CardComi />
        </div>
        <div className="md:w-2/3 w-full">
          <InputList />
         
          <div className="flex justify-center mt-8">
            <Button
              title="Submit"
              className="w-[237px] h-[55px] text-white bg-[#B88E2F] font-bold rounded-md hover:bg-[#a37f1f] transition"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
