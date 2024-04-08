import CircleProfile from "./CircleProfile";

const Landing = () => {
  const pictureURL = "/images/pattapon_coding";
  return (
    <div className="mx-32 mt-16 grid grids-col-1 sm:grid-cols-2">
      <div className="space-y-3 flex flex-col">
        <div className="py-4 mx-20">
          <CircleProfile url="/images/profile.jpg" />
        </div>
        <article className="">HEY THERE 👋 IT'S</article>
        <article className="text-6xl font-extrabold">ANTSFROMTHAI</article>
        <article className="badge badge-lg">A.K.A codingManatee</article>
        <article className="">Welcome to our shop</article>
      </div>
      <textarea
        className="textarea textarea-bordered"
        placeholder="Bio"
      ></textarea>
    </div>
  );
};

export default Landing;
