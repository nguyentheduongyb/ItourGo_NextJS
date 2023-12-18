import React from 'react'
import { SearchItem, SearchItemProps } from './SearchItem'

const results: SearchItemProps[] = [
  {
    categories: ["Explore"],
    name: "South Korea One Life Adventures - 10 Day Tour",
    description: "Had an amazing time on this 05 days tour. I felt completely safe as a solo traveller....",
    image: "https://cdn1.ivivu.com/iVivu/2022/06/30/12/hinhdaidien-374x280.webp?o=jpg",
    price: { perDay: 111, from: 222 },
    sale: 1111,
    stars: 4.5,
    reviews: 12,
    duration: 111,
    ranks: ["Platium", "Gold"],
  }
]
const SearchList = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      {results.map((item, index) => (
        <SearchItem key={index} categories={item.categories} name={item.name} description={item.description} image={item.image} price={item.price} sale={item.sale} stars={item.stars} reviews={item.reviews} duration={item.duration} ranks={item.ranks} />

      ))}
    </div>
  )
}

export default SearchList
