import { useState } from 'react';

//components
import Song from './components/Song';
import Player from './components/Player';
import Library from './components/Library';
import Nav from './components/Nav';
//import scss
import './styles/styles.scss'
//import data
import data from './data.js';

function App() {
  const[songs,setSongs] = useState(data());
  const[currentSong,setCurrentSong] = useState(songs[0]);
  const[isPlaying,setIsPlaying] = useState(false);
  // to control whether library nav shows or not
  const[libraryStatus,setLibraryStatus]=useState(false);
  return (
    <div className={`App ${libraryStatus?'library-active':''}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong}/>
      <Player setSongs={setSongs} songs={songs} setCurrentSong={setCurrentSong} currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
      <Library libraryStatus={libraryStatus} songs={songs} setSongs={setSongs} setCurrentSong={setCurrentSong}/>
    </div>
  );
}

export default App;
