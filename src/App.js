import './App.css';
import ReactDOM from 'react-dom';
import ReactHlsPlayer from 'react-hls-player';
function App() {
  function preview() {
        
    ReactDOM.render(

        <ReactHlsPlayer
            src="https://content.jwplatform.com/manifests/yp34SRmf.m3u8"
            autoPlay={false}
            controls={true}
            width="100%"
            height="auto"
        />,

        document.getElementById('root')
    );
}
return (
    <div className="App">
        <button  onClick={() => preview()}>
            preview
        </button>
    </div>
)
}

export default App;
