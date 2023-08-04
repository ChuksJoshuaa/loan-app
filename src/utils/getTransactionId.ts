export const generateTransactionId = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");
  const milliseconds = String(currentDate.getMilliseconds()).padStart(3, "0");
  const randomNum = String(Math.floor(Math.random() * 10000)).padStart(5, "0");

  return `TRANS008${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}${randomNum}`;
};

export const uniqueId = () => Math.floor(Math.random() * 1000000000);
