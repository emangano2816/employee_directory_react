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
        this.searchAPI("&results=25");
    }
    //search randomUser API
    searchAPI = query => {
        API.search(query)
        .then(res => {
            this.setState({ results: res.data.results, base_results: res.data.results })})
        .catch(err => console.log(err));
    };
    //handle change to sort drop-down
    handleSortChange = event => {
        console.log('sort change function');
        const value = event.target.value;
        this.setState({
            sortChoice: value, 
            base_results: this.state.results
        })
        //sort data by selected drop-down value
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

    //handle change to filter drop-down
    handleFilterChange = event => {
        console.log('filter change function');
        const value_filter = event.target.value;
        this.setState({
            filterChoice: value_filter,
        })
        this.filterData(event);
    }

    //filter by gender
    filterData(event) {
        console.log('filterData function called')
        if (event.target.value==='female') {
            const filteredArray = this.state.base_results.filter(gender => gender.gender === 'female');
            this.setState({results: filteredArray});
        } else if (event.target.value==='male') {
            const filteredArray = this.state.base_results.filter(gender => gender.gender === 'male');
            this.setState({results: filteredArray})
        } else {
            this.setState({results: this.state.base_results});
        }
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