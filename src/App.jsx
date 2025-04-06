import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import HomePage from "./pages/HomePage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>navigation</div>
              <Outlet />
            </>
          }
        >
          <Route path="" element={<HomePage/>} />
          <Route path="sign-up" element={<SignupPage />} />
          <Route path="sign-in" element={<SigninPage />} />
          <Route path=":toast" element={<HomePage/>} />
          <Route path="*" element={<div>404 page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
