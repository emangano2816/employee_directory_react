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
        })
        console.log(this.state.results)
        this.sortData(event.target.value);

        if (this.state.filterChoice===''){
            return;
        } else {
            this.filterData(this.state.filterChoice, this.state.results);
        }
    };

    //sort by last name or email
    sortData(event) {
        console.log('sortData fuction called')
        console.log(this.state.results)
        console.log(this.state.sortChoice)
        this.state.results.sort(function(a,b) {
            if(event==='last') {
                if (a.name.last > b.name.last) {
                    return 1;
                } else if (a.name.last < b.name.last) {
                    return -1;
                } return 0;
            } else if (event==='zipcode') {
                if (a.location.postcode > b.location.postcode) {
                    return 1;
                } else if (a.location.postcode < b.location.postcode) {
                    return -1;
                }  return 0;
            } else {
                console.log('sort by email')
                if (a[event] > b[event]) {
                    return 1;
                } else if (a[event] < b[event]) {
                    return -1;
                }  return 0;
            }
        })
        console.log(this.state.results);
    };

    //handle change to filter drop-down
    handleFilterChange = event => {
        console.log('filter change function');
        const value_filter = event.target.value;
        this.setState({
            filterChoice: value_filter,
        })
        this.filterData(event.target.value, this.state.base_results);

        if (this.state.sortChoice==='') {
            return;
        } else {
            this.sortData(this.state.sortChoice);
        }
    }

    //filter by gender
    filterData(event, results) {
        console.log('filterData function called');
        console.log(event);
        if (event==='female') {
            const filteredArray = results.filter(gender => gender.gender === 'female');
            this.setState({results: filteredArray});
        } else if (event==='male') {
            const filteredArray = results.filter(gender => gender.gender === 'male');
            this.setState({results: filteredArray})
        } else {
            console.log(results)
            this.setState({results: this.state.base_results});
        }
    }
  
    render() {
        console.log(this.state.results);
        return (
            <div className='w-100'>
              <Header />
              <InputContainer handleSortChange={this.handleSortChange} handleFilterChange={this.handleFilterChange}/>
              <EmpTable results={this.state.results}/>
            </div>
        );

    }

}

export default Main;