import LibrarySong from "./LibrarySong";

const Library = ({ libraryStatus,setSongs,songs,setCurrentSong }) => {
  return (
    <div className={`library ${libraryStatus?'navOn':''}`}>
      <h1>Library</h1>
      <div className="songList">
        {songs.map((song) => (
          <LibrarySong setSongs={setSongs} songs={songs} song={song} setCurrentSong={setCurrentSong} key={song.id}/>
        ))}
      </div>
    </div>
  );
};

export default Library;
