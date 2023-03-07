import React, { useEffect, useState } from "react";
import LocationInput from "./LocationInput";
import { FC } from "react";
import PropertyTypeSelect from "./PropertyTypeSelect";
import PriceRangeInput from "./PriceRangeInput";
import { PropertyType } from "components/HeroSearchForm2Mobile/PropertyTypeSelect";

export interface RealEstateSearchFormProps {
  haveDefaultValue?: boolean;
}

// DEFAULT DATA FOR ARCHIVE PAGE
const defaultLocationValue = "Tokyo, Jappan";
const defaultPropertyType: PropertyType[] = [
  {
    name: "Apartments",
    description: "",
    checked: true,
  },
  {
    name: "Penthouses",
    description: "",
    checked: false,
  },
  {
    name: "Town-houses",
    description:
      "",
    checked: false,
  },
  {
    name: "Villas",
    description: "",
    checked: false,
  },



  {
    name: "Comercials",
    description: "",
    checked: false,
  },


  {
    name: "Hotels",
    description: "",
    checked: false,
  },


  {
    name: "Shops",
    description: "",
    checked: false,
  },


  {
    name: "Plots",
    description: "",
    checked: false,
  },


];

const RealEstateSearchForm: FC<RealEstateSearchFormProps> = ({
  haveDefaultValue = false,
}) => {
  const [locationInputValue, setLocationInputValue] = useState("");
  const [typeOfProperty, setTypeOfProperty] =
    useState<PropertyType[]>(defaultPropertyType);
  //
  useEffect(() => {
    if (haveDefaultValue) {
      setLocationInputValue(defaultLocationValue);
    }
  }, []);
  //

  const renderForm = () => {
    return (
      <form className="w-full relative xl:mt-8 flex flex-col lg:flex-row lg:items-center rounded-3xl lg:rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-700 lg:divide-y-0">
        <LocationInput
          defaultValue={locationInputValue}
          onChange={(e) => setLocationInputValue(e)}
          className="flex-[1.5]"
        />

        <PropertyTypeSelect
          defaultValue={typeOfProperty}
          onChange={setTypeOfProperty}
        />
        <PriceRangeInput />
      </form>
    );
  };

  return renderForm();
};

export default RealEstateSearchForm;
