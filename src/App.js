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
    country: '',
  }

 async componentDidMount(){
  const fetchedData = await fetchData(country);
  
  this.setState({data : fetchedData});
}

handleCountryChange = async (country) => {
const fetchedData = await fetchData(country);

this.setState({ data: fetchedData, country: country }); 
//fetch the Data
// set the state
}

render(){
  const{data, country} = this.state;
  return (
    <div className = {styles.container}>
    <Cards data={data}/>
    <CountryPicker handleCountryChange = {this.handleCountryChange}/>
    <Chart data={data} country={country} />
    </div>
  )
}
}
export default App;
