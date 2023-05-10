import { Header } from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-[#23304c] h-screen flex flex-col justify-center items-center lg:flex-row lg:items-start lg:justify-start px-[10%] py-[6%]">
        <Image src="/Ellipse.png" alt="Ellipse" width={24} height={24} className="w-6 z-20 absolute left-24 top-56 animate-ping" />
        <Image src="/Ellipse.png" alt="Ellipse" width={24} height={24} className="w-6 z-20 absolute right-96 top-36 animate-ping" />
        <Image src="/Ellipse.png" alt="Ellipse" width={24} height={24} className="w-6 z-20 absolute left-64 bottom-24 animate-ping" />
        <Image src="/Ellipse.png" alt="Ellipse" width={24} height={24} className="w-6 z-20 absolute right-40 top-64 animate-ping" />

        <Image src="/wave3.png" alt="Wave" width={684} height={384} className="absolute bottom-20 right-36 w-96 hidden lg:block" />
        <Image src="/wave.png" alt="Wave" width={684} height={384} className="absolute z-20 bottom-0 right-0 w-2/3" />

        <div className="lg:flex-1">
          <Image src="/loading.png" alt="Loading" width={700} height={700} className="lg:w-9/12 w-52" />
        </div>

        <div className="lg:flex-1 lg:pt-7">
          <div className="lg:absolute">
            <h1 className="text-3xl leading-normal py-6">
              Build visual <br />
              tracking systems <br />
              for your <span className="underline decoration-teal-500">customers</span>
            </h1>

            <button className="bg-teal-600 px-7 rounded-full tracking-wide py-3 text-xs hover:scale-110 duration-300">GET STARTED</button>
          </div>
        </div>
      </main>
    </>
  )
}
