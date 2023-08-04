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
