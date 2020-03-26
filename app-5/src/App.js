import './App.css';
import Image from './component/Image'
import React, { Component } from 'react';

class App extends Component{
  render(){
  return (
    <div className='App'>
      <Image url={"https://cdn.vox-cdn.com/thumbor/KSFusNAEyV1TupIMbIXv7N2qs04=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/6645195/dota-2-logo.0.jpg"}/>
    </div>
  )
}
}
export default App