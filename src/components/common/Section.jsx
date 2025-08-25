import React from 'react';

const Section = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`fade-in-up pt-16 md:pt-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        {title && (
          <>
            <h2 className="text-4xl font-bold text-center mb-4 text-blue-400">{title}</h2>
            <div className="section-divider"></div>
          </>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
