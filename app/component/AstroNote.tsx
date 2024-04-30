'use client';

import React from 'react'

function AstroNote() {
    const handleAstroClick = () => {
        alert('Hello Invoicer!');
      };

      
  return (
    <div onClick={handleAstroClick}
        className="flex flex-auto justify-center text-4xl text-pretty cursor-pointer bg-slate-500 py-20">
            AstroVoice
    </div>
  )
}

export default AstroNote;