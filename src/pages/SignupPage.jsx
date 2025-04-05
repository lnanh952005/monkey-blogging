import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputRHF from "../components/input/InputRHF";
import { ToastContainer, toast } from "react-toastify";

const schemaValidate = yup.object({
  fullname: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const SignupPage = () => {
  const {
    handleSubmit,
    watch,
    control,
    getValues,
    reset,
    formState: { errors, isLoading, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schemaValidate),
    defaultValues: { fullname: "", email: "", password: "" },
  });

  const initialProps = (name, label, placeholder, control) => {
    return {
      name: name,
      label: label,
      placeholder: placeholder,
      control: control,
    };
  };

  const onSubmit = () => {
    console.log("ok");
    console.log(getValues());
    reset({ fullname: "", email: "", password: "" });
    notify();
  };

  const onError = (errors) => {
    console.log("❌ Submit thất bại, có lỗi:", errors);
  };

  return (
    <div className="max-w-[800px] w-full mx-auto mt-5">
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
        <div className="flex flex-col mb-[30px]">
          <InputRHF
            autoFocus
            {...initialProps(
              "fullname",
              "Fullname",
              "Enter your fullname!",
              control
            )}
          />
          <span>{errors.fullname?.message}</span>
        </div>
        <div className="flex flex-col mb-[30px]">
          <InputRHF
            {...initialProps(
              "email",
              "Email address",
              "Enter your email address!",
              control
            )}
          />
          <span>{errors.email?.message}</span>
        </div>
        <div className="flex flex-col mb-[30px]">
          <InputRHF
            {...initialProps(
              "password",
              "Password",
              "Enter your password!",
              control
            )}
          />
          <span>{errors.password?.message}</span>
        </div>
        <button
          className={`block bg-gradient-to-r from-[#00A7B4] via-[#A4D96C] to-[#A4D96C] 
            mx-auto min-w-[343px] py-[20px] rounded-lg cursor-pointer font-semibold text-[24px] text-white`}
        >
          Sign Up
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

function notify() {
  toast("Sign in successfully, now! Sign up to continue");
}

export default SignupPage;
