'use client'
import React, { useEffect, useState } from 'react'
import { SearchItem } from './SearchItem'
import { urlAPI } from '~/utils/API'


const SearchList = () => {
  const [results, setResults] = useState([])
  useEffect(() => {
    fetch(`${urlAPI}/api/tour/search`)
      .then(response => response.json())
      .then(data => setResults(data))
  }, [])
  console.log(results);

  return (
    <div className="w-full flex flex-col gap-6">
      {results.map((item: any, index: number) => (


        <SearchItem key={index} categories={item.category} name={item.name} description={item.description} image={item.image} destinations={item.destinations} expectedCost={item.expectedCost} price={item.price} country={item.country} agency={item.agency} sale={item.sale} rate={item.rate} reviews={item.reviews} duration={item.duration} rank={item.rank} slug={item.slug} />
      ))}
    </div>
  )
}

export default SearchList
