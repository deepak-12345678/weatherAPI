import Search from './comp/search/search'
import './App.css';
// import 'react-app-polyfill/stable';
const handleOnSearchChange=(searchData)=>{
  console.log(searchData);
}
function App() {
  return (
    
    <div className="App">
      <Search onSearchChange={handleOnSearchChange}/>
    </div>
  );
}

export default App;