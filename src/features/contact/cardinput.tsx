import React from "react";
import Input from "../../components/imput"; 

const inputData = [
  {
    type: "text",
    name: "Your name",
    label: "Your name",
    placeholder: "Abc",
    className: "w-full p-4 border border-gray-300 rounded-[8px] shadow-2xl  text-black  transition-all hover:scale-110 duration-300",
  },
  {
    type: "email",
    name: "Email address",
    label: "Email address",
    placeholder: "Abc@def.com",
    className: "w-full p-4 border border-gray-300 rounded-[8px] shadow-2xl  text-black transition-all hover:scale-110 duration-300",
  },
  {
    type: "text",
    name: "Subject",
    label: "Subject",
    placeholder: "This is an optional",
    className: "w-full p-4 border border-gray-300 rounded-[8px] shadow-2xl  text-black transition-all hover:scale-110 duration-300",
  },
  {
    type: "text",
    name: "Message",
    label: "Message",
    placeholder: "Hi! I’d like to ask about",
    className: "w-full p-4 border border-gray-300 rounded-[8px] h-32 shadow-2xl resize-none  text-black transition-all hover:scale-110 duration-300",
  },
];

const InputList: React.FC = () => {
  return (
    <div className="space-y-6 max-w-full sm:max-w-md mx-auto px-4 mt-20 ">
      {inputData.map((input, index) => (
        <Input
          key={index}
          type={input.type}
          name={input.name}
          label={input.label}
          placeholder={input.placeholder}
          className={input.className}
        />
      ))}
    </div>
  );
};

export default InputList;
