import React from 'react';
import '../styles/HelloWorld.css';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-hello-blue to-blue-600">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-fade-in">
          Hello World <span className="waving-hand">👋</span>
        </h1>
        <p className="text-xl md:text-2xl text-blue-100">
          Welcome to your simple and elegant page!
        </p>
      </div>
    </div>
  );
};

export default Index;