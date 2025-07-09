
import React, { useState, useEffect } from 'react';
import { Code, Terminal } from 'lucide-react';

interface PreloaderProps {
  onComplete?: () => void;
  duration?: number;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete, duration = 3000 }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('Initializing...');
  const [isVisible, setIsVisible] = useState(true);

  const loadingTexts = [
    'Initializing...',
    'Loading dependencies...',
    'Compiling code...',
    'Deploying to cloud...',
    'Ready!'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / (duration / 50));
        
        const textIndex = Math.floor((newProgress / 100) * (loadingTexts.length - 1));
        setCurrentText(loadingTexts[Math.min(textIndex, loadingTexts.length - 1)]);
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            onComplete?.();
          }, 300);
          return 100;
        }
        
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [duration, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="text-center space-y-8 max-w-md">
        {/* Main Logo/Icon */}
        <div className="relative">
          <div className="flex items-center justify-center space-x-3">
            <div className="relative">
              <Code 
                className="w-8 h-8 text-primary animate-pulse" 
                style={{ animationDuration: '2s' }}
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            </div>
            <div className="text-2xl font-mono text-foreground font-medium tracking-wider">
              {`{ dev }`}
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-6">
          <div className="text-muted-foreground font-mono text-sm tracking-wide">
            {currentText}
          </div>
          
          {/* Progress Bar */}
          <div className="space-y-3">
            <div className="w-80 max-w-full mx-auto bg-muted rounded-full h-1.5 overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-300 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
              </div>
            </div>
            
            <div className="flex justify-between items-center text-xs font-mono text-muted-foreground">
              <Terminal className="w-3 h-3" />
              <span>{Math.round(progress)}%</span>
            </div>
          </div>
        </div>

        {/* Minimal Loading Dots */}
        <div className="flex justify-center space-x-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"
              style={{ 
                animationDelay: `${i * 0.15}s`,
                animationDuration: '1.2s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
