import React from 'react'
import { useParams } from 'react-router'
function ProductDetails() {
  return (
    <div>
      ProductDetails <br />
      {useParams().id}
    </div>
  )
}

export default ProductDetails
