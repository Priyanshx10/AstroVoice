import Image from "next/image";
import Header from "./component/Header";

export default function Home() {
  return (
    <div className="bg-black text-white py-20">
      <h2 className="flex flex-auto justify-center text-4xl text-pretty cursor-pointer" >AstroVoice</h2>
      <Header />
    </div>
  );
}
