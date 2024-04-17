import Image from "next/image";

const GoogleBtn = () => {
  return (
    <button
      className="text-center form-input form-input-normal text-gray-500"
    //   onClick={}
    >
      <Image
        src={"/images/google-logo.svg"}
        alt="google"
        className="absolute"
        width={25}
        height={25}
      />
      Continue with Google
    </button>
  );
};

export default GoogleBtn;