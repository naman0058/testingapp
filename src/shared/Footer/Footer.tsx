import Logo from "shared/Logo/Logo";
import SocialsList1 from "shared/SocialsList1/SocialsList1";
import { CustomLink } from "data/types";
import React from "react";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "5",
    title: "Country",
    menus: [
      { href: "#", label: "India" },
      { href: "#", label: "Dubai" },
    ],
  },
  {
    id: "1",
    title: "Property Type ",
    menus: [
      { href: "#", label: "Duplex House " },
      { href: "#", label: "Ferme House " },
      { href: "#", label: "Chalet House " },
      { href: "#", label: "Farm House" },
    ],
  },
  {
    id: "2",
    title: "Important Links  ",
    menus: [
      { href: "#", label: "About us " },
      { href: "#", label: "Privacy Policy " },
      { href: "#", label: "Terms and Conditions " },
      { href: "#", label: "Refund Policy " },
      { href: "#", label: "Releases" },
    ],
  },
  {
    id: "4",
    title: "Contact Information ",
    menus: [
      {
        href: "#",
        label: "OFFICE NO 1802, EXCHANGE TOWER, BUSINESS BAY DUBAI",
      },
      { href: "#", label: "LANDLINE NO. +971 44338948" },
      { href: "#", label: "info@earthinvestorsgroup.com" },
    ],
  },
];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="nc-Footer relative py-24 lg:py-28 border-t border-neutral-200 dark:border-neutral-700">
      <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
        <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
          <div className="col-span-2 md:col-span-1">
            <Logo />
          </div>
          <div className="col-span-2 flex items-center md:col-span-3">
            <SocialsList1 className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" />
          </div>
        </div>
        {widgetMenus.map(renderWidgetMenuItem)}
      </div>
    </div>
  );
};

export default Footer;
