import React from 'react';

const SkipToContent = () => {
  return (
    <a 
      href="#main-content" 
      className="skip-link"
      onFocus={(e) => e.target.scrollIntoView()}
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;