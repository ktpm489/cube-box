import logo from './logo.svg';
import './App.css';
import { Component} from 'react'
import 'prevent-pull-refresh';
import ReactDOM from "react-dom";
import CubeBox from './CubeBox'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      dataInput: null,

    }
  }

  async componentDidMount() {
    this.setState({ isLoading: true })
    try  {
    let data = await this.getDataInfoConfig()
      if (data && data.others){
        let dataInput = JSON.parse(data.others.sample1_data)
        console.log('dataInput', dataInput)
        this.setState({ isLoading: false, dataInput: dataInput })
      } else {
        this.setState({ isLoading: true })
      }
    }catch(e) {
      this.setState({ isLoading: false })
    }
   
  }

  componentWillUnmount() {
    this.updateSize && window.removeEventListener('resize',this.updateSize)
  }


  getDataInfoConfig = async () => {
    let response = await fetch('https://dev-api.pantograph.app/setting')
    let responeJson = await response.json()
    return responeJson
  }


  render () {
    const { isLoading, dataInput } = this.state
  return (
    <div className="AppDataContainer">
      { <CubeBox isLoading={isLoading} dataInput={dataInput} /> }
    </div>
  );
  }
}

export default App;
