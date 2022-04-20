import questions from "../questions.json";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { updateScore } from "../app/slices/index";
import { FireworksProvider } from "../components/Fireworks";
import { useNavigate } from "react-router-dom";
import { useInterval } from "../components/useInterval";
import { useUpdateBalanceMutation } from "../graphql/generated/graphql";
import { LoadingDiv } from "../components";

export const Retrait = () => {
  const [user , setUser] = useState(null);
  const navigate = useNavigate();
  const Options = [
    {
      name: "100",
      path: "/Retrait",
    },
    {
      name: "200",
      path: "/Retrait",
    },
    {
      name: "300",
      path: "/Retrait",
    },
    {
      name: "500",
      path: "/Retrait",
    },
    {
      name: "1000",
      path: "/Retrait",
    },
    {
      name: "2000",
      path: "/Retrait",
    },
  ];

  const [newBalance, { data, loading, error }] = useUpdateBalanceMutation();

  const handleNewBalance = async (toTake : number) => {
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
      const userString  = JSON.stringify({...data.updateBalance});
      localStorage.setItem("user", userString);
      // dispatch({
      //   type: UserSlice.actions.setUser,
      //   payload: {...data.login},
      // });
      navigate("/thankyou");
    }
    if(error){
      console.log(error);
    }
  }, [data, error]);

  return (
    <LoadingDiv className="flex flex-col w-screen gap-5 bg-gradient-to-b from-white via-white  p-5 h-screen  justify-center items-center">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtt3N9gu6Suj0ctGL-YWAt38i03gjTYtMtlE5WPENpEb1OitR12XcmWkC6sv8JkzvBJg&usqp=CAU"
        alt=""
      />
      <h1 className="text-center text-4xl font-extrabold text-omniya ">
        Menu Retrait
      </h1>
      <div className="flex w-full h-full flex-wrap justify-between items-center">
        {Options.map((_, index) => (
          <button
            onClick={+_.name <= user?.balance ? () => handleNewBalance(+_.name) : null}
            key={index}
            style={{
              opacity: +_.name <= user?.balance ? 1 : 0.2,
            }}
            className="w-5/12  p-5 rounded-xl shadow-md border-4 border-omniya-dark border-solid text-omniya text-2xl font-extrabold bg-omniya-gold"
          >
            {_.name}
          </button>
        ))}
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
