import Link from "next/link"
import React, { useState } from "react"
import cities from '../lib/citieslist.json'

export default function CitiesList(props: any){
   const filterCity = cities.filter((city) => {
      if (props.input === ''){
         return city
      }
      
      else {
         return city.name.toLowerCase().startsWith(props.input)
      }
   })

   return (
      <ul>
         {filterCity.map(city => (<Link href={`/${city.slug}`} key={city.slug}><li className="py-2 pl-2 border-b hover:text-purple-400 cursor-pointer">{city.name}</li></Link>))}
      </ul>
   )
}