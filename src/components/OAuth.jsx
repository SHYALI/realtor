
// OAuth is present in every pages hence added in component 
import React from 'react'
import {FcGoogle} from 'react-icons/fc'

export default function OAuth() {
  return (
    <div>
      <button className="flex item-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded ">
        <FcGoogle className="text-2xl bg-white rounded-full"/>
        continue with google
      </button>
    </div>
  )
}
