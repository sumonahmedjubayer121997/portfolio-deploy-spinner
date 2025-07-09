
import React, { useState } from 'react';
import Preloader from './Preloader';
import { Button } from '@/components/ui/button';

const PreloaderDemo = () => {
  const [showPreloader, setShowPreloader] = useState(false);

  const handleStartDemo = () => {
    setShowPreloader(true);
  };

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      {showPreloader && (
        <Preloader 
          onComplete={handlePreloaderComplete}
          duration={4000}
        />
      )}
      
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-slate-800">
            Tech Portfolio Preloader
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            A minimalist animated preloader designed for DevOps engineers, software engineers, 
            and full stack developers. Features code brackets, terminal progress bar, 
            and cloud infrastructure animations.
          </p>
        </div>

        <div className="space-y-4">
          <Button 
            onClick={handleStartDemo}
            className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 text-lg"
            disabled={showPreloader}
          >
            {showPreloader ? 'Loading...' : 'Start Demo'}
          </Button>
          
          <div className="text-sm text-slate-500">
            <p>Click to see the preloader in action</p>
            <p>Duration: 4 seconds with multiple loading stages</p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-slate-800 mb-2">Code Animation</h3>
            <p className="text-slate-600 text-sm">
              Animated code brackets with bouncing effects and rotating deployment icons
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-slate-800 mb-2">Terminal Progress</h3>
            <p className="text-slate-600 text-sm">
              Terminal-style progress bar with gradient animation and realistic UI
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-slate-800 mb-2">Cloud Theme</h3>
            <p className="text-slate-600 text-sm">
              Particle effects, cloud icons, and professional dark theme design
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreloaderDemo;
