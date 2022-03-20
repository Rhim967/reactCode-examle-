import './App.css';
import AppInfo from './components/app-info/AppInfo'
import SearchPanel from './components/search-panel/SearchPanel'
import AppFilter from './components/app-filter/AppFilter'
import EmploeesList from './components/emploees-list/EmploeesList'


function App() {

  return (
    <div className="App">
        <AppInfo />
        <div className="search-panel-box">
            <SearchPanel />
            <AppFilter />
        </div>
        <EmploeesList />
    </div>
  );
}

export default App;
