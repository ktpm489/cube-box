import logo from './logo.svg';
import './App.css';
import { Component} from 'react'
import 'prevent-pull-refresh';
import ReactDOM from "react-dom";
class App extends Component {

  componentDidMount() {
   
    this.updateSize()
    window.addEventListener('resize', this.updateSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize',this.updateSize)
  }



   updateSize = () =>  {
  // setSize([window.innerWidth, window.innerHeight]);
     let el = document.getElementsByClassName("viewport")[0]
     console.log('el', el)
     let transformProps = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' ')
     let transformProp = this.support(transformProps, el)
     console.log('transformProp', transformProp)
     let ratio = window.innerWidth / 1000 
     let ratioCompare = ratio > 0.55 ? 0.5 : ratio 
     el.style[transformProp] = `scale(${ratioCompare},${ratioCompare})`
}

  
  support =(props, el) =>{
  for (var i = 0, l = props.length; i < l; i++) {
    if (typeof el?.style[props[i]] !== "undefined") {
      return props[i];
    }
  }
}

  render () {
  return (
    <div className="App">
      <div className="wrapper">
        <p className="learn">
          This is a demo, <a href="https://paulrhayes.com/2010-09/3d-css-cube-ii-touch-gestures-click-and-drag/">learn how it works</a>.
        </p>

        <article className="viewport">
          <section className="cube">
            <div></div>
            <div>
              <h2>3D cube</h2>
              <time>28th September 2010</time>
              <p>By Paul Hayes</p>
              <p>3D cube built using css, webkit-perspective and webkit-transform. Rotation via webkit-transition.</p>
              <p>Use arrow keys to navigate, or click and hold mouse. On touch screens, use one finger to rotate. Press ESC to reset.</p>
              <p><a href="https://paulrhayes.com/2010-09/3d-css-cube-ii-touch-gestures-click-and-drag/" target="_top">Read more &raquo;</a></p>
            </div>
            <div>
            </div>
            <div>
              <h2><a href="https://paulrhayes.com/2009-07/animated-css3-cube-interface-using-3d-transforms/" target="_top">Learn how to make a cube</a></h2>
              <time>17th July 2009</time>
              <p>By Paul Hayes</p>
              <p>&#8220;A 3D cube can be created solely in CSS, with all six faces.&#8221;</p>
              <p>Article: <a href="https://paulrhayes.com/2009-07/animated-css3-cube-interface-using-3d-transforms/" target="_top">Cube explanation</a></p>
            </div>
            <div>
              <p>I design and build websites in Brighton</p>
            </div>
            <div>
              <small>Nothing down here.</small>
            </div>
          </section>
        </article>

      </div>
    </div>
  );
  }
}

export default App;
