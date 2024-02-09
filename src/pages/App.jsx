import { useState } from 'react';

import {Wrapper} from '../componentes/styledcomponents/Wrapper.style';

import {Section} from '../componentes/styledcomponents/Section.style';

import List from '../componentes/list/List';
import AddTarefa from '../componentes/addlist/AddTarefa';
import Search from '../componentes/search/Search';
import Filter from '../componentes/filter/Filter';

import './App.css'


function App() {

  const [list, setList] = useState([
    {
      id: 1,
      title: "Iniciar um novo projeto",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Fazer um lanche",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      title: "finalizar o novo projeto",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState(""); 
  const [filter, setFilter] = useState("All");
  const [ord, setOrd] = useState("Asc");

  const addList = (title, category) => {
    const newList = [...list, {
      id: Math.floor(Math.random() * 500),
      title,
      category,
      isCompleted: false,
    },];

    setList(newList);
  };

  const removeLista = (id) => {
    const newList = [...list];
    const filteredList = newList.filter(list => list.id !== id ? list : null);
    setList(filteredList);
  };

  const completeList = (id) => {
    const newList = [...list];
    newList.map((list) => list.id === id ? list.isCompleted = !list.isCompleted : list);  
    setList(newList);
  };

  return (
    <main>
      <Wrapper>
        <section>
          <Search search={search} setSearch={setSearch}/>

          <Filter filter={filter} setFilter={setFilter} setOrd={setOrd}/>
        </section>
        <List key={list.id} list={list} removeLista={removeLista} completeList={completeList} search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} ord={ord} setOrd={setOrd}/>
        <AddTarefa addList={addList} />
      </Wrapper>
    </main>
  )
}

export default App;
