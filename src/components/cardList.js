import Eleven from '../static/images/Eleven.jpeg'
import Mike from '../static/images/Mike.jpeg'
import Will from '../static/images/Will.jpeg'
import Dustin from '../static/images/Dustin.jpeg'
import Lucas from '../static/images/Lucas.jpeg'
import Card from './card.js'
import "../css/cardList.css"

function CardList(){
    return(
        <div className='card-list'>
            <Card character = {Eleven} />
            <Card character = {Mike} />
            <Card character = {Will} />
            <Card character = {Dustin} />
            <Card character = {Lucas} />
        </div>
    )
}

export default CardList;