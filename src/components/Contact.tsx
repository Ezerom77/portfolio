"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// TODO: mejorar la opcion del envio de correo electronico

type Props = {};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    console.log(formData);
    window.location.href = `mailto:ezeromdev@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name} ${formData.message} (${formData.email})})`;
  };
  return (
    <div
      className=" h-screen relative flex flex-col text-center md:text-left md:flex-row
     max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contacts
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need. {""}
          <span
            className="underline
          decoration-[#F7AB0A]/50"
          >
            let&apos;s talk
          </span>
        </h4>
        <div className=" space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className=" text-2xl">+54 9 11 6720 3939</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className=" text-2xl"> Bunos Aires, Argentina</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              type="text"
              className="contactInput"
              placeholder="Name"
            />
            <input
              {...register("email")}
              type="email  "
              className="contactInput"
              placeholder="Email"
            />
          </div>
          <input
            {...register("subject")}
            type="text"
            className="contactInput"
            placeholder="Subjet"
          />
          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Message"
          />
          <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
