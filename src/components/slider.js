import hawkins from'../static/images/hwakins.jpeg'
import '../css/slider.css'
import { useRef,useEffect,useState } from 'react';

function Slider(){

    const [sliderVal,setSliderVal] = useState(50)
    const img = useRef();
    const dragLine = useRef();

    useEffect(()=>{
        dragLine.current.style.left = sliderVal+ "%";
        img.current.style.width = sliderVal+"%";
    },)


    return(
        <div className='wrapper'>
            <div className='images'>
                <div className='img-1'></div>
                <div className='img-2' ref = {img}></div>
            </div>
            <div className='slider'>
                <div className='drag-line' ref={dragLine}>
                    <span></span>
                </div>
                <input type='range' min={0} max={100} value={sliderVal} onChange={e=>setSliderVal(e.target.value)}></input>
            </div>
        </div>
    )
}

export default Slider;