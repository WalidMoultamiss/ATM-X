import { useEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { updateScore } from "../app/slices/index";
import { FireworksProvider } from "../components/Fireworks";
import { useNavigate } from "react-router-dom";
import { useInterval } from "../components/useInterval";

export const Menu = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [fadeIt, setFadeIt] = useState(false);
  const [couter, setCouter] = useState(0);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const pages = [
    {
      name: "Retrait",
      path: "/Retrait",
    },
    {
      name: "Mon Solde",
      path: "/Solde",
    },
    {
      name: "Rercharge mobile",
      path: "/Recharge",
    },
    {
      name: "Payer Facture",
      path: "/Facture",
    },
    {
      name: "Payer vignette",
      path: "/Vignette",
    },
    {
      name: "Payer ticket",
      path: "/Ticket",
    },
    {
      name: "Retour",
      path: "/",
    },
  ];

  return (
    <div className="flex flex-col w-screen gap-5 bg-gradient-to-b from-white via-white  p-5 h-screen  justify-center items-center">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtt3N9gu6Suj0ctGL-YWAt38i03gjTYtMtlE5WPENpEb1OitR12XcmWkC6sv8JkzvBJg&usqp=CAU"
        alt=""
      />
      <h1 className="text-center text-4xl font-extrabold text-omniya ">
        Menu Principale
      </h1>
      <div className="flex w-full h-full flex-wrap justify-between items-center">
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => navigate(_.path)}
            className="w-5/12  p-5 rounded-xl shadow-md border-4 border-omniya-dark border-solid text-omniya text-2xl font-extrabold bg-omniya-gold"
          >
            {_.name}
          </button>
        ))}
      </div>
    </div>
  );
};
