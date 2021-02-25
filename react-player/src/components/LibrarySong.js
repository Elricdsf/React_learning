const LibrarySong = ({ songs, setSongs, song, setCurrentSong }) => {
  const selectSong = async () => {
    const updatedSongs = songs.map((target) => {
      return{
        ...target,
        active:target===song,
      }
    });
    await setCurrentSong(song);
    await setSongs(updatedSongs);
  };

  return (
    <div
      className={`librarySongs ${song.active ? "selected" : ""}`}
      onClick={()=>selectSong()}
    >
      <img alt={song.name} src={song.cover} />
      <div className="songDescription">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
