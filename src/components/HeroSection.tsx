import { useContext } from "react";
import MyContext from "../context";
import { IIProps } from "../interface";
import { getDate } from "../utils/getTransactionId";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { state } = useContext(MyContext);

  if (state.loanData.length === 0)
    return (
      <div className="flex justify-center items-center text-center">
        No loan request has been made yet, request a loan
      </div>
    );

  return (
    <div className={`${!state.isSidebarOpen ? "mx-6" : "mx-1"}`}>
      <div
        className={`loan-items ${!state.isSidebarOpen ? "ml-[1em]" : "ml-0"}`}
      >
        {state.loanData?.map((val: IIProps, i: number) => (
          <Link
            to={`/loan-repayment/${val.data.TRANSACTION_ID.slice(0, 22)}`}
            key={i}
            className="w-full  h-auto sm:h-[200px] border-2 border-gray-100 shadow-lg mb-5 p-3"
          >
            <h1 className="text-blue-700 font-medium text-xl pb-2 uppercase">
              Name: {val.data.FULL_NAME}
            </h1>
            <h2 className="text-gray-900 font-normal text-lg pb-2">
              Loan Amount: {val.data.LOAN_AMOUNT}
            </h2>
            <h3 className="text-gray-900 font-normal text-lg pb-2">
              Repayment Duration: {val.data.REPAYMENT_DURATION}
            </h3>
            <h6 className="text-gray-900 font-normal text-md pb-2">
              Transaction ID: {val.data.TRANSACTION_ID.slice(0, 22)}
            </h6>
            <h6 className="text-red-600 text-sm">
              <span className="text-gray-900">Date: </span>
              {getDate(val.data.CREATED_TIME)}
            </h6>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
