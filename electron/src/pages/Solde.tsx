import {  useEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { useNavigate } from "react-router-dom";
import { LoadingDiv } from "../components";
import { useGetUserMutation } from "../graphql/generated/graphql";

export const Solde = () => {
  
  const navigate = useNavigate();
  const [solde , setSolde] = useState(0);


  useEffect(() => {

    //set solde from localstorage
    const localSolde = localStorage.getItem("user");
    if(localSolde){
      const user = JSON.parse(localSolde);
      setSolde(user.balance);
    }

  }, []);

  return (
    <div className="flex flex-col w-screen gap-5 bg-gradient-to-b from-white via-white  p-5 h-screen  justify-center items-center">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtt3N9gu6Suj0ctGL-YWAt38i03gjTYtMtlE5WPENpEb1OitR12XcmWkC6sv8JkzvBJg&usqp=CAU"
        alt=""
      />
      <h1 className="text-center text-2xl font-extrabold text-omniya ">
        Votre Solde est de :
      </h1>

      <LoadingDiv
        className="text-center  text-8xl font-extrabold text-omniya-dark "
      >
        {solde} &nbsp;
        MAD
      </LoadingDiv>

      <div className="flex w-full h-full flex-wrap justify-between items-center">
        <button
          onClick={() => navigate("/Menu")}
          className="w-5/12  p-5 rounded-xl shadow-md border-4 border-omniya-dark border-solid text-omniya text-2xl font-extrabold bg-omniya-gold"
        >
          Menu Principale
        </button>
        <button
          onClick={() => navigate("/")}
          className="w-5/12 capitalize  p-5 rounded-xl shadow-md border-4 border-omniya-dark border-solid text-omniya text-2xl font-extrabold bg-omniya-gold"
        >
          éjecter
        </button>
      </div>
    </div>
  );
};
