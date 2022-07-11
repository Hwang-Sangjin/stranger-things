import '../css/card.css'

function Card({character}){
    
    console.log(character)
    return( 
        <div className='card'>
            <img src={character}/>
        </div>
    )
}

export default Card;