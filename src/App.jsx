import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/sign-in" element={<SigninPage />} />
        <Route path="*" element={<div>404 page</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
