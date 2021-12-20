import React from 'react'

const CharacterItem = ({ character }) => {
    const altText = `photo of ${character.name}`
    return (
        <div className="card shadow-sm bg-accent text-accent-content p-15 m-4">
            <figure>
                <img src={character.photoUrl} alt={altText}/>
            </figure>
            <div className="card-body">
                <div className="card-title">
                    <h2>{character.name}</h2>
                    <h4>Affiliation: {character.affiliation}</h4>
                </div>
                <div>
                    <p>Allies:
                        {character.allies.map(ally => ally)}
                    </p>
                    <p>Enemies:
                        {character.enemies.map(enemy => enemy)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem
