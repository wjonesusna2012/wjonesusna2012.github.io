import React from 'react';
import './App.css';
import SwipeAssembly from './swiper/swipeAssembly';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import NavigationMenu from './navigation/navigationMenu';
import ScrollCard from './scrollCard/scrollCard';
import ItemsObject from './scrollCard/constants';
// import Ocean from './images/Ocean.jpg';
import { SwipeAssemblyTestData } from './textFiles/skills';
import { Outlet } from 'react-router-dom';
import WorkCardList from './workCards/WorkCardList';
import Dialer from './dialer/dialer';
import LandingPage from './isa/LandingPage';
// const testItems = [{ description: 'Default Ocean', image: Ocean }];

const Layout = () => {
  return (
    <div className="App" style={{ width: "100%", height: "100%", position: 'relative' }}>
      <NavigationMenu />
      <Outlet />
      <Dialer />
    </div>
  )
}
const Root = () => {
  const router = createBrowserRouter([
    {
      Component: Layout,
      children: [
        {
          path: "/",
          element:
            <LandingPage />
        },
        {
          path: "/about",
          children: [
            {
              path: '/about/hobbies',
              element: <ScrollCard items={ItemsObject['AboutHobbiesItems']}/>
            },
            {
              path: '/about/education',
              element: <ScrollCard items={ItemsObject['AboutEducationItems']}/>
            }
            
          ]
        },
        {
          path: "/work",
          children: [
            {
              path: '/work/fullstack',
              element: <WorkCardList />,
            }, 
            {
              path: '/work/navy',
              element: <ScrollCard items={ItemsObject['WorkNavyItems']}/>
            }
            
          ]
        },
        {
          path: "/skills",
          children: [
            {
              path: "/skills/skills",
              element: <SwipeAssembly swipeData={SwipeAssemblyTestData.swipeData} />
            },
            {
              path: "/skills/accredations",
              element: <SwipeAssembly swipeData={SwipeAssemblyTestData.swipeData} />
            }
          ]
        }
      ]
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
};

export default Root;