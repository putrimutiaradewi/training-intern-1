import { FC } from "react";

interface Props {
  placeholder: string;
  type: "text" | "password";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<Props> = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      className="rounded-[10px] p-[25px] px-[40px] py-[6px] shadow-2xl"
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
