import { useNavigate } from "react-router-dom";
import { UserSlice } from "../app/slices";
import { useAppDispatch } from "../app/hooks";
import Lottie from "lottie-react";
import * as cardVisa from "../lotties/bankCard.json";
import { useEffect, useState } from "react";
import { LoadingDiv, NineDigits } from "../components/index";
import { useGetUserMutation } from "../graphql/generated/graphql";


export const Landing = () => {
  const dispatch = useAppDispatch();
  const [login, { data, loading, error }] = useGetUserMutation();
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("1234567890123460");
  const [cardCode, setCardCode] = useState("1234");




  const handleLogin = async () => {
    console.log("loading", loading);
    await login({
      variables: {
        input: {
          visa: cardNumber,
          code: cardCode
        },
      },
    });
  };

  useEffect(() => {
    
    if (data) {
      localStorage.setItem("token", data.login.token);
      const userString  = JSON.stringify({...data.login});
      localStorage.setItem("user", userString);
      // dispatch({
      //   type: UserSlice.actions.setUser,
      //   payload: {...data.login},
      // });
      navigate("/Menu");
    }
    if(error){
      console.log(error);
    }
  }, [data, error]);

  // useEffect(() => {
  //   //put dash between 4 numbers
  //   const formatCardNumber = (cardNumber: string) => {
  //     return cardNumber.replace(/(.{4})/g, "$1-");
  //   };
  //   setCardNumber(formatCardNumber(cardNumber));
  // }, [cardNumber]);

  return (
    <LoadingDiv
    loading={loading}
    className="bg-white w-full flex h-screen">
      <div className="w-1/2 h-full flex items-center flex-col bg-omniya-gold">
        {/* <Lottie
          animationData={cardVisa}
          style={{
            width: "400px",
            height: "400px",
          }}
          loop
        /> */}
        <div className="w-full h-full px-36 flex items-center flex-col justify-center">
          <p className="text-center text-4xl font-extrabold text-omniya ">
            Entrer votre carte
          </p>

          <input
            value={cardNumber}
            type="text"
            autoFocus
            style={{
              letterSpacing: "6px",
            }}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full mb-6 h-10 mt-5 text-2xl font-bold border-2  border-omniya text-center rounded-lg focus:border-omniya"
          />
          <p className="text-center text-4xl font-extrabold text-omniya ">
            Entrer votre code
          </p>

          <input
            value={cardCode}
            type="text"
            autoFocus
            max={4}
            style={{
              letterSpacing: "6px",
            }}
            onChange={(e) => {
              if (cardCode.length < 5) {
                setCardCode(e.target.value);
              }
            }}
            className="w-full mb-6 h-10 mt-5 text-2xl font-bold border-2  border-omniya text-center rounded-lg focus:border-omniya"
          />
          <NineDigits
            actionOk={handleLogin}
            setCardNumber={setCardCode}
          />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url("https://scontent.frba1-1.fna.fbcdn.net/v/t39.30808-6/260880160_4519910224770815_6002457319736195935_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFxc3uMvCJ44vjk4Occ_H06t1_GaFI6vUK3X8ZoUjq9Qunig5TT1ehihjAo5GeYMObnn2yVsVmCJLqftwV7J2Fj&_nc_ohc=Y7l9MPBoHC8AX8dGM0M&_nc_zt=23&_nc_ht=scontent.frba1-1.fna&oh=00_AT_lM_on6xXtX-HCpdkJctApAdu1E3qqI96MSTyrMDTL6A&oe=62623937")`,
        }}
        className="w-1/2 h-full  bg-cover bg-center"
      ></div>
    </LoadingDiv>
  );
};
