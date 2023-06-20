/** weather widget */

import React from 'react';

export default function WeatherWidget({ pic, now, morning, afternoon }) {
  return (
    <>
      <div className='weather-now'>
        <div>
          <img src='' alt={pic} />
          {now}
        </div>
        <div className='weather-forcast'>
          <span>Утром {morning}</span>
          <span>Днём {afternoon}</span>
        </div>
      </div>
    </>
  );
}
