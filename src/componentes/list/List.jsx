import React from 'react';
import './ListStyle.css';

import { Section } from '../styledcomponents/Section.style';

const List = ({ list, removeLista, completeList, search, setSearch, filter, setFilter, ord }) => {
  return (
    <Section>
        <div className='lista-titulo'>
            <h1>Lista de Tarefas</h1>
        </div>

        <div className='todo-list'>
            {list.filter((list) => filter === "All" ? true : filter === "Completed" ? list.isCompleted : !list.isCompleted).filter((list) => list.title.toLowerCase().includes(search.toLowerCase())).sort((a, b) => ord === "Asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)).map((list) => (
                <div className='lista-card'>
                    <div className='content-card'>
                        <div className='title-category' style={{textDecoration: list.isCompleted ? "line-through" : ""}}>
                            <h4>{list.title}</h4>
                            <p className='category'>({list.category})</p>
                        </div>
      
                        <div className='bnt-card'>
                            <button onClick={() => completeList(list.id)}>Completar</button>
                            <button onClick={() => removeLista(list.id)}>X</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    </Section>
  )
};

export default List;