import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Card = ({ title, desc, onDelete, onEdit }) => {
  return (
    <div className='card'>
      <div className="card-header">
    <div className="del" onClick={onDelete}>
        <MdDelete />
    </div>
    <div className="edit">
        <FaEdit onClick={onEdit} />
    </div>
</div>
     
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
    </div>
  )
}

export default Card