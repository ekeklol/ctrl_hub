import tw, { css } from 'twin.macro';

export const NavContainer = tw.aside`w-56 bg-gray-100 z-10 h-screen shadow-lg hidden md:block`;
export const NavHeader = tw.h2`text-2xl font-bold text-gray-800 px-6 py-4 text-center items-center flex`;
export const NavList = tw.ul`space-y-2`;
export const NavListItem = tw.li`text-xl h-12 mb-px text-gray-800 hover:bg-gray-200 px-4 flex items-center`;

export const NavbarMobile = tw.div`top-0 h-14 bg-gray-100 md:hidden w-screen fixed z-10 items-center flex mb-14 opacity-95`;
export const NavButton = tw.button`bg-blue-500 hover:bg-blue-700 text-white py-2 px-2 rounded md:hidden m-2`;

export const NavMobileOverlay = tw.div`fixed top-0 left-0 w-screen h-screen bg-gray-100 z-20 flex flex-col items-center`;
export const NavMobileHeader = tw.h2`text-2xl font-bold text-gray-800 px-6 py-4 text-center flex items-center mt-40 mb-16`;
export const NavMobileOverlayCloseBtn = tw.button`absolute top-0 right-0 m-2 text-2xl text-white`;