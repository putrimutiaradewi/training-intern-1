import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const calculatorButton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const HomePage = () => {
  return (
    <div className="flex flex-col gap-2 m-2">
      <Input placeholder="Angka" type="text" />
      <div className="grid grid-cols-3 gap-2">
        {calculatorButton.map((arr) => (
          <Button text={String(arr)} onPencet={() => null}></Button>
        ))}
        <Button onPencet={() => null} text="="></Button>
        <Button onPencet={() => null} text="+"></Button>
        <Button onPencet={() => null} text="-"></Button>
      </div>
    </div>
  );
};

export default HomePage;
