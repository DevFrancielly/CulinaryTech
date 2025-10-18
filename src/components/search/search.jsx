import "./styles.css";
import { Search } from 'lucide-react';

export function SearchBar() {
    return (
        <div className="search-container">
            <Search className="search-icon" />
            <input type="text" className="search-input" placeholder="Search recipes..." />
        </div>
    )
}
export default SearchBar