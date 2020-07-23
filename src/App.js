import React from 'react';


// Import Components


import {Cards, Chart, CountryPicker} from './components'; 

//Import CSS
import styles from './App.module.css';

//Import API
import {fetchData} from './api/index'


class App extends React.Component{ 
  
  state = {
    data: {},
  }

 async componentDidMount(){
  const fetchedData = await fetchData();
  
  this.setState({data : fetchedData});
}

render(){
  const{data} = this.state;
  return (
    <div className = {styles.container}>
    <Cards data={data}/>
    <Chart/>
    <CountryPicker/>
    </div>
  )
}
}
export default App;
