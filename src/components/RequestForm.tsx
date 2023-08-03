import { FormProps } from "../interface";
import { useState } from "react";
import { BASE_URL } from "../utils/api";

const initialState: FormProps = {
  action: "",
  full_name: "",
  loan_amount: "",
  repayment_duration: "",
};

const RequestForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEnterKeyPress = (e: React.KeyboardEvent) => {
    e.preventDefault();
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const emptyField = () => {
    setErrors("");
    setFormData(initialState);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.action ||
      !formData.full_name ||
      !formData.loan_amount ||
      !formData.repayment_duration
    ) {
      setErrors("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          emptyField();
        })
        .catch((error) => {
          console.log(error);
          setErrors("Sorry, an error occurred");
        });
    } catch (error) {
      console.log(error);
      setErrors("Sorry, an error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="request-form">
      <div className="bg-white shadow-md rounded px-8 pt-2 pb-8 mb-4 flex flex-col my-2">
        <h1 className="text-center text-xl md:text-2xl text-gray-900 pb-2 font-bold capitalize mt-2">
          Request Loan
        </h1>
        <p className="text-center text-[crimson] text-md mb-5 font-normal">
          {errors}
        </p>
        <div className="-mx-3 flex flex-col mb-6">
          <div className="px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="action"
            >
              Action
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 outline-none"
              id="action"
              type="text"
              name="action"
              value={formData.action}
              onChange={handleChange}
            />
          </div>
          <div className="px-3 mb-6 md:mb-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="full_name"
            >
              Full Name
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 outline-none"
              id="full_name"
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
            />
          </div>
          <div className="px-3 mb-6 md:mb-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="loan_amount"
            >
              Loan Amount
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 outline-none"
              id="loan_amount"
              type="text"
              name="loan_amount"
              value={formData.loan_amount}
              onChange={handleChange}
            />
          </div>
          <div className="px-3 mb-6 md:mb-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="repayment_duration"
            >
              Repayment Duration
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 outline-none"
              id="repayment_duration"
              type="text"
              name="repayment_duration"
              value={formData.repayment_duration}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-end justify-end items-center">
            <button
              type="button"
              onClick={emptyField}
              className="mr-3 text-gray-900 cursor-pointer"
            >
              Cancel
            </button>

            <button
              className={`flex flex-row navy bg-gray-900 capitalize hover:bg-gray-700 text-white font-[semi-bold] py-2 px-4 rounded ${
                isSubmitting && "opacity-50"
              }`}
              onClick={handleSubmit}
              onKeyDown={handleEnterKeyPress}
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <div aria-label="Loading..." role="status" className="mr-1">
                  <svg className="h-5 w-5 animate-spin" viewBox="3 3 18 18">
                    <path
                      className="fill-gray-200"
                      d="M12 5C8.13401 5 5 8.13401 5 12c0 3.866 3.13401 7 7 7 3.866.0 7-3.134 7-7 0-3.86599-3.134-7-7-7zM3 12c0-4.97056 4.02944-9 9-9 4.9706.0 9 4.02944 9 9 0 4.9706-4.0294 9-9 9-4.97056.0-9-4.0294-9-9z"
                    ></path>
                    <path
                      className="fill-gray-800"
                      d="M16.9497 7.05015c-2.7336-2.73367-7.16578-2.73367-9.89945.0-.39052.39052-1.02369.39052-1.41421.0-.39053-.39053-.39053-1.02369.0-1.41422 3.51472-3.51472 9.21316-3.51472 12.72796.0C18.7545 6.02646 18.7545 6.65962 18.364 7.05015c-.390599999999999.39052-1.0237.39052-1.4143.0z"
                    ></path>
                  </svg>
                </div>
              )}
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
