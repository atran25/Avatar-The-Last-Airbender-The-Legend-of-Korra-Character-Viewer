import React, { useState, useEffect } from 'react'
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import axios from 'axios'

const App = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await axios(`https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=500&name=${query}`)
      const response = await result 
      console.log(response.data)
      setCharacters(response.data)
      setIsLoading(false)
    }
    fetchCharacters()
  },[query])

  

  return (
    <div className="container mx-auto">
      <Header/>
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} characters={characters}/>
    </div>
  )
}

export default App;
