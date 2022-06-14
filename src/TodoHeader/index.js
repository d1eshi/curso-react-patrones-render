<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'

export const TodoHeader = ({ children, loading }) => {

  return (
    <header>
      {React.Children
        .toArray(children)
        .map(child => React.cloneElement(child, { loading }))
      }
    </header>
  )
}
=======
=======
>>>>>>> 37d48dc55010d4a1c9a2d5c83f033f0d8268415b
import React from 'react';

function TodoHeader({ children, loading }) {
  return (
    <header>
      {
        React.Children
          .toArray(children)
          .map(child => React.cloneElement(child, { loading }))
      }
    </header>
  );
}

export { TodoHeader };
<<<<<<< HEAD
>>>>>>> 37d48dc55010d4a1c9a2d5c83f033f0d8268415b
=======
>>>>>>> 37d48dc55010d4a1c9a2d5c83f033f0d8268415b
