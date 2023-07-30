import { BsRecycle } from 'react-icons/bs';
import { LiaHandshake } from 'react-icons/lia';
import { BsClipboardCheck } from 'react-icons/bs';

const appointments = [
    {
        icon: BsRecycle,
        title: 'Compromisso Ecológico',
        description: 'Embalagens recicláveis e práticas sustentáveis para um mundo melhor.'
    },
    {
        icon: LiaHandshake,
        title: 'Apoio Local',
        description: 'Valorizamos negócios locais, contribuindo para o crescimento da comunidade.'
    },
    {
        icon: BsClipboardCheck,
        title: 'Alta Qualidade Garantida',
        description: 'Produtos de excelência em nossa loja, garantindo satisfação total.'
    }
];

export default function Appointments() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 bg-[#46362B] px-12 py-32">
            {appointments.map((appointment) => (
                <div className="col-span-1 flex flex-col items-center justify-center p-8">
                    <appointment.icon className="text-[#EEB960]" size={100} />
                    <h1 className="text-4xl font-light text-white text-center py-2">{appointment.title}</h1>
                    <p className="text-xl font-light text-white text-center">{appointment.description}</p>
                </div>
            ))}
        </div>
    )
}