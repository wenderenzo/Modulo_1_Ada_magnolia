import { Indie_Flower } from "next/font/google";
const flower = Indie_Flower({
    subsets: ["latin"],
    weight: "400"
});
export default function Magnolia() {
    return (
        <div className={`flex flex-col justify-center items-center py-36 ${flower.className}`}>
            <div className="flex items-center gap-3">
            <hr className="my-8 w-10 md:w-40 h-[2px] bg-[#EEB960] border-0" />
            <p className={`text-4xl text-[#46362B]`}>Magnólia - A Delicadeza em Flor</p>
            <hr className="my-8 w-10 md:w-40 h-[2px] bg-[#EEB960] border-0" />
            </div>
            <p className="text-xl w-2/3 font-semibold pt-6">A magnólia, com suas pétalas exuberantes e aroma suave, encanta e inspira. Símbolo de nobreza e elegância, essa flor originária da Ásia traz uma beleza atemporal para jardins e arranjos florais. Sua presença cativa e enche o ambiente com serenidade e magia, tornando-a uma das flores mais amadas no mundo.</p>
        </div>
    )
}