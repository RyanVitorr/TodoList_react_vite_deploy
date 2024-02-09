import React from 'react';
import './AddTarefaStyle.css';

import { useState } from 'react';

import { Section } from '../styledcomponents/Section.style';

const AddTarefa = ( {addList} ) => {

    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) return;
        addList(value, category);

        setValue("");
        setCategory("");
        
    };

  return (
    <Section>
        <div className='add-tarefa-titulo'>
            <h2>Criar Tarefa:</h2>
        </div>

        <div className='container-add'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Digite um título' value={value} onChange={(e)=>{setValue(e.target.value)}}/>
                
                <select value={category} onChange={(e)=>{setCategory(e.target.value)}}>
                    <option value="">Selecione uma categoría</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select> 
              
                <button type='submit'>Criar tarefa</button>
                
            </form>
        </div>
    </Section>
  )
};

export default AddTarefa;