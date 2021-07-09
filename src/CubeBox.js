import logo from './logo.svg';
import './App.css';
import { Component} from 'react'
import 'prevent-pull-refresh';
import ReactDOM from "react-dom";
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundGif: "https://ipfs.pantograph.app/ipfs/QmNSG5fFLP1dpfuSFaY8EDWSqSZW6JYAmEEvKrSKQNoR6y?filename=Background_basketball.gif",
      backgroundVideo: "https://ipfs.pantograph.app/ipfs/QmPYJ525yBEBVQ7ACpY3A9A2HQhYLbQQnDukfFoeMv9vyX?filename=Comp 1.mp4"
    }
  }

  async componentDidMount() {
//     this.setState({ isLoading: true })
//     try  {
//     // let data = await this.getDataInfoConfig()
//     let data = true
//       if (data){
//         // console.log('data.others', typeof data.others.sample1_data ,JSON.parse(data.others.sample1_data))
//         // let dataInput = JSON.parse(data.others.sample1_data)
//         let dataInput = {
//           'backgroundGif': "https://ipfs.pantograph.app/ipfs/QmP469etTe5gxtYt2HVNYn22RvVrp9zYnjy6z9fY71Xa26",
// 'backgroundVideo': "https://ipfs.pantograph.app/ipfs/QmPke6xqSPD1wWFP5paRc2hX9tgfyo1yzynDsEvd7mcZi3",
// face1: { linkimage: "", linkgif: "", linkvideo: "https://ipfs.pantograph.app/ipfs/QmWSW4NjdRBtL6akshiJhPYBr8tnxw76Q9mSMseFWtSDWz?filename=mat-1.mp4" },
// face2: { linkimage: "https://ipfs.pantograph.app/ipfs/Qme8CY739GbguDEnAepgAgigddnaLLW8TH7wcoxc67vgXh?filename=2.png", linkgif: "https://ipfs.pantograph.app/ipfs/QmPaHUWKaR9jnr7Wvr4zVUxo3UxPK4VuhEWXqouXp5ZfvM?filename=mat2a.gif", linkvideo: "" },
// face3: { linkimage: "https://ipfs.pantograph.app/ipfs/QmZQ2Tfo42v7aByynm4CGFsR2SK8sK9scHBWYbY4MMV5ea?filename=3.png", linkgif: "", linkvideo: "" },
// face4: { linkimage: "https://ipfs.pantograph.app/ipfs/QmYQqGQJfi6XeHAqERBSp1nnXKnVuhiwfyk2wdcmLgHaPV?filename=4.png", linkgif: "https://ipfs.pantograph.app/ipfs/QmRajayojGREpL9Pp8MCmjdBP7N6UUq3jnwnEkq3hPCRkF?filename=mat4a.gif", linkvideo: "" },
// face5: { linkimage: "https://ipfs.pantograph.app/ipfs/QmdG5sAXiqUBzrEnzZCfreeiAkQQewfepCu61BmGzhFHGM?filename=5.png", linkgif: "", linkvideo: "" },
// face6: { linkimage: "https://ipfs.pantograph.app/ipfs/Qmd12aesUGsML1uX7TXNC5kap7mBnMtHtdwcEcv72VH7Yu?filename=6.png", linkgif: "", linkvideo: "" },
// frame: "https://ipfs.pantograph.app/ipfs/QmZwnC4SB2gJ2MhULFDaL4Awkd9FRcSGUbesQ9mgaTWxih?filename=Vien.png",
// loading: "https://ipfs.pantograph.app/ipfs/QmT1PHR17tuQhvDHQrJxUwRxp2ikWfAdz8qeoNSAdBP18Q?filename=loading .gif"
//         }
//         // console.log('dataInput', dataInput)
//         this.initDataCubeBox(dataInput)
//         this.updateSize()
//         window.addEventListener('resize', this.updateSize);
//         this.setState({ isLoading: false })
//       } else {
//         this.setState({ isLoading: false })
//       }
//     }catch(e) {
//       console.log('e',e)
//       this.setState({ isLoading: false })
//     }
    const { isLoading, dataInput } = this.props
    this.updateSize()
    window.addEventListener('resize', this.updateSize);
    try {
      if (!isLoading && dataInput !== null && dataInput.frame !== undefined) {
        console.log('dataInput111', dataInput)
        this.initDataCubeBox(dataInput)
      
      }
    }catch(e) {

    }

  }

  componentWillUnmount() {
    this.updateSize && window.removeEventListener('resize',this.updateSize)
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.dataInput !== prevProps.dataInput) {
      this.initDataCubeBox(this.props.dataInput)
    }
  }



  getDataInfoConfig = async () => {
    let response = await fetch('https://dev-api.pantograph.app/setting')
    let responeJson = await response.json()
    return responeJson
  }

  // initDataCubeBox = (data) => {
  //   const face1 = document.getElementById('face1')
  //   const face2 = document.getElementById('face2')
  //   const face3 = document.getElementById('face3')
  //   const face4 = document.getElementById('face4')
  //   const face5 = document.getElementById('face5')
  //   const face6 = document.getElementById('face6')
  //   if (this.checkSafari()) {
  //     this.addVideoSafari("https://ipfs.pantograph.app/ipfs/QmRFHxore52SdJ5DdNcxsiJEY1qjV6XAHt3jqmTKVREsgz?filename=mat-1.mp4", face1);
  //   } else {
  //     this.addVideoChorme("https://ipfs.pantograph.app/ipfs/QmRFHxore52SdJ5DdNcxsiJEY1qjV6XAHt3jqmTKVREsgz?filename=mat-1.mp4", face1);
  //   }

  //   this.addImage("https://ipfs.pantograph.app/ipfs/QmVG79g2VpcnhXTZ3y8rETr8vmdDXRy1oPUvhtgV6s5xQC?filename=mat-2.png", face2);
  //   this.addImage("https://ipfs.pantograph.app/ipfs/QmUh1iDrZMhjWPAktquk35TGUekjmK3V6wKgfEEYkkWpXT?filename=mat-3.png", face3, 'https://ipfs.pantograph.app/ipfs/QmYKVjVwUUTe2mWNJMHmpWsxH41cJMDypwdRyuQc7SAwKm?filename=mat-3.gif');
  //   this.addImage("https://ipfs.pantograph.app/ipfs/QmRTuQq8C4VCZRFUjUsW7VUTLnAEreuronsReteN2MzjGM?filename=mat-4.png", face4);
  //   this.addImage("https://ipfs.pantograph.app/ipfs/QmZcHnjZtkxnTdGkXPxND3F2gNnjfEddNUDLLkCAhHgfMq?filename=mat-5.png", face5);
  //   this.addImage("https://ipfs.pantograph.app/ipfs/QmTWkNT56KiCKSz7PJEaQ6YjjtTWZrfbHY12Mr3ARKQdVF?filename=mat-6.png", face6, "https://ipfs.pantograph.app/ipfs/QmbU2b6dpKEwCtVoPeG3jUw87psDzvKsgnkd7eC1sKXo8j?filename=mat-6.gif");
  // }

  initDataCubeBox = (data) => {
    const face1 = document.getElementById('face1')
    const face2 = document.getElementById('face2')
    const face3 = document.getElementById('face3')
    const face4 = document.getElementById('face4')
    const face5 = document.getElementById('face5')
    const face6 = document.getElementById('face6')
    // this.initBackGroundData(data)
    let frameLink = data.frame
    this.initEachFrameCube(face1, data.face1, frameLink)
    this.initEachFrameCube(face2, data.face2, frameLink)
    this.initEachFrameCube(face3, data.face3, frameLink)
    this.initEachFrameCube(face4, data.face4, frameLink)
    this.initEachFrameCube(face5, data.face5, frameLink)
    this.initEachFrameCube(face6, data.face6, frameLink)
  }

  initEachFrameCube = (div, data ,frameLink) => {
   
    if (data.linkvideo !== '') {
      if (this.checkSafari()) {
        this.addVideoSafari(data.linkvideo, div);
      } else {
        this.addVideoChorme(data.linkvideo, div);
      }
    } else {
      this.addImage(data.linkimage, div, data.linkgif);
    }
    div.style.background = `url(${frameLink}) no-repeat`

  }

  initBackGroundData = (data) => {
    this.setState({
      backgroundGif: data.backgroundGif,
      backgroundVideo: data.backgroundVideo
    })
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
      //  console.log('onmouseenter')
       div.getElementsByTagName('img')[0].src = linkGif
       
     };
     div.ontouchstart = function (e) {
       e.preventDefault();
      //  console.log('touchstart')
       div.getElementsByTagName('img')[0].src = linkGif
     };

     div.onmouseleave = function (e) {
       e.preventDefault();
      //  console.log('onmouseleave')
       div.getElementsByTagName('img')[0].src = linkImg
     };
     div.ontouchend= function (e) {
       e.preventDefault();
      //  console.log('ontouchend')
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
 addVideoSafari = ( linkVideo = 'https://ipfs.pantograph.app/ipfs/QmWy8vRGgucQLrVcCK5Xdai31PNCJzxr44vUNY5RC8aTAD?filename=red-velvet-psycho-mv-teaser%20(1).mp4', currentDiv) => {
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
   data-setup='{"controlBar": {"pictureInPictureToggle": false, "liveDisplay" : true}}'>
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
    iframe.controlsList = 'nodownload'
    iframe.disablePictureInPicture = true
    iframe.onContextMenu = 'return false;'
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

  renderBackground = () => {
    const { isLoading, dataInput = ''} = this.props
   
      if (isLoading) {
      return null
    } else {
        let backgroundGif =  "https://ipfs.pantograph.app/ipfs/QmNSG5fFLP1dpfuSFaY8EDWSqSZW6JYAmEEvKrSKQNoR6y?filename=Background_basketball.gif",
          backgroundVideo ="https://ipfs.pantograph.app/ipfs/QmPYJ525yBEBVQ7ACpY3A9A2HQhYLbQQnDukfFoeMv9vyX?filename=Comp 1.mp4"
        console.log('dataInput', dataInput)
      if (this.checkSafari()) {
        return (<img src={backgroundGif} id="myBackground" alt="">
        </img> )
      } else {
        return (<video autoPlay muted loop id="myVideo">
          <source src={backgroundVideo} type="video/mp4" />
        </video>)
      }
    }
  }



  render () {
    const { isLoading } = this.props
  return (
    <div className="App">
      <div className="wrapper">
      <div className={isLoading ? 'wrapper-none-display' : 'wrapper-display' }>
        {this.renderBackground()}
            <p className="learn">
            </p>
            <article className="viewport">
              <section className="cube">
                <div className="face" id='face1'></div>
                <div className="face" id='face2'></div>
                <div className="face" id='face3'></div>
                <div className="face" id='face4'></div>
                <div className="face" id='face5'></div>
                <div className="face" id='face6'></div>``
              </section>
            </article>
          </div>
          </div>
    </div>
  );
  }
}

export default App;
