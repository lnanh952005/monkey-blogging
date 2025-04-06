import * as yup from "yup";
import { useForm } from "react-hook-form";
import { createContext, useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addDoc, collection, getDocs } from "firebase/firestore";

import Label from "../components/input/Label";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import { auth, db } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

const schemaValidate = yup.object({
  fullname: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const signupContext = createContext();

const ContextProvider = (props) => {
  return <signupContext.Provider value={{ ...props }}></signupContext.Provider>;
};

const SignupPage = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const {
    handleSubmit,
    watch,
    control,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schemaValidate),
    defaultValues: { fullname: "", email: "", password: "" },
  });

  const onSubmit = async (values) => {
    console.log("submit: >>>" + getValues());
    const { fullname, email, password } = getValues();
    try {
      const userCridential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(auth.currentUser, {
        displayName: fullname,
        photoURL: "",
      });
      const { operationType, providerId, user, _tokenResponse } =
        userCridential;

      const userCol = collection(db, "users"); // ✅ modular API

      const userDoc = await addDoc(userCol, {
        fullname,
        email,
        password,
      });
      
      console.log(userCridential);
      navigate("/", { state: { toast: "success" } });
    } catch (error) {
      toast.error("user already in use!");
      console.log("user already in use! >>> ", error);
    }
    // reset({ fullname: "", email: "", password: "" });
  };

  const onError = (errors) => {
    console.log("❌ Submit thất bại, có lỗi:", errors);
    if (errors?.fullname?.message) {
      toast.error(errors?.fullname?.message);
    }
    if (errors?.email?.message) {
      toast.error(errors?.email?.message);
    }
    if (errors?.password?.message) {
      toast.error(errors?.password?.message);
    }
  };

  return (
    <div className="max-w-[620px] px-5 w-full mx-auto mt-5">
      <div>
        <img className="mx-auto" srcSet="/monkey.svg" alt="" />
        <h2 className="text-[#2EBAC1] text-center font-semibold text-[40px]">
          Monkey Blogging
        </h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        action=""
        autoComplete="off"
      >
        <div className="flex flex-col mb-[20px]">
          <Label htmlFor={"fullname"}>Fullname</Label>
          <Input
            autoFocus
            {...{
              name: "fullname",
              placeholder: "Enter your full name",
              type: "text",
              control,
            }}
          />
        </div>
        <div className="flex flex-col mb-[20px]">
          <Label htmlFor={"email"}>Email address</Label>
          <Input
            {...{
              name: "email",
              placeholder: "Enter your email address",
              type: "text",
              control,
            }}
          />
        </div>
        <div className="flex flex-col mb-[20px]">
          <Label htmlFor={"password"}>Password</Label>
          <Input
            show={show}
            setShow={setShow}
            {...{
              name: "password",
              placeholder: "Enter your password",
              type: "password",
              control,
            }}
          />
        </div>
        <Button loading={isSubmitting}>Sign Up</Button>
      </form>
      <ToastContainer pauseOnHover={false} />
    </div>
  );
};

export default SignupPage;
