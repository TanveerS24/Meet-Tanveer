import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface flex flex-col justify-between">
      <Navbar />

      <main className="w-full pt-32 pb-space-xl px-margin-mobile md:px-margin max-w-lg mx-auto text-center flex-1 flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-primary-container/20 text-primary-container flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-[40px]">error</span>
        </div>

        <h1 className="font-headline font-extrabold text-5xl text-on-surface mb-2">404</h1>
        <h2 className="font-headline font-bold text-xl text-on-surface-variant mb-4">
          Oops! You've drifted off the coordinates.
        </h2>
        <p className="font-body text-sm text-on-surface-variant mb-8 leading-relaxed">
          The requested route doesn't exist on Tanveer's server. Return to the main workbench to explore shipped apps, 3D models, and verified credentials.
        </p>

        <button
          type="button"
          onClick={() => navigate('/')}
          className="px-6 py-3 rounded-full bg-primary-container text-white font-label font-bold text-sm hover:bg-primary shadow-coral-btn hover:-translate-y-0.5 active:translate-y-0.5 transition-all"
        >
          Return to Home Workbench
        </button>
      </main>

      <Footer />
    </div>
  );
};
