import React from "react";
function card({username,btnText="visit me"}){
    
    return(
       <div className="relative h-[400px] w-[300px] rounded-md">
  <img 
    src="https://images.unsplash.com/photo-1546961193-77bdf02b1b3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    alt="Atharv Pro"
    className="h-full w-full rounded-md object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-xl font-semibold text-white">{username}</h1>
    <p className="text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepteur, debitis?
    </p>

    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {btnText}
    </button>
  </div>
</div>

    )
}
export default  card