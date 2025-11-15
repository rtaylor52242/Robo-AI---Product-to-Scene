/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

interface HeaderProps {
    onHelpClick?: () => void;
}

const HelpIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const Header: React.FC<HeaderProps> = ({ onHelpClick }) => {
  return (
    <header className="w-full p-4 text-center">
      <div className="flex items-center justify-center relative max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-800">
            Robo AI - Product to Scene
          </h1>
          {onHelpClick && (
            <button
              onClick={onHelpClick}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-zinc-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
              aria-label="Help"
            >
              <HelpIcon />
            </button>
          )}
      </div>
      <p className="mt-4 text-lg text-zinc-600 max-w-3xl mx-auto">
        Simply upload photos of product and scene, then drag your product onto a perfect spot.
        <br />
        Gemini will create a photorealistic composite.
      </p>
    </header>
  );
};

export default Header;