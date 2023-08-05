import { repaymentSchedule } from "../utils/data";
import MyContext from "../context";
import { useContext, useEffect, useMemo, useState } from "react";
import { IIProps, LoanProps } from "../interface";
import {
  calculateCumulativeRepayment,
  convertTransactionID,
  formatCurrency,
  getDate,
  getUniqueDeviceString,
} from "../utils/getTransactionId";

const LoanSchedule = ({ id }: LoanProps) => {
  const { state } = useContext(MyContext);
  const [singleData, setSingleData] = useState({} as IIProps);
  const loanInterest = 3;
  const repaymentBreakdown = repaymentSchedule.data;

  const filterData = useMemo(() => {
    return (
      state.loanData.find((item: IIProps) => item.data.TRANSACTION_ID === id) ||
      {}
    );
  }, [state.loanData, id]);

  useEffect(() => {
    setSingleData(filterData as IIProps);
  }, [filterData]);

  return (
    <div className={`py-4 mt-2 ${!state.isSidebarOpen ? "mx-6" : "mx-1"}`}>
      <div className={`${!state.isSidebarOpen ? "ml-[1em]" : "ml-0"}`}>
        <h3 className="capitalize text-blue-700 text-xl md:text-2xl font-bold">
          Loan Repayment Schedule
        </h3>

        <div className="flex flex-wrap justify-start items-center py-4">
          <div className="w-full md:w-1/2">
            <h2 className="text-gray-900 text-lg md:text-xl font-semibold mt-5">
              Loan information:
            </h2>

            <div className="mt-3">
              <h3 className="text-md sm:text-lg font-normal pb-2">
                Name: {singleData?.data?.FULL_NAME}
              </h3>
              <h3 className="text-md sm:text-lg font-normal pb-2">
                Loan Amount: ₦{formatCurrency(singleData?.data?.LOAN_AMOUNT)}
              </h3>
              <h3 className="text-md sm:text-lg font-normal pb-2 prevent-copy">
                Trans ID:{" "}
                {convertTransactionID(singleData?.data?.TRANSACTION_ID)}
              </h3>
              <h3 className="text-md sm:text-lg font-normal pb-2">
                Repayment Duration: {singleData?.data?.REPAYMENT_DURATION}{" "}
                {Number(singleData?.data?.REPAYMENT_DURATION) > 1
                  ? "Months"
                  : "Month"}
              </h3>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-gray-900 text-lg md:text-xl font-semibold mt-5">
              Loan summary:
            </h2>

            <div className="mt-3">
              <h3 className="text-md sm:text-lg font-normal pb-2">
                Cummulative Repayment Amount:{" "}
                {calculateCumulativeRepayment(
                  singleData?.data?.LOAN_AMOUNT,
                  loanInterest,
                  singleData?.data?.REPAYMENT_DURATION
                )}
              </h3>
              <h3 className="text-md sm:text-lg font-normal pb-2">
                Interest: {loanInterest}%
              </h3>
              <h3 className="text-md sm:text-lg font-normal pb-2 prevent-copy">
                Referrer ID: {getUniqueDeviceString()}-
                {convertTransactionID(singleData?.data?.TRANSACTION_ID)}
              </h3>
              <h3 className="text-md sm:text-lg font-normal pb-2">
                Date:{" "}
                <span className="text-red-500">
                  {getDate(singleData?.data?.CREATED_TIME)}
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanSchedule;
