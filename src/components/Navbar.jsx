import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

// project imports
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

// панель навигации
export const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  // измерение ширины экрана для правильной отрисовки сайдбара
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // скрытие сайдбара на маленьких экранах
  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton
        title='Menu'
        onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className='flex'></div>
      <NavButton
        title='Cart'
        onClick={() => {
          handleClick('cart');
        }}
        color={currentColor}
        icon={<FiShoppingCart />}
      />
      <NavButton
        title='Chat'
        dotColor='#03c9d7'
        onClick={() => {
          handleClick('chat');
        }}
        color={currentColor}
        icon={<BsChatLeft />}
      />
      <NavButton
        title='Notification'
        dotColor='#03c9d7'
        onClick={() => {
          handleClick('notification');
        }}
        color={currentColor}
        icon={<RiNotification3Line />}
      />
      <TooltipComponent content='Profile' position='BottomCenter'>
        <div
          className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
          onClick={() => handleClick('userProfile')}
        >
          <img className='rounded-full w-8 h-8' src={avatar}></img>
          <p>
            <span className='text-gray-400 text-14'>Hi, </span>{' '}
            <span className='text-gray-400 text-14 font-bold ml-1'>Michael</span>
          </p>
          <MdKeyboardArrowDown className='text-gray-400 text-14' />
        </div>
      </TooltipComponent>
      {isClicked.cart && <Cart />}
      {isClicked.chat && <Chat />}
      {isClicked.notification && <Notification />}
      {isClicked.userProfile && <UserProfile />}
    </div>
  );
};

// кнопка навигации
const NavButton = ({ title, onClick, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position='BottomCenter'>
      <button
        type='button'
        onClick={onClick}
        style={{ color }}
        className='relative text-xl rounded-full p-3 hover:bg-light-gray'
      >
        <span
          style={{ background: dotColor }}
          className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
        ></span>
        {icon}
      </button>
    </TooltipComponent>
  );
};
