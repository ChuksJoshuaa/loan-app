import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { Navbar } from "./components";
import { HomeView, RequestLoan } from "./pages";
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
        <div>
          <Navbar />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/request-loan" element={<RequestLoan />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
