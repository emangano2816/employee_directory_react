import Header from './Header.js'
import InputContainer from './InputContainer.js';
import React from "react";
import EmpTable from './EmpTable.js';
import API from '../utils/API.js';


class Main extends React.Component {

    state = {
        results:[]
    };

 // When this component mounts, search the Giphy API for pictures of kittens
 componentDidMount() {
    this.searchAPI("&results=10");
  }

  searchAPI = query => {
    API.search(query)
      .then(res => {
          console.log(res.data.results);
          this.setState({ results: res.data.results })})
      .catch(err => console.log(err));
  };

  

    render() {
        return (
            <div className='container d-flex flex-column'>
              <Header />
              <InputContainer />
              <EmpTable results={this.state.results}/>
            </div>
        );

    }

}

export default Main;