import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.toast == "success") {
      toast.success("Register successfully!");
      navigate("/", { replace: true, state: null });
    }
  }, []);

  return (
    <>
      <div>HomePage</div>
      <ToastContainer pauseOnHover={false} />
    </>
  );
};

export default HomePage;
