import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
//import '~video-react/dist/video-react.css'; // import css
//import VideoPlayer from './components/VideoPlayer'

//import Description from './components/Description';

function App() {
  return (
    <div className="App">
      <HomePage />
      {/* <Description />
      <Card /> */}
    </div>
  );
}

export default App;
