import CardNewProducts from "@/components/Card/CardNewProducts";
import CardNewUsers from "@/components/Card/CardNewUsers";

export default function Home() {
  return (
    // <div className="py-20 bg-white relative z-10 rounded-lg mb-20">nothing</div>
    <div className="flex flex-wrap mt-4">
      <div className="w-full xl:w-8/12 mb-12 xl:mb-0 pr-4">
        <CardNewUsers />
      </div>
      <div className="w-full xl:w-4/12 pl-4">
        <CardNewProducts />
      </div>
    </div>
  );
}
