"use client"
import React, { useState, createContext } from 'react';
import Screen3 from '../components/Screen3';

export const DescriptionContext = createContext(null);

export default function Packagelist() {
  const [details, setDetails] = useState([
    {
      packageName: 'Enchanting Manali',
      days: '3N/2N',
      duration1: '3N',
      duration2: '2N',
      duration1Place: 'Manali',
      duration2Place: 'Shimla',
      hotel1: '3N - Woodrock Hotel, Manali',
      hotel1Rating: '4.5',
      hotel1View: 'Mountain View',
      hotel2: '2N - Ashiana Clarks Inn, Shimla',
      hotel2Rating: '3.5',
      hotel2View: 'Snow View',
    },
    {
      packageName: 'Manali',
      duration1: '2N',
      duration2: '3D',
      duration1Place: 'Shimla',
      duration2Place: 'Manali',
      hotel1: '3N - Woodrock Hotel, Manali',
      hotel1Rating: '3.0',
      hotel1View: 'Snow View',
      hotel2: '2N - Ashiana Clarks Inn, Shimla',
      hotel2Rating: '3.5',
      hotel2View: 'Mountain View',
    },
  ]);

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleClick = (packageName) => {
    setSelectedPackage(details.find((item) => item.packageName === packageName));
    setIsButtonClicked(true);
  };

  return (
    <div>
      {!isButtonClicked &&
        details.map((item, index) => (
          <div key={index}>
            <button onClick={() => handleClick(item.packageName)}>
              {item.packageName}
            </button>
          </div>
        ))}

      <DescriptionContext.Provider value={selectedPackage}>
        {isButtonClicked && <Screen3 />}
      </DescriptionContext.Provider>
    </div>
  );
}
