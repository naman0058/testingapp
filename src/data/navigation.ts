import React, { useState, useEffect } from 'react';
import { MegamenuItem, NavItemType } from "shared/Navigation/NavigationItem";
import ncNanoId from "utils/ncNanoId";
import __megamenu from "./jsons/__megamenu.json";
import __developermenu from "./jsons/__developers.json";
import { PropertyAPI } from './jsons/propertydata'

import axios from 'axios';  

const a = PropertyAPI().then(data=> console.log(data))



const megaMenuDemo: MegamenuItem[] = [
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/3476860/pexels-photo-3476860.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "India",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: i.unique_id_,
      name: i.Country,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/5587294/pexels-photo-5587294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "UAE",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: i.unique_city_,
      name: i.City,
    })),
  },

  // {
  //   id: ncNanoId(),
  //   image:
  //     "https://images.pexels.com/photos/5159141/pexels-photo-5159141.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //   title: "Contruction",
  //   items: __megamenu.map((i) => ({
  //     id: ncNanoId(),
  //     href: "/unique_id_",
  //     name: i.Contruction,
  //   })),
  // },
  // {
  //   id: ncNanoId(),
  //   image:
  //     "https://images.pexels.com/photos/7473041/pexels-photo-7473041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //   title: "Country",
  //   items: __megamenu.map((i) => ({
  //     id: ncNanoId(),
  //     href: "/unique_id_",
  //     name: i.Country,
  //   })),
  // },
];


const PropertyTypeData :  MegamenuItem[] = [



  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/3476860/pexels-photo-3476860.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "India",
    items: __developermenu.map((i) => ({
      id: ncNanoId(),
      href: i.unique_id_,
      name: i.Country,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/5587294/pexels-photo-5587294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "UAE",
    items: __developermenu.map((i) => ({
      id: ncNanoId(),
      href: i.unique_city_,
      name: i.City,
    })),
  },

  
];


const DeveloperDemo: MegamenuItem[] = [
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/3476860/pexels-photo-3476860.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "India",
    items: __developermenu.map((i) => ({
      id: ncNanoId(),
      href: i.unique_id_,
      name: i.Country,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/5587294/pexels-photo-5587294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "UAE",
    items: __developermenu.map((i) => ({
      id: ncNanoId(),
      href: i.unique_city_,
      name: i.City,
    })),
  },

  
];

const demoChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Online Booking",
  },
  {
    id: ncNanoId(),
    href: "/home-2",
    name: "Real Estate",
    isNew: true,
  },
  {
    id: ncNanoId(),
    href: "/home-3",
    name: "Home - 3",
    isNew: true,
  },
];

const otherPageChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/blog",
    name: "Blog Page",
  },
  {
    id: ncNanoId(),
    href: "/blog-single",
    name: "Blog Single",
  },
  {
    id: ncNanoId(),
    href: "/about",
    name: "About",
  },
  {
    id: ncNanoId(),
    href: "/contact",
    name: "Contact us",
  },
  {
    id: ncNanoId(),
    href: "/login",
    name: "Login",
  },
  {
    id: ncNanoId(),
    href: "/signup",
    name: "Signup",
  },
  {
    id: ncNanoId(),
    href: "/subscription",
    name: "Subscription",
  },
];

const templatesChildrenMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/add-listing-1",
    name: "Add Listings",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/add-listing-1",
        name: "Add Listings 1",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-2",
        name: "Add Listings 2",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-3",
        name: "Add Listings 3",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-4",
        name: "Add Listings 4",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-5",
        name: "Add Listings 5",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-6",
        name: "Add Listings 6",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-7",
        name: "Add Listings 7",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-8",
        name: "Add Listings 8",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-9",
        name: "Add Listings 9",
      },
      {
        id: ncNanoId(),
        href: "/add-listing-10",
        name: "Add Listings 10",
      },
    ],
  },
  //
  { id: ncNanoId(), href: "/checkout", name: "Checkout" },
  { id: ncNanoId(), href: "/pay-done", name: "Pay done" },
  //
  { id: ncNanoId(), href: "/author", name: "Author Page" },
  { id: ncNanoId(), href: "/account", name: "Account Page" },
];

export const NAVIGATION_DEMO: NavItemType[] = [


  
  {
    // id: ncNanoId(),
    // href: "/",
    // name: "Home",
    // type: "dropdown",
    // children: demoChildMenus,
    // isNew: true,

    id: ncNanoId(),
    href: "/",
    name: "Home",
    isNew: true,
  },
  {

    id: ncNanoId(),
    href: "/listing-real-estate",
    name: "Country",
    type: "megaMenu",
    megaMenu: megaMenuDemo,
  },

  {
 
    id: ncNanoId(),
    href: "#",
    name: "Developers",
    type: "megaMenu",
    megaMenu: DeveloperDemo,
  },
  
  // {
  //   id: ncNanoId(),
  //   href: "/listing-stay",
  //   name: "Developers",
  //   type: "dropdown",
  //   isNew: true,
  //   children: [
  //     {
  //       id: ncNanoId(),
  //       href: "/emmar",
  //       name: "Emmar",
     
  //     },

  
  //     {
  //       id: ncNanoId(),
  //       href: "/damac",
  //       name: "Damac",
     
  //     },

  //     {
  //       id: ncNanoId(),
  //       href: "/danube",
  //       name: "Danube",
     
  //     },

  //     {
  //       id: ncNanoId(),
  //       href: "/binghatti",
  //       name: "Binghatti",
     
  //     },

  //     {
  //       id: ncNanoId(),
  //       href: "/mag",
  //       name: "MAG",
     
  //     },

  //     {
  //       id: ncNanoId(),
  //       href: "/aldar",
  //       name: "Aldar",
     
  //     },
  //     //
  //     // {
  //     //   id: ncNanoId(),
  //     //   href: "/listing-flights",
  //     //   name: "Flights listing",
  //     //   isNew: true,
  //     // },
  //   ],
  // },

  {
    id: ncNanoId(),
    // href: "/listing-stay",
    href: "#",
    name: "Projects",
    type: "dropdown",
    isNew: true,
    children: [
      {
        id: ncNanoId(),
        href: "/appartments",
        name: "Apartments",
     
      },

  
      //
      {
        id: ncNanoId(),
        href: "/penthouse",
        name: "Penthouses",
      
      },

     

      {
        id: ncNanoId(),
        href: "/villa",
        name: "Villas / Town-houses",
      
      },

      {
        id: ncNanoId(),
        href: "/comercials",
        name: "Comercials",
      
      },

   

      {
        id: ncNanoId(),
        href: "/plots",
        name: "Plots",
      
      },
    
    ],
  },

  {
    id: ncNanoId(),
    href: "/about",
    name: "About Us",
    // type: "dropdown",
    // children: templatesChildrenMenus,
  },

  {
    id: ncNanoId(),
    href: "/contact",
    name: "Contact Us ",
    // type: "dropdown",
    // children: otherPageChildMenus,
  },
];
