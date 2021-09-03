import Header from './Header.js'
import InputContainer from './InputContainer.js';
import React from "react";
import EmpTable from './EmpTable.js';
import API from '../utils/API.js';


class Main extends React.Component {

    state = {
        sortChoice: '',
        results:[]
    };

 // When this component mounts, search the randomuser API for 10 users
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

  handleSortChange = event => {
      console.log('sort change function');
      console.log(event.target);
      console.log(event.target.value)
      const value = event.target.value;
      this.setState({
          sortChoice: value, 
      })
      this.state.results.sort(function(a,b) {
          if (a[event.target.value] > b[event.target.value]) {
              return 1;
            } else if (a[event.target.value] < b[event.target.value]) {
                return -1;
            }  return 0;
        })
    };

  
    render() {
        return (
            <div className='container d-flex flex-column'>
              <Header />
              <InputContainer handleSortChange={this.handleSortChange}/>
              <EmpTable results={this.state.results}/>
            </div>
        );

    }

}

export default Main;