// import { useState } from "react";
import mainBg from "../assets/bg.jpeg";
import "../App.css";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";


console.log(mainBg);
const LoginPage = () => {
  //   const [user, setUser] = useState({
  //     username: "",
  //     password: "",
  //   });

    const handleSubmit = () => {
      navigate('/homepage')
    };

  //   const handleUser =
  //     (type: "username" | "password") =>
  //     (ev: React.ChangeEvent<HTMLInputElement>) => {
  //       setUser({ ...user, [type]: ev.target.value });
  //     };
  const navigate = useNavigate ();
  return (
    <div
      className={`flex items-center justify-center h-screen bg-no-repeat bg-cover`}
      style={{
        backgroundImage: `url("${mainBg}")`,
      }}
    >
      <div className="bg-black/50 border:none flex flex-col gap-[9px] rounded-[15px] p-[50px] shadow-md">
        <p className="text-white text-3xl text-center font-bold mb-3">Login</p>
        <Input placeholder="username" type="text" />
        <Input placeholder="password" type="text" />
        <p className="text-red-500 text-sm">Forgot Password?</p>
        <Button onPencet={handleSubmit}text="login"/>
        <p className="text-white text-1xl text-center font-light">
          Don't have an account? Register
        </p>
        {/* <Button text="register"/> */}

        {/* <button
          className="hover:bg-red-500 active:bg-red-400"
          onClick={handleSubmit}
        >
          Submit
        </button> */}
      </div>
    </div>
  );
};

export default LoginPage;
