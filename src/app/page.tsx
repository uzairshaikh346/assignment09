import Image from "next/image";

export default function Home() {
  return (
   <>
   <div className="bg-slate-200 rounded p-5">
    <div className="flex items-center">
      <Image className="rounded-lg m-2 shadow-lg shadow-black" src="/images/1.jpg" height={350} width={350} alt="img"></Image>
      <Image className="rounded-lg m-2 shadow-lg shadow-black" src="/images/2.jpg" height={350} width={350} alt="img"></Image>
      <Image className="rounded-lg m-2 shadow-lg shadow-black" src="/images/3.jpg" height={350} width={350} alt="img"></Image>
    </div>
    <div className="flex ">
    <Image className="rounded-lg my-6 mx-1" src="/images/4.jpg" height={1200} width={540} alt="img"></Image>
    <Image className="rounded-lg my-6 mx-1" src="/images/6.jpg" height={1200} width={540} alt="img"></Image>
     
    </div>
   </div>
   </>
  );
}
