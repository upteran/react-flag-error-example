import React from 'react';
import ReactCountryFlag from "react-country-flag"

export const FlagView = () => {
  return (
    <div>
      <ReactCountryFlag countryCode="US" />

      <ReactCountryFlag
        className="emojiFlag"
        countryCode="US"
        style={{
          fontSize: '2em',
          lineHeight: '2em',
        }}
        aria-label="United States"
      />
    </div>
  )
};