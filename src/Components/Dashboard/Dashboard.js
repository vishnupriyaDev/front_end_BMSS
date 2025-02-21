import React from 'react';

import NotificationBar from './NotificationBar';
import Navbar from './Navbar';
import BusRoutes from './BusRoute';
import RealtimeMap from './RealtimeMap';
import Reports from './Report';

const Dashboard = () => {
  return (<>
  <Navbar></Navbar>
    <div className="dashboard">
      <RealtimeMap></RealtimeMap> 
      <NotificationBar></NotificationBar>
      {/* {/* <Reports></Reports> */}
    </div></>
    
  );
};

export default Dashboard;
