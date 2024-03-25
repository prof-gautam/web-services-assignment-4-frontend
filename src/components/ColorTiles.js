import React from 'react';

const ColorTiles = ({ colors }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      {Object.entries(colors).map(([colorName, colorValue]) => (
        <div key={colorName} style={{ margin: '20px', textAlign: 'center' }}>
          <div
            style={{
              backgroundColor: colorValue,
              width: 150, 
              height: 150,
              marginBottom: 10,
            }}
          ></div>
          <div style={{ color: '#000', fontWeight: 'bold' }}>{colorName.replace(/Color$/, '')}</div>
        </div>
      ))}
    </div>
  );
};

export default ColorTiles;
