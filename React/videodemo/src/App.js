import logo from './logo.svg';
import './App.css';

function App() {
  const playerRef = React.useRef();
  const startAt = 2;
  const stopAt = 10;

  const handleProgress = useCallback(
    (state) => {
      console.log("progress", state);
      if (state.playedSeconds >= stopAt) {
        const internalPlayer = playerRef.current.getInternalPlayer();
        if (internalPlayer && internalPlayer.pause) {
          internalPlayer.pause();
          playerRef.current.seekTo(startAt, "seconds");
        }
      }
    },
    []
  );
  return (
    <div className="App">
      <ReactPlayer
        ref={playerRef}
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        className="react-player"
        playing
        controls
        width="100%"
        height="100%"
        onProgress={handleProgress}
      />
    </div>
  );
}

export default App;
