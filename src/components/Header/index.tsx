
const menu = {
    "title": "Magnolia",
    "menuItems": [
      {
        "id": "inicio",
        "href": "/",
        "icon": "AiOutlineHome",
        "label": "Inicio"
      },
      {
        "id": "sobre",
        "href": "#sobre",
        "icon": "BsFolder",
        "label": "Sobre nós"
      },
      {
        "id": "produtos",
        "href": "Products",
        "icon": "BsFlower1",
        "label": "Produtos"
      },
      {
        "id": "membros",
        "href": "#membros",
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
                <a href={`${menuItem.href}`} className='flex items-center gap-x-2 text-xl hover:text-[#EEB960]'>
                  {menuItem.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    }