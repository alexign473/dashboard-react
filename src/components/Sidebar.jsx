import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

// project imports
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

// меню слева
export const Sidebar = () => {
  // контекст для состояний меню
  const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();

  // на маленьких экранах меню закрывается при нажатии на ссылку
  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  return (
    <div className='ml-3 h-screen md:overflow-hidden md:hover:overflow-auto overflow-auto pb-10'>
      {activeMenu && (
        <>
          {/* Логотип */}
          <div className='flex justify-between items-center'>
            <Link
              to='/'
              onClick={handleCloseSideBar}
              className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'
            >
              <SiShopware /> <span>Shoppy</span>
            </Link>
            {/* Кнопка закрыть меню */}
            <TooltipComponent content='Menu' position='BottomCenter'>
              <button
                type='button'
                onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
                className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          {/* Ссылки меню */}
          <div className='mt-10'>
            {/* рендер заголовков  */}
            {links.map((item) => (
              <div key={item.title}>
                <p className='text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase'>{item.title}</p>
                {/* рендер ссылок внутри заголовков */}
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    // destructuring isActive prop from NavLink component
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {link.icon}
                    <span className='capitalize'>{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
