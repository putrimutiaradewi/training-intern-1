import React, { FC } from "react";

interface Props {
  text: string;
  onPencet: () => void;
}

const Button: FC<Props> = ({ text, onPencet }) => {
  return (
    <button
      onClick={onPencet}
      className="bg-slate-500 hover:bg-slate-400 rounded-md px-4 py-2 text-white"
    >
      {text}
    </button>
  );
};

export default Button;
