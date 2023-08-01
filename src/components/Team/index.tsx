import { MdEmail } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import GitHubProfilePicture from '../GithubPhoto';
import Link from 'next/link';

const teamData = [
    {
      "id": 1,
      "name": "Clovis Garcia",
      "role": "Programador",
      "image": "https://source.unsplash.com/100x100/?portrait?0",
      "emailLink": "#",
      "linkedinLink": "#",
      "githubLink": "theviolatorx"
    },
    {
      "id": 2,
      "name": "Lucas",
      "role": "Programador",
      "image": "https://source.unsplash.com/100x100/?portrait?0",
      "emailLink": "#",
      "linkedinLink": "#",
      "githubLink": "LucasCta"
    },
    {
      "id": 3,
      "name": "Maria Helena de Souza",
      "role": "Programador",
      "image": "https://source.unsplash.com/100x100/?portrait?0",
      "emailLink": "#",
      "linkedinLink": "#",
      "githubLink": "mhsouza88"
    },
    {
      "id": 1,
      "name": "Wender Enzo de Oliveira",
      "role": "Software Development Engineer",
      "image": "https://source.unsplash.com/100x100/?portrait?0",
      "emailLink": "wenderenzo2014@outlook.com",
      "linkedinLink": "https://www.linkedin.com/in/wender-enzo/",
      "githubLink": "wenderenzo123"
    },
    
  ]
  

export default function Team() {
    return (
        <section id='membros' className="py-6 text-gray-800 bg-gray-100">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                <p className="p-2 text-sm font-medium tracking text-center uppercase">Desenvolvedores</p>
                <h1 className="text-4xl font-bold leading text-center sm:text-5xl">As pessoas por trás das cenas</h1>
                <div className="grid md:grid-cols-2 xl:grid-cols-4 justify-center mt-12">
                    {teamData.map((member) => (
                        <div key={member.id} className="col-span-1 flex flex-col justify-center p-8 text-center rounded-md w-80">
                            <div className='self-center flex-shrink-0'>
                                <GitHubProfilePicture githubUsername={member.githubLink}/>
                            </div>
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold leading">{member.name}</p>
                                <p>{member.role}</p>
                            </div>
                            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                                <a rel="noopener noreferrer" href={member.emailLink} title="Email" className="text-gray-900 hover:text-violet-400">
                                    <MdEmail size={25} />
                                </a>
                                <Link rel="noopener noreferrer" href={member.linkedinLink} title="LinkedIn" className="text-gray-900 hover:text-violet-400">
                                    <FaLinkedinIn size={25} />
                                </Link>
                                <Link rel="noopener noreferrer" href={`https://github.com/${member.githubLink}`} title="GitHub" className="text-gray-900 hover:text-violet-400">
                                    <AiFillGithub size={25} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}