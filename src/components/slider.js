import hawkins from'../static/images/hwakins.jpeg'
import '../css/slider.css'

function Slider(){
    return(
        <div className='slider'>
            <img className='slider-img' src={hawkins}/>
        </div>
    )
}

export default Slider;