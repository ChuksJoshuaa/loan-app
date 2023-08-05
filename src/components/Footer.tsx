const Footer = () => {
  return (
    <div className="footer mt-5 bg-gray-900">
      <h5 className="text-capitalize">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-white">Loan App.</span>
      </h5>{" "}
      <h5 className="fs-8 fw-medium text-capitalize">All rights reserved</h5>
    </div>
  );
};

export default Footer;
