/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-2xl p-6 md:p-8 relative transform transition-all flex flex-col"
        style={{ maxHeight: '90vh' }}
        onClick={handleModalContentClick}
        role="document"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-800 transition-colors z-10"
          aria-label="Close modal"
        >
          <CloseIcon />
        </button>
        <div className="text-center mb-6 flex-shrink-0">
          <h2 className="text-3xl font-extrabold text-zinc-800">How to Use</h2>
          <p className="text-zinc-600 mt-2">Create a photorealistic composite in 3 easy steps.</p>
        </div>
        
        <div className="space-y-6 overflow-y-auto pr-4 -mr-4">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">1</div>
            <div>
              <h3 className="text-xl font-bold text-zinc-800">Upload Your Product</h3>
              <p className="text-zinc-600 mt-1">Click the "Upload Product" box and select an image of the item you want to place. For best results, use an image with a clean background.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">2</div>
            <div>
              <h3 className="text-xl font-bold text-zinc-800">Upload Your Scene</h3>
              <p className="text-zinc-600 mt-1">Click the "Upload Scene" box and select a photo of the room or environment where you want to place the product.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">3</div>
            <div>
              <h3 className="text-xl font-bold text-zinc-800">Drag & Drop</h3>
              <p className="text-zinc-600 mt-1">Drag your product from the left and drop it onto the desired location in the scene on the right. Alternatively, you can just click on the scene where you'd like to place it.</p>
              <p className="text-zinc-600 mt-2">Our AI will then generate a new image with your product seamlessly integrated into the scene!</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center flex-shrink-0">
            <button
                onClick={onClose}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg text-md transition-colors"
            >
                Got It!
            </button>
        </div>

      </div>
    </div>
  );
};

export default HelpModal;
