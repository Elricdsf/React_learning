import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  songs,
  setCurrentSong,
  currentSong,
  isPlaying,
  setIsPlaying,
  setSongs
}) => {
  // Ref
  const audioRef = useRef(null);
  //useEffect
  useEffect(() => {
    (async () => {
      const updatedSong = songs.map(song=>{
        return{
          ...song,
          active:song.id===currentSong.id,
        }
      });
      await setSongs(updatedSong);
      if (isPlaying){ await audioRef.current.play()};
    })();
  }, [currentSong]);

  // State
  const [timeStamp, setTimeStamp] = useState({
    duration: 0,
    currentTime: 0,
    percentage:0,
  });

  // style changing
  // slider-percentage(style) changing
  const sliderAnimat = {
    transform:`translateX(${timeStamp.percentage}%)`,
  };

  const trackColor = {
    background:`linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
  }

  // Event Handlers
  // play/pause button
  const playHandler = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    }
  };
  // time changing
  const updateTime = (e) => {
    const duration = e.target.duration;
    const currentTime = e.target.currentTime;
    const percentage = Math.round((currentTime/duration)*100);
    setTimeStamp({ duration, currentTime,percentage });
  };
  // slider changing
  const dragSlider = (e) => {
    audioRef.current.currentTime = e.target.value;
    setTimeStamp({ ...timeStamp, currentTime: e.target.value });
  };
  // skip button handler
  const skipHandler = (options) => {
    // as song and currentSong are not refering to the same object
    // they cannot be matched, we have to compare their attributes(e.g id)
    let index = songs.findIndex((song) => song.id === currentSong.id);
    if (options === "forward") {
      setCurrentSong(songs[(index + 1) % songs.length] || songs[0]);
    } else if (options === "backward") {
      setCurrentSong(
        songs[(index - 1) % songs.length] || songs[songs.length - 1]
      );
    }
  };
  const goNext = ()=>{
    let index = songs.findIndex((song) => song.id === currentSong.id);
    setCurrentSong(songs[(index + 1) % songs.length] || songs[0]);
  }
  // time format
  const formatedTime = (second) => {
    const format =
      parseInt(second / 60) + ":" + ("0" + Math.floor(second % 60)).slice(-2);
    return format;
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>{formatedTime(timeStamp.currentTime)}</p>
        <div style ={trackColor} className='track'>
          <input
          min={0}
          max={timeStamp.duration || 0}
          value={timeStamp.currentTime}
          onChange={dragSlider}
          type="range"
          />
          <div style={sliderAnimat} className='animation-track'></div>
        </div>
        <p>{timeStamp.duration ? formatedTime(timeStamp.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipHandler("backward")}
          className="skip-back"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playHandler}
          className="play"
          icon={!isPlaying ? faPlay : faPause}
        />
        <FontAwesomeIcon
          onClick={() => skipHandler("forward")}
          className="skip-forward"
          icon={faAngleRight}
        />
        {/* onTimeUpdate: when the audio change its time
        onLoadedMetadata: after the audio loaded src */}
        <audio
          onLoadedMetadata={updateTime}
          onTimeUpdate={updateTime}
          onEnded={goNext}
          ref={audioRef}
          src={currentSong.audio}
        />
      </div>
    </div>
  );
};

export default Player;
