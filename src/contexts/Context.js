import React, { createContext, useContext, useState } from 'react';

export const ApplyContext = createContext();
// createContext 선언

export function ApplyContextProvider({ children }) {
  const [hover, setHover] = useState(false); ////글로벌하게 관리할 state
  const [serviceAreaList, setServiceAreaList] = useState([]);

  const value = {
    hover,
    setHover,
    serviceAreaList,
    setServiceAreaList,
  };

  return (
    <ApplyContext.Provider value={value}>{children}</ApplyContext.Provider>
  );
}

export function useApplyContext() {
  return useContext(ApplyContext);
} //다른 컴포넌트에서 context를 사용할 때 쓰임.
