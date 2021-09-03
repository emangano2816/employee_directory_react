import Header from './Header.js'
import InputContainer from './InputContainer.js';
import React from "react";
import EmpTable from './EmpTable.js';
import API from '../utils/API.js';


class Main extends React.Component {

//     state = {
//         results:[]
//     };

//  // When this component mounts, search the Giphy API for pictures of kittens
//  componentDidMount() {
//     this.searchGiphy("results=5");
//   }

//   searchAPI = query => {
//     API.search(query)
//       .then(res => {
//           console.log(res);
//           this.setState({ results: res.data.data })})
//       .catch(err => console.log(err));

//   };

    render() {
        return (
            <div className='container d-flex flex-column'>
              <Header />
              <InputContainer />
              <EmpTable />
            </div>
        );

    }

}

export default Main;