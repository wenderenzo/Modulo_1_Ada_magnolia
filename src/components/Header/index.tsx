import { AiOutlineHome } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { BsFlower1 } from 'react-icons/bs';
import { BsFolder } from 'react-icons/bs';

const menu = {
    "title": "Magnolia",
    "menuItems": [
      {
        "id": "inicio",
        "icon": "AiOutlineHome",
        "label": "Inicio"
      },
      {
        "id": "sobre",
        "icon": "BsFolder",
        "label": "Sobre nós"
      },
      {
        "id": "produtos",
        "icon": "BsFlower1",
        "label": "Produtos"
      },
      {
        "id": "membros",
        "icon": "BsPerson",
        "label": "Membros"
      }
    ]
  }
  

export function Header() {
    return (
        <div className='flex justify-between items-center p-4 bg-[#46362B] text-white'>
          <div className='items-center hidden md:flex'>
            {menu.title && <h1 className='text-2xl font-bold ml-2'>{menu.title}</h1>}
          </div>
          <ul className='flex list-none gap-4'>
            {menu.menuItems.map((menuItem) => (
              <li key={menuItem.id}>
                <a href={`#${menuItem.id}`} className='flex items-center gap-x-2 text-xl hover:text-[#EEB960]'>
                  {menuItem.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    }