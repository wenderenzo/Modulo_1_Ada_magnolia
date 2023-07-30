import { Indie_Flower } from "next/font/google";
import Image from "next/image";
// const montserrat = Montserrat({ subsets: ["latin"] });
const flower = Indie_Flower({
    subsets: ["latin"],
    weight: "400"
});

export default function Banner() {
    return (
        <section className="flex justify-center items-center relative">
            <Image src="/flower.png" alt="Flower" className="h-screen" width={1920} height={1080} />
            <div className="flex flex-col items-center bg-[#46362B] absolute w-3/4 py-6 opacity-90">
                <h1 className={`text-8xl font-bold text-[#EEB960] py-3 ${flower.className}`}>Magnolia</h1>
                <p className="text-3xl text-white">Florist - A Fresh Approach to Bouquet Creation!</p>
            </div>
        </section>
    )
}