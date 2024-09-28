import React from 'react';

interface IndicatorProps {
  status: 'low' | 'high' | 'in-tune' | null;
}

const Indicator: React.FC<IndicatorProps> = ({ status }) => {
  return (
    <div className="indicator">
      <div className={`needle ${status}`}></div>
      <div className="scale">
        <div className="mark low"></div>
        <div className="mark center"></div>
        <div className="mark high"></div>
      </div>
    </div>
  );
};

export default Indicator;
