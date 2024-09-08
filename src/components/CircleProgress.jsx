import React from 'react';
import '../css/components/CircularProgress.css';

const CircularProgress = () => {
  return (
    <div className="circular-progress">
      <div className="circle">
        <div className="mask full">
          <div className="fill"></div>
        </div>
        <div className="mask half">
          <div className="fill"></div>
          <div className="fill fix"></div>
        </div>
        <div className="shadow"></div>
      </div>
    </div>
  );
};

export default CircularProgress;
