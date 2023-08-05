export const generateTransactionId = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");
  const randomNum = String(Math.floor(Math.random() * 100000000)).padStart(
    8,
    "0"
  );

  return `TRANS008${year}${month}${day}${hours}${minutes}${seconds}${randomNum}`;
};

export const uniqueId = () => Math.floor(Math.random() * 1000000000).toString();

export const getDate = (value: string, fullDate = false) => {
  if (!value) return "";
  const date = value.slice(8, 10).trim();
  const month = value.slice(5, 7).trim();
  const year = value.slice(0, 4);
  if (!fullDate) return date + " - " + month + " - " + year;
  else return date + " - " + month + " - " + year;
};

export function generateUniqueKey() {
  const random = Math.random();
  const scaledValue = random * (100 - 10) + 10;
  const uniqueKey = Math.round(scaledValue);
  return uniqueKey;
}

function generateCode(min: number, max: number) {
  const uniqueKey = Math.floor(Math.random() * (max - min + 1)) + min;
  return uniqueKey;
}

export const getCode = () => generateCode(104, 500);

export function getCurrentDateTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export function formatCurrency(i: string) {
  let val = Number(i);
  return new Intl.NumberFormat().format(val);
}

export const calculateCumulativeRepayment = (
  loanAmount: string,
  interest: number,
  month: string
) => {
  const interestRate = interest / 100;
  const numberOfMonths = Number(month);
  let totalRepayment = Number(loanAmount);

  for (let i = 0; i < numberOfMonths; i++) {
    const monthlyInterest = totalRepayment * interestRate;
    totalRepayment += monthlyInterest;
  }

  return `₦${formatCurrency(totalRepayment.toString())}`;
};

export const convertTransactionID = (val: string) => {
  if (val) return val.slice(0, 22);
};

const generateUniqueDeviceString = () => {
  if (window.crypto && window.crypto.getRandomValues) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0].toString();
  } else {
    return Math.random().toString();
  }
};

export const getUniqueDeviceString = () => {
  const deviceInfo = window.navigator.platform;
  if (deviceInfo) return deviceInfo;
  else return generateUniqueDeviceString();
};
