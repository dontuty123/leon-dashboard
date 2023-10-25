import CardNewProducts from "@/components/Card/CardNewProducts";
import CardNewUsers from "@/components/Card/CardNewUsers";

export default function Home() {
  return (
    <div className="flex flex-wrap">
      <div className="w-full xl:w-8/12 mb-12 xl:mb-0 xl:pr-4">
        <CardNewUsers />
      </div>
      <div className="w-full xl:w-4/12 xl:pl-4">
        <CardNewProducts />
      </div>
    </div>
  );
}
