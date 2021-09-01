import Header from './components/Header.js'
import InputContainer from './components/InputContainer.js';
import EmpTable from './components/EmpTable.js';


function App() {
  return (
    <div className='d-flex flex-column'>
      <Header />
      <InputContainer />
      <EmpTable />
    </div>
  );
}

export default App;
