import React from 'react';

const Footer = () => {
  return (
    <div className=" w-full bg-gray-300 p-4 mb-4 footer_section">
      <div className="text-left">
        <span className='animate-charcter font-satoshi font-semibold'>Creator</span> <p className='my-1 font-satoshi text-sm text-gray-700'>Suresh Kumar Hela</p>
      </div>
      <div className="text-left">
        <span className='animate-rainbow font-satoshi font-semibold'>Version</span > <p className='my-1 font-satoshi text-sm text-gray-700'>1.0.1</p>
      </div>
    </div>
  );
};

export default Footer;
