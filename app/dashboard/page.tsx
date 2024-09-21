"use client";

import React from 'react';
import Navbar from '../components/tableau/NavigationBar';
import Dashboard from '../components/tableau/Dashbord';

const DashboardPage = () => {
  return (
    <div className="flex">
      {/* Side Navigation Bar */}
      <Navbar />
      {/* Main component on basis of selected navigation from nav bar */}
      <main className="grow">
        <Dashboard />
      </main>
    </div>
  );
};

export default DashboardPage;