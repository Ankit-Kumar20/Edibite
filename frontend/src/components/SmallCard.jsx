import React from 'react'

function SmallCard({discount="50%",name="Restaurant",category="Indian",image="https://images.pexels.com/photos/28107046/pexels-photo-28107046/free-photo-of-dosa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}) {
  return (
    <div>
        <div className="card bg-base-100 image-full h-[200px] w-[300px] shadow-xl text-white">
  <figure>
    <img
      src={image}
      alt="Restaurant Image" />
  </figure>
  <div className="card-body">
  <span className='animate-pulse'>{discount} discount</span>
    <h2 className="card-title">{name}</h2>
    <span>{category}</span>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Order Now</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default SmallCard