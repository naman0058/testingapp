import React, { FC, useEffect, useMemo } from "react";
import Heading from "components/Heading/Heading";
import Glide from "@glidejs/glide";
import { TaxonomyType } from "data/types";
import CardCategory3 from "components/CardCategory3/CardCategory3";
import CardCategory4 from "components/CardCategory4/CardCategory4";
import NextPrev from "shared/NextPrev/NextPrev";
import CardCategory5 from "components/CardCategory5/CardCategory5";
import useNcId from "hooks/useNcId";
import { PropertyAPI , getAllDevelopers } from '../../data/jsons/propertydata'

import NcImage from "shared/NcImage/NcImage";
import { Link } from "react-router-dom";
import convertNumbThousand from "utils/convertNumbThousand";

export interface SectionSliderNewCategoriesProps {
  className?: string;
  itemClassName?: string;
  heading?: string;
  subHeading?: string;
  categories?: TaxonomyType[];
  categoryCardType?: "card3" | "card4" | "card5";
  itemPerRow?: 4 | 5;
  sliderStyle?: "style1" | "style2";
  uniqueClassName: string;
}

 
const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "#",
    name: "DAMAC",
    taxonomy: "category",
    count: 17288,
    thumbnail:
    "http://142.93.222.205/images/1677575194251.webp",
  },
  {
    id: "2",
    href: "#",
    name: "Sobha",
    taxonomy: "category",
    count: 2118,
    thumbnail:
      "http://142.93.222.205/images/1677575857932.webp",
  },
  {
    id: "3",
    href: "#",
    name: "Reportage Properties",
    taxonomy: "category",
    count: 36612,
    thumbnail:
      "http://142.93.222.205/images/1677575548904.webp",
  },
  {
    id: "4",
    href: "#",
    name: "Tiger Group",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "http://142.93.222.205/images/1677575760620.webp",
  },
  {
    id: "5",
    href: "#",
    name: "Danaube Properties",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "http://142.93.222.205/images/1677575661593.webp",
  },
 
];

const SectionSliderNewCategories: FC<SectionSliderNewCategoriesProps> = ({
  heading = "Heading of sections",
  subHeading = "Descriptions for sections",
  className = "",
  itemClassName = "",
  categories = DEMO_CATS,
  itemPerRow = 5,
  categoryCardType = "card3",
  sliderStyle = "style1",
  uniqueClassName,
}) => {
  const UNIQUE_CLASS =
    "SectionSliderNewCategories__" + uniqueClassName + useNcId();

  let MY_GLIDEJS = useMemo(() => {
    return new Glide(`.${UNIQUE_CLASS}`, {
      perView: itemPerRow,
      gap: 32,
      bound: true,
      breakpoints: {
        1280: {
          perView: itemPerRow - 1,
        },
        1024: {
          gap: 20,
          perView: itemPerRow - 1,
        },
        768: {
          gap: 20,
          perView: itemPerRow - 2,
        },
        640: {
          gap: 20,
          perView: itemPerRow - 3,
        },
        500: {
          gap: 20,
          perView: 1.3,
        },
      },
    });
  }, [UNIQUE_CLASS]);

  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState<any[]>([])
  
  const getAllUsers = () => {
    getAllDevelopers()
      .then(users => {
        if(users[0]){
          console.log('users',users)
          setData(users);
        }
        else{
 console.log('users',users)
        }
       
      });
  }
  
  
  React.useEffect(() => {
    if (data.length !== 0) {
      setIsLoading(false);
    }
    console.log('finaldata',data.length);
  }, [data]);
  
  


  useEffect(() => {
    getAllUsers()

    setTimeout(() => {
      MY_GLIDEJS.mount();
    }, 100);
  }, [MY_GLIDEJS, UNIQUE_CLASS]);

  const renderCard = (item: TaxonomyType, index: number) => {
    switch (categoryCardType) {
      case "card3":
        return <CardCategory3 taxonomy={item} />;
      case "card4":
        return <CardCategory4 taxonomy={item} />;
      case "card5":
        return <CardCategory5 taxonomy={item} />;
      default:
        return <CardCategory3 taxonomy={item} />;
    }
  };

  return (
  
    <div className={`nc-SectionSliderNewCategories ${className}`}>
      <div className={`${UNIQUE_CLASS} flow-root`}>
        <Heading
          desc={subHeading}
          hasNextPrev={sliderStyle === "style1"}
          isCenter={sliderStyle === "style2"}
        >
          {heading}
        </Heading>
        <div className="glide__track" data-glide-el="track">

        <ul className="glide__slides">

    {isLoading ? (
      <h1 style={{color:'red'}}>Loading...</h1>
    ) : (

            data.map((item, index) => (
               
              <li key={index} className={`glide__slide ${itemClassName}`}>
              <Link
         to={item.id}
         className={`nc-CardCategory5 flex flex-col ${className}`}
         data-nc-id="CardCategory5"
       >
         <div
           className={`flex-shrink-0 relative w-full aspect-w-4 aspect-h-3 h-0 rounded-2xl overflow-hidden group`}
         >
           <NcImage
             src={item.image}
             className="object-cover w-full h-full rounded-2xl"
           />
           <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
         </div>
         <div className="mt-4 px-3 truncate">
           <h2
             className={`text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-medium truncate`}
           >
             {item.name}
           </h2>
           <span
             className={`block mt-2 text-sm text-neutral-6000 dark:text-neutral-400`}
           >
             0 properties
           </span>
         </div>
       </Link>
             </li>
            ))

)}
</ul>

        </div>

        {sliderStyle === "style2" && (
          <NextPrev className="justify-center mt-16" />
        )}
      </div>
    </div>
  
  );
};

export default SectionSliderNewCategories;
