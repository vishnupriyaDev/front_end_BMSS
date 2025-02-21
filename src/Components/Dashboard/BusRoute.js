import React from 'react';

const BusRoutes = () => {
  const routes = [
    { routeId: 1, routeName: 'Route A' },
    { routeId: 2, routeName: 'Route B' },
    { routeId: 3, routeName: 'Route C' },
    { routeId: 4, routeName: 'Route D' },
  ];

  return (
    <div id="routes" className="bus-routes">
      <h3>All Bus Routes</h3>
      <ul>
        {routes.map(route => (
          <li key={route.routeId}>
            <span>{route.routeName}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusRoutes;
