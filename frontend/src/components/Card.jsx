import React from 'react'

function Card({discount="50%",name="Restaurant",category="Indian",image="https://images.pexels.com/photos/28107046/pexels-photo-28107046/free-photo-of-dosa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}) {
  return (
    <>
    <div className="card card-compact w-[342px] h-[407px] shadow-xl text-black" style={{background:"#F3F3F3"}}>
  <figure>
    <img className='h-[230px] w-[342px]'
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
    </>
  )
}

export default Card