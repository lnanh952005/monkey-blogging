import { useController } from "react-hook-form";

const InputRHF = ({
  control,
  name,
  placeholder,
  label,
  autoFocus,
  type = "text",
  ...props
}) => {
  const { field, fieldState, formState } = useController({
    name,
    control,
  });

  if (name == "password") {
    return (
      <>
        <label
          className="font-semibold text-[20px] mb-3 text-[#292D32]"
          htmlFor={name}
        >
          {label}
        </label>
        <div className="relative">
          <input
            {...field}
            className="w-full border rounded-lg focus:border-[#00B4AA] transition-all outline-none px-8 py-6 cursor-pointer"
            id={name}
            type="text"
            placeholder={placeholder}
          />
          <img
            className="absolute w-6 h-4 object-cover right-2 top-1/2 -translate-y-1/2"
            src="/Eye.svg"
            alt=""
          />
        </div>
      </>
    );
  }

  return (
    <>
      <label
        htmlFor={name}
        className=" font-semibold text-[20px] mb-3 text-[#292D32]"
      >
        {label}
      </label>
      <input
        {...field}
        id={name}
        type={type}
        autoFocus={autoFocus || false}
        placeholder={placeholder}
        className="border rounded-lg focus:border-[#00B4AA] transition-all outline-none px-8 py-6 cursor-pointer"
      />
    </>
  );
};

export default InputRHF;
