import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Page } from "./types";
import ScrollToTop from "./ScrollToTop";
import Footer from "shared/Footer/Footer";
import PageHome from "containers/PageHome/PageHome";
import Page404 from "containers/Page404/Page404";
import Login from "Dashboard/login";
import City from "Dashboard/city";
import country from "Dashboard/country";

import CityForm from "Dashboard/cityform";
import Dashboard from "Dashboard/Mainpage";
import ListingStayPage from "containers/ListingStayPage/ListingStayPage";
import ListingStayMapPage from "containers/ListingStayPage/ListingStayMapPage";
import ListingExperiencesPage from "containers/ListingExperiencesPage/ListingExperiencesPage";
import ListingExperiencesMapPage from "containers/ListingExperiencesPage/ListingExperiencesMapPage";
import ListingStayDetailPage from "containers/ListingDetailPage/ListingStayDetailPage";
import ListingExperiencesDetailPage from "containers/ListingDetailPage/ListingExperiencesDetailPage";
import ListingCarPage from "containers/ListingCarPage/ListingCarPage";
import ListingCarMapPage from "containers/ListingCarPage/ListingCarMapPage";
import ListingCarDetailPage from "containers/ListingDetailPage/ListingCarDetailPage";
import CheckOutPage from "containers/CheckOutPage/CheckOutPage";
import PayPage from "containers/PayPage/PayPage";
import AuthorPage from "containers/AuthorPage/AuthorPage";
import AccountPage from "containers/AccountPage/AccountPage";
import AccountPass from "containers/AccountPage/AccountPass";
import AccountSavelists from "containers/AccountPage/AccountSavelists";
import AccountBilling from "containers/AccountPage/AccountBilling";
import PageContact from "containers/PageContact/PageContact";
import PageAbout from "containers/PageAbout/PageAbout";
import PageSignUp from "containers/PageSignUp/PageSignUp";
import PageLogin from "containers/PageLogin/PageLogin";
import PageSubcription from "containers/PageSubcription/PageSubcription";
import BlogPage from "containers/BlogPage/BlogPage";
import BlogSingle from "containers/BlogPage/BlogSingle";
import PageAddListing1 from "containers/PageAddListing1/PageAddListing1";
import PageAddListing2 from "containers/PageAddListing1/PageAddListing2";
import PageAddListing3 from "containers/PageAddListing1/PageAddListing3";
import PageAddListing4 from "containers/PageAddListing1/PageAddListing4";
import PageAddListing5 from "containers/PageAddListing1/PageAddListing5";
import PageAddListing6 from "containers/PageAddListing1/PageAddListing6";
import PageAddListing7 from "containers/PageAddListing1/PageAddListing7";
import PageAddListing8 from "containers/PageAddListing1/PageAddListing8";
import PageAddListing9 from "containers/PageAddListing1/PageAddListing9";
import PageAddListing10 from "containers/PageAddListing1/PageAddListing10";
import PageHome2 from "containers/PageHome/PageHome2";
import ListingRealEstateMapPage from "containers/ListingRealEstatePage/ListingRealEstateMapPage";
import ListingRealEstatePage from "containers/ListingRealEstatePage/ListingRealEstatePage";
import Emmar from "containers/ListingRealEstatePage/emmar";
import Damac from "containers/ListingRealEstatePage/damac";
import Danube from "containers/ListingRealEstatePage/danube";
import Binghatti from "containers/ListingRealEstatePage/binghatti";
import Mag from "containers/ListingRealEstatePage/mag";
import Aldar from "containers/ListingRealEstatePage/aldar";
import Appartments from "containers/ListingRealEstatePage/appartments";
import Penthouse from "containers/ListingRealEstatePage/penthouse";
import Townhouse from "containers/ListingRealEstatePage/townhouse";
import Villa from "containers/ListingRealEstatePage/villa";
import Comercials from "containers/ListingRealEstatePage/comercials";
import Hotels from "containers/ListingRealEstatePage/hotels";
import Shops from "containers/ListingRealEstatePage/shops";
import Plots from "containers/ListingRealEstatePage/ploats";
import Delhi from "containers/ListingRealEstatePage/delhi";
import Noida from "containers/ListingRealEstatePage/noida";
import Mumbai from "containers/ListingRealEstatePage/mumbai";
import Kolkata from "containers/ListingRealEstatePage/kolkata";
import Dubai from "containers/ListingRealEstatePage/dubai";
import Abu from "containers/ListingRealEstatePage/abudhabi";
import Sharjha from "containers/ListingRealEstatePage/sharjha";
import Fujarih from "containers/ListingRealEstatePage/fujarih";




import SiteHeader from "containers/SiteHeader";
import ListingFlightsPage from "containers/ListingFlightsPage/ListingFlightsPage";
import FooterNav from "components/FooterNav";
import useWindowSize from "hooks/useWindowResize";
import PageHome3 from "containers/PageHome/PageHome3";

export const pages: Page[] = [
  { path: "/", exact: true, component: PageHome2 },
  { path: "/#", exact: true, component: PageHome2 },
  { path: "/home-1-header-2", exact: true, component: PageHome },
  { path: "/home-2", component: PageHome2 },
  { path: "/home-3", component: PageHome3 },
  //
  { path: "/listing-stay", component: ListingStayPage },
  { path: "/listing-stay-map", component: ListingStayMapPage },
  { path: "/listing-stay-detail", component: ListingStayDetailPage },
  //
  {
    path: "/listing-experiences",
    component: ListingExperiencesPage,
  },
  {
    path: "/listing-experiences-map",
    component: ListingExperiencesMapPage,
  },
  {
    path: "/listing-experiences-detail",
    component: ListingExperiencesDetailPage,
  },

  //
  { path: "/listing-car", component: ListingCarPage },
  { path: "/listing-car-map", component: ListingCarMapPage },
  { path: "/listing-car-detail", component: ListingCarDetailPage },
  //
  { path: "/listing-real-estate-map", component: ListingRealEstateMapPage },
  { path: "/listing-real-estate", component: ListingRealEstatePage },
  //
  { path: "/listing-flights", component: ListingFlightsPage },
  //
  { path: "/checkout", component: CheckOutPage },
  { path: "/pay-done", component: PayPage },
  //
  { path: "/author", component: AuthorPage },
  { path: "/account", component: AccountPage },
  { path: "/account-password", component: AccountPass },
  { path: "/account-savelists", component: AccountSavelists },
  { path: "/account-billing", component: AccountBilling },
  //
  { path: "/blog", component: BlogPage },
  { path: "/blog-single", component: BlogSingle },
  //
  { path: "/add-listing-1", component: PageAddListing1 },
  { path: "/add-listing-2", component: PageAddListing2 },
  { path: "/add-listing-3", component: PageAddListing3 },
  { path: "/add-listing-4", component: PageAddListing4 },
  { path: "/add-listing-5", component: PageAddListing5 },
  { path: "/add-listing-6", component: PageAddListing6 },
  { path: "/add-listing-7", component: PageAddListing7 },
  { path: "/add-listing-8", component: PageAddListing8 },
  { path: "/add-listing-9", component: PageAddListing9 },
  { path: "/add-listing-10", component: PageAddListing10 },
  //
  { path: "/contact", component: PageContact },
  { path: "/about", component: PageAbout },
  { path: "/signup", component: PageSignUp },
  { path: "/login", component: PageLogin },
  { path: "/subscription", component: PageSubcription },

  { path: "/city", component: City },
  { path: "/country", component: country },
  { path: "/emmar", component: Emmar },

  { path: "/damac", component: Damac },
  { path: "/danube", component: Danube },
  { path: "/binghatti", component: Binghatti },
  { path: "/mag", component: Mag },
  { path: "/aldar", component: Aldar },
  { path: "/appartments", component: Appartments },
  { path: "/penthouse", component: Penthouse },
  { path: "/townhouse", component: Townhouse },
  { path: "/villa", component: Villa },
  { path: "/comercials", component: Comercials },
  { path: "/hotels", component: Hotels },
  { path: "/shops", component: Shops },
  { path: "/plots", component: Plots },


  { path: "/delhi", component: Delhi },
  { path: "/noida", component: Noida },
  { path: "/kolkata", component: Kolkata },
  { path: "/mumbai", component: Mumbai },
  { path: "/dubai", component: Dubai },
  { path: "/abudhabi", component: Abu },
  { path: "/sharjha", component: Sharjha },
  { path: "/fujarih", component: Fujarih },





  

  //
];

const MyRoutes = () => {
  const WIN_WIDTH = useWindowSize().width || window.innerWidth;
  const url = window.location.hash.split("#");

  return (
    <HashRouter>
      {url[1] != "/dashboard" ? (
        <>
          <ScrollToTop />
          <SiteHeader />
          <Routes>
            {pages.map(({ component, path }) => {
              const Component = component;
              return <Route key={path} element={<Component />} path={path} />;
            })}
            <Route element={<Page404 />} />
          </Routes>

          {WIN_WIDTH < 768 && <FooterNav />}
          <Footer />
        </>
      ) : (
        <>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<Login />} />
            <Route path="/city" element={<City />} />
            <Route path="/cityform" element={<CityForm />} />
          </Routes>
        </>
      )}
    </HashRouter>
  );
};

export default MyRoutes;
