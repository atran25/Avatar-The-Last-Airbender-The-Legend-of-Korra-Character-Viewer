import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({ isLoading, characters }) => {
    return (
        isLoading ? (<Spinner/>) : (
            <section className="columns-3">
                 {characters.map((character) => (
                     <CharacterItem key={character.name} character={character}/>
                 ))}
            </section>
        )
    )
}

export default CharacterGrid
