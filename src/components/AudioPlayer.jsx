import React, { act, useEffect, useState } from 'react';
import ReactHowler from 'react-howler';
import { useGlobal } from './hooks';

const AudioPlayer = () => {
  const [playing, setPlaying] = useState(false); // state to track if audio is playing
  const [volume, setVolume] = useState(1); // state to track volume

  const togglePlayPause = () => {
    setPlaying(!playing); // toggle playing state
  };

  const {activeAudio, playAudio, setActiveAudio, setPlayAudio} = useGlobal()

  useEffect(()=>{
    if(playAudio){
      setPlaying(true)
    }
  }, [playAudio, activeAudio])

  useEffect(()=>{
    // setActiveAudio('start.mp3')
    setPlayAudio(true)
  }, [])

  return (
    <div>
      {/* ReactHowler component to handle audio */}
      <ReactHowler
        src={`/audio/${activeAudio}`}
        playing={playing}
        volume={volume}
        loop={false}
        onEnd={() => setPlaying(false)}
      />
      <div>
        {/* Play/Pause button */}
        <button disabled={!activeAudio} onClick={togglePlayPause} className='px-5' >
          {playing ? 'Pause' : 'Play'}
        </button>
        {/* Volume slider */}
        {/* <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
        /> */}
      </div>
    </div>
  );
};

export default AudioPlayer;
