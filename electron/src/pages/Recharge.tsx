import { useEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { updateScore } from "../app/slices/index";
import { FireworksProvider } from "../components/Fireworks";
import { useNavigate } from "react-router-dom";
import { useInterval } from "../components/useInterval";
import { NineDigits } from "../components";
import { useUpdateBalanceMutation } from "../graphql/generated/graphql";

export const Recharge = () => {
  const [enterNum, setEnterNum] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [choosePrice, setChoosePrice] = useState(false);
  const [chooseOperator, setChooseOperator] = useState(true);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const Options = [
    {
      name: "IAM",
    },
    {
      name: "Orange",
    },
    {
      name: "INWI",
    },
  ];

  const OptionsNumbers = [
    {
      name: "10",
      path: "/Retrait",
    },
    {
      name: "20",
      path: "/Retrait",
    },
    {
      name: "30",
      path: "/Retrait",
    },
    {
      name: "50",
      path: "/Retrait",
    },
    {
      name: "100",
      path: "/Retrait",
    },
    {
      name: "200",
      path: "/Retrait",
    },
  ];

  const [newBalance, { data, loading, error }] = useUpdateBalanceMutation();

  const handleNewBalance = async (toTake: number) => {
    console.log("New balance", loading);
    const headers = new Headers();
    headers.append("Authorization", "Bearer " + localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("user"));
    await newBalance({
      variables: {
        updateBalanceId: user.id,
        input: {
          balance: +user.balance - toTake,
        },
      },
    });
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);

  useEffect(() => {
    if (data) {
      const userString = JSON.stringify({ ...data.updateBalance });
      localStorage.setItem("user", userString);
      // dispatch({
      //   type: UserSlice.actions.setUser,
      //   payload: {...data.login},
      // });
      navigate("/thankyou");
    }
    if (error) {
      console.log(error);
    }
  }, [data, error]);

  return (
    <div className="flex flex-col w-screen gap-5 bg-gradient-to-b from-white via-white  p-5 h-screen  justify-center items-center">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtt3N9gu6Suj0ctGL-YWAt38i03gjTYtMtlE5WPENpEb1OitR12XcmWkC6sv8JkzvBJg&usqp=CAU"
        alt=""
      />
      <h1 className="text-center text-4xl font-extrabold text-omniya ">
        Menu Recharge Mobile
      </h1>
      <div className="flex w-full h-full flex-wrap justify-between items-center">
        {chooseOperator &&
          Options.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setChooseOperator(false);
                setChoosePrice(true);
              }}
              className="w-5/12  p-5 rounded-xl shadow-md border-4 border-omniya-dark border-solid text-omniya text-2xl font-extrabold bg-omniya-gold"
            >
              {_.name}
            </button>
          ))}
        {choosePrice &&
          OptionsNumbers.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setChoosePrice(false);

                setEnterNum(true)}}
              className="w-5/12  p-5 rounded-xl shadow-md border-4 border-omniya-dark border-solid text-omniya text-2xl font-extrabold bg-omniya-gold"
            >
              {_.name}
            </button>
          ))}
      </div>
      {enterNum && (
        <div className="w-1/2 flex flex-col items-center">
          <p className="text-center text-4xl font-extrabold text-omniya ">
            Entrer votre numero
          </p>

          <input
            value={phoneNumber}
            type="text"
            autoFocus
            style={{
              letterSpacing: "6px",
            }}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full mb-6 h-10 mt-5 text-2xl font-bold border-2  border-omniya text-center rounded-lg focus:border-omniya"
          />
          <NineDigits
            actionOk={() => navigate("/thankyou")}
            setCardNumber={setPhoneNumber}
          />
        </div>
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
    </div>
  );
};
