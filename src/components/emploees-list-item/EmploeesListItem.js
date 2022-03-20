import './EmploeesListItem.css'

function EmploeesListItem () {
     
    return (
        <li className='list-group-item d-flex justify-content-beetwen'>
            <span className='list-group-item-lable'>John Smith</span>
            <input 
            type="text"
            className="list-group-item-input" defaultValue="1000$"/>
            <div className="d-flex justify-content-center align-items-center">
                <button
                type='button'
                className='btn-cookie btn-small'>
                    <i className='fas fa-cookie'></i>
                </button>

                <button
                type='button'
                className='btn-trash btn-small'>
                    <i className='fas fa-trash'></i>
                </button>

            </div>
        </li>
    )
}


export default EmploeesListItem;
