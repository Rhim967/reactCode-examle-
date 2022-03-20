import './SearchPanel.css'

function SearchPanel()  {
    return (
        <div class="search-pan">
            <input 
            type="text"
            className="form-control search-input"
            placeholder='find an emploee'/>

            <button 
            type="button" 
            class='search-btn btn btn-light'>
                search
            </button>
        </div>
    );
}


export default SearchPanel;
