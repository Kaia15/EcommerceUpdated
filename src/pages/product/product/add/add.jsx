import React from 'react'

const AddToTotal = ({idItem, handleCart}) => {
    
    // console.log(idItem)
    return (
    <div>
        <button
        onClick = {handleCart}
        > Add to Cart </button>
    </div>
    )
}

export default AddToTotal