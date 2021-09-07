import Header from './Header.js'
import InputContainer from './InputContainer.js';
import React from "react";
import EmpTable from './EmpTable.js';
import API from '../utils/API.js';


class Main extends React.Component {

    state = {
        sortChoice: '',
        filterChoice: '',
        results:[],
        base_results:[]
    };

 // When this component mounts, search the randomuser API for 10 users
 componentDidMount() {
    this.searchAPI("&results=10");
  }

  searchAPI = query => {
    API.search(query)
      .then(res => {
        //   console.log(res.data.results);
          this.setState({ results: res.data.results, base_results: res.data.results })})
      .catch(err => console.log(err));
  };

  handleSortChange = event => {
      console.log('sort change function');
    //   console.log(event.target.value)
      const value = event.target.value;
      this.setState({
          sortChoice: value, 
          base_results: this.state.results
      })

      this.state.results.sort(function(a,b) {
          if(event.target.value==='last') {
                if (a.name.last > b.name.last) {
                    return 1;
                } else if (a.name.last < b.name.last) {
                    return -1;
                } return 0;
            } else if (event.target.value==='zipcode') {
                if (a.location.postcode > b.location.postcode) {
                    return 1;
                } else if (a.location.postcode < b.location.postcode) {
                      return -1;
                }  return 0;
            } else {
                if (a[event.target.value] > b[event.target.value]) {
                    return 1;
                } else if (a[event.target.value] < b[event.target.value]) {
                      return -1;
                }  return 0;
            }

        })
    };

    handleFilterChange = event => {
        console.log('filter change function');
        console.log(this.state.base_results);
        const value_filter = event.target.value;
        this.setState({
            filterChoice: value_filter,
            results: this.state.base_results
        }, this.filterData(event))
        // this.filterData(event);
    }

    filterData(event) {
        console.log('filterData function called')
        console.log(event.target.value)
        console.log(this.state.results)
        if (event.target.value==='female') {
            const filteredArray = this.state.results.filter(gender => gender.gender === 'female');
            console.log(filteredArray)
            this.setState({results: filteredArray}, this.callBack);
        } else if (event.target.value==='male') {
            console.log(this.state.results);
            const filteredArray = this.state.results.filter(gender => gender.gender === 'male');
            console.log(filteredArray)
            this.setState({results: filteredArray}, this.callBack)
        } else {
            this.setState({results: this.state.base_results});
        }
    }

    callBack() {
        console.log(this.state.results);
        return;
    }
  
    render() {
        console.log(this.state.results);
        return (
            <div className='container d-flex flex-column'>
              <Header />
              <InputContainer handleSortChange={this.handleSortChange} handleFilterChange={this.handleFilterChange}/>
              <EmpTable results={this.state.results}/>
            </div>
        );

    }

}

export default Main;