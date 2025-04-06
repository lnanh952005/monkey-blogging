import { useController } from "react-hook-form";

const Input = ({
  name,
  control,
  show = true,
  setShow = () => {},
  type,
  ...props
}) => {
  const { field } = useController({
    name,
    control,
  });

  return (
    <div className="relative">
      <input
        {...field}
        {...props}
        id={name}
        type={show ? "text" : type}
        autoComplete={type == 'password' ? "off" : ""}
        className="w-full border border-white rounded-lg focus:border-[#00B4AA] bg-[#E7ECF3] focus:bg-white transition-all outline-none pl-5 pr-8 py-4"
      />
      {type == "password" && (
        <img
          onClick={() => setShow(!show)}
          src={show ? "/Eye.svg" : "/close_eye.svg"}
          alt="eye icon"
          className="absolute w-6 h-4 object-cover right-2 top-1/2 -translate-y-1/2 cursor-pointer"
        />
      )}
    </div>
  );
};

export default Input;
