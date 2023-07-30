import { MdEmail } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';

const teamData = [
    {
      "id": 1,
      "name": "Clovis",
      "role": "Programador",
      "image": "https://source.unsplash.com/100x100/?portrait?0",
      "emailLink": "#",
      "linkedinLink": "#",
      "githubLink": "#"
    },
    {
      "id": 2,
      "name": "Lucas",
      "role": "Programador",
      "image": "https://source.unsplash.com/100x100/?portrait?0",
      "emailLink": "#",
      "linkedinLink": "#",
      "githubLink": "#"
    },
    {
      "id": 3,
      "name": "Helena",
      "role": "Programador",
      "image": "https://source.unsplash.com/100x100/?portrait?0",
      "emailLink": "#",
      "linkedinLink": "#",
      "githubLink": "#"
    },
    {
      "id": 1,
      "name": "Wender Enzo de Oliveira",
      "role": "Software Engineer",
      "image": "https://source.unsplash.com/100x100/?portrait?0",
      "emailLink": "#",
      "linkedinLink": "#",
      "githubLink": "#"
    },
    
  ]
  

export default function Team() {
    return (
        <section className="py-6 text-gray-800 bg-gray-100">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                <p className="p-2 text-sm font-medium tracking text-center uppercase">Development team</p>
                <h1 className="text-4xl font-bold leading text-center sm:text-5xl">The talented people behind the scenes</h1>
                <div className="grid md:grid-cols-2 xl:grid-cols-4 justify-center mt-12">
                    {teamData.map((member) => (
                        <div key={member.id} className="col-span-1 flex flex-col justify-center p-8 text-center rounded-md w-80">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src={member.image} />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold leading">{member.name}</p>
                                <p>{member.role}</p>
                            </div>
                            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                                <a rel="noopener noreferrer" href={member.emailLink} title="Email" className="text-gray-900 hover:text-violet-400">
                                    <MdEmail size={25} />
                                </a>
                                <a rel="noopener noreferrer" href={member.linkedinLink} title="LinkedIn" className="text-gray-900 hover:text-violet-400">
                                    <FaLinkedinIn size={25} />
                                </a>
                                <a rel="noopener noreferrer" href={member.githubLink} title="GitHub" className="text-gray-900 hover:text-violet-400">
                                    <AiFillGithub size={25} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}