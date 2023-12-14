import React from "react";
import * as countries from "country-flag-icons/react/3x2";

const countryCodes = [
  { code: "AT", name: "austria" },
  { code: "BE", name: "belgium" },
  { code: "BG", name: "bulgaria" },
  { code: "HR", name: "croatia" },
  { code: "CY", name: "cyprus" },
  { code: "CZ", name: "czechia" },
  { code: "DK", name: "denmark" },
  { code: "EE", name: "estonia" },
  { code: "FI", name: "finland" },
  { code: "FR", name: "france" },
  { code: "DE", name: "germany" },
  { code: "GR", name: "greece" },
  { code: "HU", name: "hungary" },
  { code: "IE", name: "ireland" },
  { code: "IT", name: "italy" },
  { code: "LV", name: "latvia" },
  { code: "LT", name: "lithuania" },
  { code: "LU", name: "luxembourg" },
  { code: "MT", name: "malta" },
  { code: "NL", name: "netherlands" },
  { code: "PL", name: "poland" },
  { code: "PT", name: "portugal" },
  { code: "RO", name: "romania" },
  { code: "SK", name: "slovakia" },
  { code: "SI", name: "slovenia" },
  { code: "ES", name: "spain" },
  { code: "SE", name: "sweden" },
];

const FlagArray = countryCodes.map(({ code, name }) => ({
  key: name.charAt(0).toUpperCase() + name.slice(1),
  component: () => React.createElement(countries[code]),
}));

export default FlagArray;
