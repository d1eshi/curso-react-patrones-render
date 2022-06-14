import React from 'react'



function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
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
      props.sincronize()
      setStorageChange(false)
    }


    return (
      <WrappedComponent
        show={storageChange}
        toggleShow={toggleShow}
      />
    )

  }
}

export { withStorageListener }
