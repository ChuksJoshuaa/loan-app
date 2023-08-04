import { generateTransactionId, uniqueId } from "./getTransactionId";

export const fetchData = [
  {
    code: 103,
    result: true,
    data: {
      ID: "8",
      TRANSACTION_ID: "TRANS00820230803093637",
      FULL_NAME: "ADLAS NIG LIMITED",
      LOAN_AMOUNT: "2000000.00",
      REPAYMENT_DURATION: "12",
      CREATED_TIME: "2023-08-03 10:36:37",
    },
  },
  {
    code: 103,
    result: true,
    data: {
      ID: "7",
      TRANSACTION_ID: generateTransactionId(),
      FULL_NAME: "CABIN LTD",
      LOAN_AMOUNT: uniqueId(),
      REPAYMENT_DURATION: "6",
      CREATED_TIME: "2023-07-12 05:23:37",
    },
  },
  {
    code: 103,
    result: true,
    data: {
      ID: "6",
      TRANSACTION_ID: generateTransactionId(),
      FULL_NAME: "NIKE GROUP",
      LOAN_AMOUNT: uniqueId(),
      REPAYMENT_DURATION: "3",
      CREATED_TIME: "2023-08-03 09:36:37",
    },
  },
  {
    code: 103,
    result: true,
    data: {
      ID: "5",
      TRANSACTION_ID: generateTransactionId(),
      FULL_NAME: "TESLA",
      LOAN_AMOUNT: uniqueId(),
      REPAYMENT_DURATION: "2",
      CREATED_TIME: "2023-06-23 10:36:37",
    },
  },
];
