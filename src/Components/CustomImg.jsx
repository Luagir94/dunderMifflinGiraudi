import React from 'react'

const CustomImg = ({img, name ,id}) => (
  <div>
    <img src={img} alt={name} id={id} />
  </div>
)

export default CustomImg