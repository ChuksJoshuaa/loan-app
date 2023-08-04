import { useParams } from "react-router-dom";
import { BASE_URL } from "../utils/api";
import { useEffect } from "react";

const SingleView = () => {
  const { id } = useParams();
  const formData = new FormData();

  formData.append("action", "get_repayment_schedule");
  formData.append("transaction_id", id!);

  const fetchRepayment = async () => {
    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      const resp = JSON.stringify(data);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRepayment();
  }, []);

  return <div>SingleView</div>;
};

export default SingleView;
