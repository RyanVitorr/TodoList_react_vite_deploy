
import './FilterStyle.css';

const Filter = ({ filter, setFilter, setOrd }) => {
  return (
    <div className='filter-div-principal'>
        <h3>Filtros:</h3>
        <div className='filtros-container'>
            <div className='div-select'>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todos</option>
                    <option value="Completed">Completos</option>
                    <option value="Incomplete">Incompletos</option>
                </select>
            </div>

            <div className='ordem-alfabetica'>
                <button onClick={() => setOrd("Asc")}>Asc</button>
                <button onClick={() => setOrd("Desc")}>Desc</button>
            </div>
        </div>
    </div>
  )
};

export default Filter;