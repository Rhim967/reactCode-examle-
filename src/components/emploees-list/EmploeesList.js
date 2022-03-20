
import './EmploeesList.css'
import EmploeesListItem from '../emploees-list-item/EmploeesListItem'

function EmploeesList() {

    return (
        <ul class="app-list list-group">
            <EmploeesListItem />
            <EmploeesListItem />
            <EmploeesListItem />
        </ul>
    )
}


export default EmploeesList;
