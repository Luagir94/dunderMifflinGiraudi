import React from 'react'

const CustomImg = ({img, name ,id, clase}) => (
  <div>
    <img src={img} alt={name} id={id} className={clase} />
  </div>
)

export default CustomImg