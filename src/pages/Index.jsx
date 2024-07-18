import React from 'react';
import { Button } from "@/components/ui/button";

const WelcomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Welcome to Our Website</h1>
      <p className="text-lg text-center mb-8">
        We're excited to have you here. Explore our services and discover what we can do for you.
      </p>
      <div className="flex justify-center space-x-4">
        <Button variant="default">Get Started</Button>
        <Button variant="outline">Learn More</Button>
      </div>
    </div>
  );
};

export default WelcomePage;