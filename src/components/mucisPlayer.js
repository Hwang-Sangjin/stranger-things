import MainTheme from"../static/music/mainTheme2.mp3"
import React, { useState, useEffect } from "react";
import "../css/musicPlayBtn.css";

const useAudio = url => {
    const [audio] = useState(new Audio(MainTheme));
    const [playing, setPlaying] = useState(false);
  
    const toggle = () => setPlaying(!playing);
  
    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing]
    );
  
    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(true));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(true));
      };
    }, []);
  
    return [playing, toggle];
  };
  
  const Player = ({ url }) => {
    const [playing, toggle] = useAudio(url);
  
    return (
      <div>
        <div className="play-wraaper">
            <button className="music-play-btn" onClick={toggle} >
            {playing ? "Ⅱ": "▷"}
            </button>
        </div>
      </div>
    );
  };
  
  export default Player;
  