import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({setLibraryStatus,libraryStatus}) => {
    const navSwitch =()=>{
        setLibraryStatus(!libraryStatus);
    }
  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={navSwitch}>
        Library
        <FontAwesomeIcon icon={faMusic}/>
      </button>
    </nav>
  );
};

export default Nav;
