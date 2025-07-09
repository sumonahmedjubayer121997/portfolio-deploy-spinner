
import React, { useState } from 'react';
import Preloader from './Preloader';
import { Button } from '@/components/ui/button';
import { Play, Code, Gauge, Sparkles } from 'lucide-react';

const PreloaderDemo = () => {
  const [showPreloader, setShowPreloader] = useState(false);

  const handleStartDemo = () => {
    setShowPreloader(true);
  };

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      {showPreloader && (
        <Preloader 
          onComplete={handlePreloaderComplete}
          duration={3000}
        />
      )}
      
      <div className="text-center space-y-12 max-w-4xl">
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">
            <Code className="w-4 h-4" />
            <span>Portfolio Preloader</span>
          </div>
          
          <h1 className="text-5xl font-bold text-foreground tracking-tight">
            Minimalist Tech Preloader
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A clean, professional loading animation designed for developers and tech professionals. 
            Features subtle animations and a modern aesthetic.
          </p>
        </div>

        <div className="space-y-6">
          <Button 
            onClick={handleStartDemo}
            className="px-8 py-3 text-base h-auto rounded-lg"
            disabled={showPreloader}
          >
            <Play className="w-4 h-4 mr-2" />
            {showPreloader ? 'Loading...' : 'Preview Demo'}
          </Button>
          
          <div className="text-sm text-muted-foreground space-y-1">
            <p>Duration: 3 seconds</p>
            <p>Optimized for professional portfolios</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="space-y-4 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Clean Design</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Minimalist approach with subtle animations and professional typography
            </p>
          </div>
          
          <div className="space-y-4 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <Gauge className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Smooth Progress</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Terminal-inspired progress bar with real-time percentage display
            </p>
          </div>
          
          <div className="space-y-4 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Developer Focused</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Code-themed elements with monospace fonts and tech terminology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreloaderDemo;
