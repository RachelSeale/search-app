import React from 'react';
import PageTitle from './components/page-title/Index';
import Venues from './components/venues/Index';

const Main = () => (
  <div>
    <PageTitle titleText="Place Finder!" />
    <Venues />
  </div>
);

export default Main;
