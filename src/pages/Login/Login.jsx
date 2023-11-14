import React, { useContext } from "react";
import { useState } from "react";

import { MainContext } from "../../Context/MainContext";

function Login() {
  // var salt = bcrypt.genSaltSync(10);
  // var hashedPass= bcrypt.hashSync("B4c0/\/", salt);
  const [key, setKey] = useState("");
  const { isAdmin, setIsAdmin } = useContext(MainContext);

  const handleSubmit = async () => {
    try {
      await fetch("http://localhost:3000/api/checkforadmin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          key: key,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.data);
          {
            data.data == false ? alert("You enterd wrong key") : "";
          }
        })
        .catch((err) => console.log(err));
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen">
        <div className=" w-96 h-96 bg-black flex justify-center items-center flex-col">
          <input
            value={key}
            className="rounded-xl placeholder:font-bold placeholder:text-center h-10 text-center m-2 py-2 px-4"
            placeholder="Password"
            type="password"
            onChange={(e) => {
              setKey(e.target.value);
            }}
          />
          <button
            className="text-center font-bold text-3xl text-black m-2 my-6 py-2 px-4 rounded-lg bg-slate-300  hover:bg-slate-800 hover:text-white transition duration-300 ease-in-out"
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
