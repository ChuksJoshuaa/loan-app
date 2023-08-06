import { useParams } from "react-router-dom";
// import { BASE_URL } from "../utils/api";
import { useEffect } from "react";
import { Header, LoanSchedule } from "../components";
import { convertTransactionID } from "../utils/getTransactionId";

const SingleView = () => {
  const { id } = useParams();
  const transaction_id = convertTransactionID(id!);
  const formData = new FormData();

  formData.append("action", "get_repayment_schedule");
  formData.append("transaction_id", transaction_id!);

  const fetchRepayment = async () => {
    try {
      //Unable to make request using the endpoint due to cors policy.
      // const response = await fetch(BASE_URL, {
      //   method: "POST",
      //   body: formData,
      // });
      // const data = await response.json();
      // const resp = JSON.stringify(data);
      // console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRepayment();
  }, [id]);

  return (
    <div className="main-container">
      <Header type="loan" />
      <LoanSchedule id={id} />
    </div>
  );
};

export default SingleView;
