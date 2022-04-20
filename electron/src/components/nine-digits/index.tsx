import React, { FC } from "react";

type Props = {
  setCardNumber: React.Dispatch<React.SetStateAction<string>>;
  actionOk: () => void;
}

export const NineDigits:FC<Props> = ({setCardNumber , actionOk}) => {
  return (
    <div className="w-64 h-auto bg-white rounded-2xl  shadow-xl border-4 border-gray-100">
      <div className="w-auto m-1 h-auto mb-2">
        <div className="gap-3 m-2 flex justify-between">
          <div
          onClick={
            //clear 
            () => setCardNumber('')
          }
          className="bg-yellow-100 shadow-md rounded-2xl cursor-pointer w-20 h-10 text-yellow-600 font-medium flex justify-center items-center">
            C
          </div>
          <button
          onClick={actionOk}
          className="bg-green-100 shadow-md rounded-2xl cursor-pointer w-44 h-10 text-green-600 font-medium flex justify-center items-center">
            OK
          </button>
        </div>
        <div className="gap-3 m-2 flex justify-between">
          <div
          onClick={
            // 7 to setCardNumber
            () => setCardNumber((value)=> value + '7')
          }
          className="bg-gray-200 shadow-md rounded-2xl cursor-pointer w-20 h-10 text-black font-medium flex justify-center items-center">
            7
          </div>
          <div
          onClick={
            () => setCardNumber((value)=> value + '8')
          }
          className="bg-gray-200 shadow-md rounded-2xl cursor-pointer w-20 h-10 text-black font-medium flex justify-center items-center">
            8
          </div>
          <div
          
          onClick={
            () => setCardNumber((value)=> value + '9')
          }
          
          className="bg-gray-200 shadow-md rounded-2xl cursor-pointer w-20 h-10 text-black font-medium flex justify-center items-center">
            9
          </div>
        </div>
        <div className="gap-3 m-2 flex justify-between">
          <div
          
          onClick={
            () => setCardNumber((value)=> value + '4')
          }
          
          className="bg-gray-200 shadow-md rounded-2xl cursor-pointer w-20 h-10 text-black font-medium flex justify-center items-center">
            4
          </div>
          <div
          
          onClick={
            () => setCardNumber((value)=> value + '5')
          }

          className="bg-gray-200 shadow-md rounded-2xl cursor-pointer w-20 h-10 text-black font-medium flex justify-center items-center">
            5
          </div>
          <div
          
          onClick={
            () => setCardNumber((value)=> value + '6')
          }

          className="bg-gray-200 shadow-md rounded-2xl cursor-pointer w-20 h-10 text-black font-medium flex justify-center items-center">
            6
          </div>
        </div>
        <div className="gap-3 m-2 flex justify-between">
          <div
          
          onClick={
            () => setCardNumber((value)=> value + '1')
          }

          className="bg-gray-200 shadow-md rounded-2xl cursor-pointer w-20 h-10 text-black font-medium flex justify-center items-center">
            1
          </div>
          <div 

          onClick={
            () => setCardNumber((value)=> value + '2')
          }

          className="bg-gray-200 shadow-md rounded-2xl cursor-pointer w-20 h-10 text-black font-medium flex justify-center items-center">
            2
          </div>
          <div
          
          onClick={
            () => setCardNumber((value)=> value + '3')
          }

          className="bg-gray-200 shadow-md rounded-2xl cursor-pointer w-20 h-10 text-black font-medium flex justify-center items-center">
            3
          </div>
        </div>
        <div className="gap-3 m-2 flex justify-between">
          <div 
          
          onClick={
            () => setCardNumber((value)=> value + '0')
          }


          className="bg-gray-200 shadow-md rounded-2xl cursor-pointer w-full h-10 text-black font-medium flex justify-center items-center">
            0
          </div>
            <div className="bg-gray-200 shadow-md rounded-2xl cursor-pointer w-20 h-10 text-black font-medium flex justify-center items-center">
              .
            </div>
        </div>
        <div className="flex justify-center mt-5">
          <div className="w-20 h-1 bg-gray-100 rounded-l-xl rounded-r-xl"></div>
        </div>
      </div>
    </div>
  );
};
