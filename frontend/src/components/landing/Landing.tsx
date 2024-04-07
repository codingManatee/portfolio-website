import CircleProfile from "./CircleProfile";

const Landing = () => {
  const pictureURL = "/images/pattapon_coding"
  return (
    <div className="mx-32 mt-16">
      <div className="space-y-3 flex flex-col grow-0">
        <div className="py-4">
          <CircleProfile url="/images/profile.jpg"/>
        </div>
        <article className="">HEY THERE 👋 I'M</article>
        <article className="text-6xl font-extrabold">Pattapon</article>
        <article className="text-6xl font-extrabold">Vichanukroh</article>
        <div className="badge badge-lg">A.K.A codingManatee</div>
      </div>
      
    </div>
  );
};

export default Landing;
