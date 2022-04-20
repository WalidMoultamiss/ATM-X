
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
      name: "SAHARA VOYAGE",
      src:"data:image/jpeg;base64,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"
    },
    {
      name: "GHAZALA",
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftK9gJOMSPtlvoqDZznec0Ksg1BAIOIs1X7NtEZVFf0GuGvkD2Ylkp8MWOaEbjQANHvM&usqp=CAU"
    },
    {
      name: "CTM",
      src:"https://www.marocemploi.cc/storage/files/ma/62/thumb-816x460-b089f4edc488255e8778e0e752fd47c8.jpg"
    },
    {
      name: "ONCF",
      src:"https://www.challenge.ma/wp-content/uploads/2013/08/logo-oncf_9451.jpg"
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
              className={`w-5/12  p-5 flex gap-3 items-center rounded-xl shadow-md border-4 border-omniya-dark border-solid text-omniya text-2xl font-extrabold bg-omniya-gold ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}
            >
              <div style={{
                backgroundImage: `url(${_.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "50px",
                width: "50px",
              }} />
              <h3>
              {_.name}
              </h3>
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
