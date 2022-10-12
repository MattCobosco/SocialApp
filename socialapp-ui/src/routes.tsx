import React, { useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { Feed } from "./pages/Feed";
import { Profile } from "./pages/Profile";

export enum SocialAppRoutes {
  Feed = "/",
  Profile = "/Profile"
}

interface IRouteEntry {
  component: JSX.Element;
  path: string;
  exact: boolean;
  key: string;
};

const routeBuilder = (baseElement: JSX.Element) => {
  const component: JSX.Element = baseElement;

  const build = (path: string, exact: boolean) => {
    return <Route path={path} element={component} caseSensitive={exact} />
  }

  return { build }
};

const routes: IRouteEntry[] = [
  {
    component: <Feed />,
    path: SocialAppRoutes.Feed,
    exact: true,
    key: "feed",
  },
  {
    component: <Profile />,
    path: SocialAppRoutes.Profile,
    exact: true,
    key: "profile",
  },
];

export const Routing = () => {
  const createRoute = useCallback(({ component, path, exact, key }: IRouteEntry) => {
    const builder = routeBuilder(component);
    return (
      <React.Fragment key={key}>
        {builder.build(path, exact)}
      </React.Fragment>
    )
  }, []);

  return <Routes>
    {routes.map(createRoute)}
  </Routes>

};