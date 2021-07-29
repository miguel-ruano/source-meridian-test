import { useState } from "react"

export default function SearchBar({ search, goToSearch, buttonTitle, barTitle }) {
    const [localSearch, setLocalSearch] = useState(search)
    const handleSearch = (event) => {
        goToSearch(localSearch)
    }
    return (
        <div className="__search_bar_component">
            <h3 className="title has-text-primary">{barTitle}</h3>
            <div className="block">
                <div className="field is-grouped">
                    <div className="control is-expanded">
                        <input className="input" type="text" value={localSearch} onChange={e => setLocalSearch(e.target.value)} />
                    </div>
                    <div className="control">
                        <button className="button is-primary" type="button" onClick={e => handleSearch(e)}>{buttonTitle}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}