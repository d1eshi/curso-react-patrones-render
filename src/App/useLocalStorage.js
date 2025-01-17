import React from 'react';

function useLocalStorage(itemName, initialValue) {
<<<<<<< HEAD:src/Hooks/useLocalStorage.js
  const [sincronizedItem, setSincronizedItem] = React.useState(true)

  const [sincronizedItem, setSincronizedItem] = React.useState(true);
: src / App / useLocalStorage.js
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
        setSincronizedItem(true);
<<<<<<< HEAD:src/Hooks/useLocalStorage.js
      } catch (error) {
        setError(error);
      }
    }, 3000);
    // return () => cleanTimeout(localStorage)
  }, [sincronizedItem]);


} catch (error) {
  setError(error);
}
    }, 3000);
  }, [sincronizedItem]);

: src / App / useLocalStorage.js
const saveItem = (newItem) => {
  try {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  } catch (error) {
    setError(error);
  }
};

const sincronizeItem = () => {
<<<<<<< HEAD:src/Hooks/useLocalStorage.js
  console.log('sincronize all');
  setLoading(true)
  setSincronizedItem(false)
}

setLoading(true);
setSincronizedItem(false);
  };
: src / App / useLocalStorage.js

return {
  item,
  saveItem,
  loading,
  error,
<<<<<<< HEAD:src/Hooks/useLocalStorage.js
  sincronizeItem

    sincronizeItem,
: src/ App / useLocalStorage.js
};
}

export { useLocalStorage };
