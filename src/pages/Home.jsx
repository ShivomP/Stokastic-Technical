import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {
    // set poke variables to empty array
    const [pokeList, setPokeList] = useState([])
    const [pokeImgList, setPokeImgList] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    // fetch pokemon data
    useEffect(() => {
        const fetchPokeData = async () => {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=50')
            setPokeList(response.data.results)
        }
        fetchPokeData()
    }, [])

    // fetch pokemon images
    // useEffect(() => {
    //     const fetchPokeImg = async () => {
    //         const response = await axios.get('')
    //         setPokeImgList(response.data)
    //     }
    //     fetchPokeImg()
    // }, [])

    // paginantion


  return (
    <section id='home'>
        <div className="container">
            <h1 className="home__title">
                Shivom's Pokedex
            </h1>
            <ul className="poke__list">
                {pokeList.map((pokemon) => (
                    <li className="poke__list--item">
                            {pokemon.name}
                    </li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Home
