import React from 'react';
import OurCrafts from './OurCrafts';
import Pricing from './Pricing';

// This page renders both sections in order for robust GSAP pin chaining
const CraftsAndPricingPage = () => {
  return (
    <main>
      <OurCrafts />
      <Pricing />
    </main>
  );
};

export default CraftsAndPricingPage;
