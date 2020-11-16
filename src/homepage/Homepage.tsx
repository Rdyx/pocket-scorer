import React from 'react';
import { Link } from 'react-router-dom';

type LinkRouteType = {
  path: string;
  text: string;
}


export default function Homepage() {
  const routes: LinkRouteType[] = [
    {path: '/yams', text: 'Yams'},
  ]

  return (
    <>
      {
        routes.map((route, index) => {
          return (
            <Link
              key={index}
              to={route.path}
              className="col btn btn-success"
              >
                {route.text}
            </Link>
          );
        })
      }
    </>
  )
}