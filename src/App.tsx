import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { Footer, Navbar } from "./components";
import { HomeView, RequestLoan, SingleView } from "./pages";
import MyContext from "./context";
import Loader from "./components/Loader";
import { ToastContainer } from "react-toastify";

function App() {
  const { state } = useContext(MyContext);

  return (
    <>
      {state.loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Navbar />
          <div style={{ minHeight: "100vh" }}>
            <ToastContainer />
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/request-loan" element={<RequestLoan />} />
              <Route path="/loan-repayment/:id" element={<SingleView />} />
            </Routes>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
