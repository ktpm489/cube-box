import logo from './logo.svg';
import './App.css';
import { Component} from 'react'
import 'prevent-pull-refresh';
import ReactDOM from "react-dom";
class App extends Component {

  componentDidMount() {
    this.initDataCubeBox()
    this.updateSize()
    window.addEventListener('resize', this.updateSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize',this.updateSize)
  }

  initDataCubeBox = () => {
    const face1 = document.getElementById('face1')
    const face2 = document.getElementById('face2')
    const face3 = document.getElementById('face3')
    const face4 = document.getElementById('face4')
    const face5 = document.getElementById('face5')
    const face6 = document.getElementById('face6')
    this.addImage("https://ipfs.pantograph.app/ipfs/Qme8CY739GbguDEnAepgAgigddnaLLW8TH7wcoxc67vgXh?filename=2.png", face1, 'https://ipfs.pantograph.app/ipfs/Qma9cLWvfz87YrhxqRr4CjYSWiRPrLm8x7oCG6EW1p5Us6?filename=mat2.gif');
    this.addImage("https://ipfs.pantograph.app/ipfs/QmZQ2Tfo42v7aByynm4CGFsR2SK8sK9scHBWYbY4MMV5ea?filename=3.png", face2);
    this.addImage("https://ipfs.pantograph.app/ipfs/QmYQqGQJfi6XeHAqERBSp1nnXKnVuhiwfyk2wdcmLgHaPV?filename=4.png", face3, 'https://ipfs.pantograph.app/ipfs/QmdJ6yggzxZt1GMuc2pehkYn2xgpsPpksYZ1cfxp11anww?filename=mat4.gif');
    this.addImage("https://ipfs.pantograph.app/ipfs/QmdG5sAXiqUBzrEnzZCfreeiAkQQewfepCu61BmGzhFHGM?filename=5.png", face4);
    this.addImage("https://ipfs.pantograph.app/ipfs/Qmd12aesUGsML1uX7TXNC5kap7mBnMtHtdwcEcv72VH7Yu?filename=6.png", face5);
    if (this.checkSafari()) {
      this.addVideoSafari("https://ipfs.pantograph.app/ipfs/QmWSW4NjdRBtL6akshiJhPYBr8tnxw76Q9mSMseFWtSDWz?filename=mat-1.mp4", face6);
    } else {
      this.addVideoChorme("https://ipfs.pantograph.app/ipfs/QmWSW4NjdRBtL6akshiJhPYBr8tnxw76Q9mSMseFWtSDWz?filename=mat-1.mp4", face6);
    }
    
  }


  checkSafari = () => {
    return navigator.vendor.match(/apple/i) &&
      !navigator.userAgent.match(/crios/i) &&
      !navigator.userAgent.match(/fxios/i);
  }


  // function add Image
 addImage = (linkImg, currentDiv , linkGif = '') => {
  var div = document.createElement('div');
  
   if (linkGif !== '') {
     //remove on click event in gif image
     div.innerHTML = `<img src="${linkImg} "width="100%" height="100%" alt="Test Image" title="Test Image" />`
     div.onmouseenter = function (e) {
       e.preventDefault();
       console.log('onmouseenter')
       div.getElementsByTagName('img')[0].src = linkGif
       
     };
     div.ontouchstart = function (e) {
       e.preventDefault();
       console.log('touchstart')
       div.getElementsByTagName('img')[0].src = linkGif
     };

     div.onmouseleave = function (e) {
       e.preventDefault();
       console.log('onmouseleave')
       div.getElementsByTagName('img')[0].src = linkImg
     };
     div.ontouchend= function (e) {
       e.preventDefault();
       console.log('ontouchend')
       div.getElementsByTagName('img')[0].src = linkImg
     };
   } else {
     div.innerHTML = `<img src="${linkImg} "width="100%" height="100%" alt="Test Image" title="Test Image"  onclick="img_box(this)"/>`
   }
   currentDiv.appendChild(div);
  
 
}

  hoverEvent = (div) => ()=> {
    console.log('div',div)
}

// function add Video
 addVideoSafari = ( linkVideo = 'https://ipfs.pantograph.app/ipfs/QmWy8vRGgucQLrVcCK5Xdai31PNCJzxr44vUNY5RC8aTAD?filename=red-velvet-psycho-mv-teaser%20(1).mp4?autoplay=1', currentDiv) => {
  var div = document.createElement('div');
  div.className = 'cell';
   div.innerHTML =`<video
    id="my-player"
    class="video-js"
    controls
    playsinline
    muted
    loop
    preload="auto" width="360" height="360" autoplay
    poster="//vjs.zencdn.net/v/oceans.png"
    data-setup='{}'>
  <source src="${linkVideo}" type="video/mp4"></source>
  <p class="vjs-no-js">
    To view this video please enable JavaScript, and consider upgrading to a
    web browser that
    <a href="https://videojs.com/html5-video-support/" target="_blank">
      supports HTML5 video
    </a>
  </p>
</video>`
  currentDiv.appendChild(div);
}

  // function add Video
  addVideoChorme = (linkVideo = 'https://ipfs.pantograph.app/ipfs/QmWy8vRGgucQLrVcCK5Xdai31PNCJzxr44vUNY5RC8aTAD?filename=red-velvet-psycho-mv-teaser%20(1).mp4?autoplay=1', currentDiv) => {
    var div = document.createElement('div');
    var iframe = document.createElement('video');
    iframe.style.width = '96%';
    iframe.style.height = '96%';
    iframe.style.marginTop = '2%';
    iframe.style.border = '0px';
    iframe.style.alignSelf = 'center';
    iframe.style.alignItems = 'center';
    iframe.style.alignContent = 'center';
    iframe.autoplay = true
    iframe.controls = true
    iframe.muted = true
    iframe.loop = true
    iframe.playsInline = true
    iframe.style.objectFit = 'contain'
    iframe.src = linkVideo;
    div.appendChild(iframe);
    currentDiv.appendChild(div);
  }




   updateSize = () =>  {
     let el = document.getElementsByClassName("viewport")[0]
    //  console.log('el', el)
     let transformProps = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' ')
     let transformProp = this.support(transformProps, el)
    //  console.log('transformProp', transformProp)
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
      {/***Safari not working in moble*/}
        {/* <video autoPlay muted loop id="myVideo">
          <source src="https://ipfs.pantograph.app/ipfs/QmPYJ525yBEBVQ7ACpY3A9A2HQhYLbQQnDukfFoeMv9vyX?filename=Comp 1.mp4" type="video/mp4" />
        </video> */}
        {/***Verylagging in chorme in moble*/}
        {/* <img src="https://ipfs.pantograph.app/ipfs/QmNSG5fFLP1dpfuSFaY8EDWSqSZW6JYAmEEvKrSKQNoR6y?filename=Background_basketball.gif" id="myVideo" alt=""> 
         </img> */}
        <p className="learn">
        </p>
        <article className="viewport">
          <section className="cube">
            <div className="face" id='face1'></div>
            <div className="face" id='face2'></div>
            <div className="face" id='face3'></div>
            <div className="face" id='face4'></div>
            <div className="face" id='face5'></div>
            <div className="face" id='face6'></div>
          </section>
        </article>

      </div>
    </div>
  );
  }
}

export default App;
