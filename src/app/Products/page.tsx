import { Indie_Flower } from "next/font/google";
import { Roboto } from "next/font/google";
import Image from "next/image";
const flower = Indie_Flower({
  subsets: ["latin"],
  weight: "400",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: "300",
});
export default function Products() {
  return (
    <div
      className={`flex flex-col justify-center items-center py-16 ${flower.className}`}
    >
      <div className="flex items-center gap-3">
        <hr className="my-8 w-64 h-[4px] bg-[#EEB960] border-0" />
        <div className="grid items-center mx-20">
          <p className={`text-center text-4xl text-[#46362B]`}>Arranjos de Flores</p>
          <p className={`text-center text-4xl text-[#46362B]`}>Elegância Natural</p>
        </div>
        <hr className="my-8 w-64 h-[4px] bg-[#EEB960] border-0" />
      </div>
      <p className="text-center text-2xl w-2/3 font-semibold py-7 mb-10">
        Nossos arranjos de flores são verdadeiras obras de arte da natureza. Com
        cuidado artesanal, selecionamos flores frescas e harmonizamos cores e
        formas para criar composições únicas. Seja para casamentos, aniversários
        ou presentear alguém especial, nossos arranjos trazem a delicadeza e
        elegância natural para cada ocasião.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 w-3/4 justify-between">
        <div className="flex text-center items-center justify-center flex-col">
          <Image src="/Rectangle 5.png" width={400} height={400} alt="01" />
          <div className={`pt-4 text-[#332B25] ${roboto.className}`}>
            <p className={`text-xl`}>“THE HONEY B”</p>
            <p className={`text-xl`}>MINI ARRANJO</p>
          </div>
          <div
            className={`py-4 text-lg text-[#332B25] opacity-80 ${roboto.className}`}
          >
            R$8.00
          </div>
        </div>
        <div className="flex text-center items-center justify-center flex-col">
          <Image src="/Rectangle 6.png" width={400} height={400} alt="01" />
          <div className={`pt-4 text-[#332B25] ${roboto.className}`}>
            <p className={`text-xl`}>“THE EMBER”</p>
            <p className={`text-xl`}>PEQUENO ARRANJO</p>
          </div>
          <div
            className={`py-4 text-lg text-[#332B25] opacity-80 ${roboto.className}`}
          >
            R$20.00
          </div>
        </div>
        <div className="flex text-center items-center justify-center flex-col">
          <Image src="/Rectangle 7.png" width={400} height={400} alt="01" />
          <div className={`pt-4 text-[#332B25] ${roboto.className}`}>
            <p className={`text-xl`}>“THE OLLIE”</p>
            <p className={`text-xl`}>ARRANJO MÉDIO</p>
          </div>
          <div
            className={`py-4 text-lg text-[#332B25] opacity-80 ${roboto.className}`}
          >
            R$30.00
          </div>
        </div>
        <div className="flex text-center items-center justify-center flex-col">
          <Image src="/Rectangle 4.png" width={400} height={400} alt="01" />
          <div className={`pt-4 text-[#332B25] ${roboto.className}`}>
            <p className={`text-xl`}>“THE HENNA”</p>
            <p className={`text-xl`}>ARRANJO GRANDE</p>
          </div>
          <div
            className={`py-4 text-lg text-[#332B25] opacity-80 ${roboto.className}`}
          >
            R$50.00
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-3">
        <hr className="my-8 w-64 h-[4px] bg-[#EEB960] border-0" />
        <p className={`mx-20 text-center text-5xl text-[#46362B]`}>Gift Boxes</p>
        <hr className="my-8 w-64 h-[4px] bg-[#EEB960] border-0" />
      </div>
      <p className="text-center text-2xl w-2/3 font-semibold py-7 mb-10">
      Nossas caixas de presentes estão disponíveis durante as estações de outono/inverno. Todas as caixas de presente são cuidadosamente selecionadas, contendo produtos de nossos parceiros locais/pequenos negócios
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 w-3/4 justify-between">
        <div className="flex text-center items-center justify-center flex-col">
          <Image src="/Rectangle 2.png" width={400} height={400} alt="01" />
          <div className={`pt-4 text-[#332B25] ${roboto.className}`}>
            <p className={`text-xl`}>“SWEETER THAN HONEY”</p>
            <p className={`text-xl`}>FALL GIFT BOX</p>
          </div>
          <div
            className={`py-4 text-lg text-[#332B25] opacity-80 ${roboto.className}`}
          >
            R$60.00
          </div>
        </div>
        <div className="flex text-center items-center justify-center flex-col">
          <Image src="/Rectangle 3.png" width={400} height={400} alt="01" />
          <div className={`pt-4 text-[#332B25] ${roboto.className}`}>
            <p className={`text-xl`}>“STARRY EYED”</p>
            <p className={`text-xl`}>WINTER GIFT BOX</p>
          </div>
          <div
            className={`py-4 text-lg text-[#332B25] opacity-80 ${roboto.className}`}
          >
            R$45.00
          </div>
        </div>
      </div>
    </div>
  );
}

