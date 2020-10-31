import React from 'react';


const useLocalStorage = (key, initial) => {
  const [state, useState] = React.useState(() => {
    const local = localStorage.getItem(key);
    return local ? local : initial;
  });

  React.useEffect(() => {
    localStorage.setItem(key, state);
  });
  
  return [state, useState];
}

export default useLocalStorage;