import '../css/card.css'

function Card({character, characterName}){
    return( 
        <div>
            
            <div className='card'>
                <img src={character}/>
            </div>
            <div className='card-name'>{characterName}</div>
        </div>
        
    )
}

export default Card;