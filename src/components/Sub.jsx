import React from 'react'

const Sub = (props) => {
    const {className, children} = props;

  return (
    <h2 className={className}>{children}</h2>
  )
}

export default Sub