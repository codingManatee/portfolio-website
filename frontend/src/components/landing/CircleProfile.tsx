const CircleProfile = ({ url }: { url: string }) => {
  return (
    <div className="avatar">
      <div className="w-64 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
        <img src={url} />
      </div>
    </div>
  );
};

export default CircleProfile;
