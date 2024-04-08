import ItemCard from "@/components/Store/ItemCard";
import MenuSidebar from "@/components/Store/MenuSidebar";

const Home = () => {
  return (
    <div className="flex flex-row space-x-3 place-content-center">
      <MenuSidebar />
      <div className="grid grid-cols-3 gap-3">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
};

export default Home;
