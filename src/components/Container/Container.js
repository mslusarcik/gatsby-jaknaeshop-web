import React from 'react';

const Container = ({ children, fluid, className }) => {
  const containerClass = fluid ? 'container-fluid' : 'container';
  return <div className={`${containerClass} ${className ? className : ''}`}>{children}</div>;
};

export default Container;
