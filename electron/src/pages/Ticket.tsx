import questions from "../questions.json";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { updateScore } from "../app/slices/index";
import { FireworksProvider } from "../components/Fireworks";
import { useNavigate } from "react-router-dom";
import { useInterval } from "../components/useInterval";
import { NineDigits } from "../components";
import { cities } from "../app/data/cities";
import { LoadingDiv } from "../components/LoadingDiv";

export const Ticket = () => {
  const [enterNum, setEnterNum] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const Options = [
    {
      name: "SAHARA VOYAGEUR",
    },
    {
      name: "GHAZALA",
    },
    {
      name: "CTM",
    },
    {
      name: "ONCF",
    },
  ];

  return (
    <LoadingDiv className="flex flex-col w-screen gap-5 bg-gradient-to-b from-white via-white  p-5 h-screen  justify-center items-center">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtt3N9gu6Suj0ctGL-YWAt38i03gjTYtMtlE5WPENpEb1OitR12XcmWkC6sv8JkzvBJg&usqp=CAU"
        alt=""
      />
      <h1 className="text-center text-4xl font-extrabold text-omniya ">
        Payer le ticket du voyage
      </h1>
      <div className="flex w-full h-full flex-wrap justify-between items-center">
        {!enterNum &&
          Options.map((_, index) => (
            <button
              key={index}
              onClick={() => setEnterNum(true)}
              className="w-5/12  p-5 rounded-xl shadow-md border-4 border-omniya-dark border-solid text-omniya text-2xl font-extrabold bg-omniya-gold"
            >
              {_.name}
            </button>
          ))}
      </div>
      {enterNum && (
        <>
          <div className=" flex w-full gap-10 justify-between">
            <div className="w-1/2 flex flex-col items-center">
              <p className="text-center text-4xl font-extrabold text-omniya ">
                Ville de depart
              </p>

              <select
                name=""
                id=""
                className="w-full mb-6 mt-5 text-2xl font-bold border-2  border-omniya text-center rounded-lg focus:border-omniya"
              >
                {cities.map((city, index) => (
                  <option key={index}>{city.ville}</option>
                ))}
              </select>
            </div>
            <div className="w-1/2 flex flex-col items-center">
              <p className="text-center text-4xl font-extrabold text-omniya ">
                Ville de retour
              </p>

              <select
                name=""
                id=""
                className="w-full mb-6 mt-5 text-2xl font-bold border-2  border-omniya text-center rounded-lg focus:border-omniya"
              >
                {cities.map((city, index) => (
                  <option key={index}>{city.ville}</option>
                ))}
              </select>
            </div>
          </div>
          <button
            onClick={() => navigate("/thankyou")}
            className="px-10 p-4 text-2xl text-white font-bold border-2  bg-omniya text-center rounded-lg focus:border-omniya-gold"
          >
            Valider
          </button>
        </>
      )}
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
    </LoadingDiv>
  );
};
