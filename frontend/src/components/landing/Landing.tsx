import Image from "next/image";

const Landing = () => {
  const pictureURL = "/images/pattapon_coding.png"
  return (
    <div className="grid grid-cols-2 ">
      <div className="space-y-4">
        <article>HI THERE 👋 I'M</article>
        <article className="text-6xl font-extrabold">Pattapon</article>
        <article className="text-6xl font-extrabold">Vichanukroh</article>
        <article>A.K.A codingManatee</article>
      </div>
      <Image src={pictureURL} alt="picture of Pattapon coding" width={250} height={250}/>
    </div>
  );
};

export default Landing;
