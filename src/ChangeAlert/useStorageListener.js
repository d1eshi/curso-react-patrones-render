import React from 'react'

function useStorageListener(sincronize) {
  const [storageChange, setStorageChange] = React.useState(false)

  React.useEffect(() => {
    const thereChangesAtStorage = (obj) => {
      if (obj.key === 'TODOS_V1') {
        console.log('Hubo cambios en todos_v1');
        setStorageChange(!storageChange)
      }
    }

    window.addEventListener('storage', thereChangesAtStorage)
    return () => window.removeEventListener('storage', thereChangesAtStorage)
  }, [])

  const toggleShow = () => {
    sincronize()
    setStorageChange(false)
  }

  return {
    show: storageChange,
    toggleShow
  }
}

export { useStorageListener }


