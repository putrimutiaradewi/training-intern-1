import { FC } from "react";

interface props {
  placeholder: string;
  type: "text" | "password";
}

const Input: FC<props> = ({ type, placeholder }) => {
  return (
    <input
      className=" rounded-[10px] p-[25px] px-[40px] py-[6px] shadow-2xl"
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
