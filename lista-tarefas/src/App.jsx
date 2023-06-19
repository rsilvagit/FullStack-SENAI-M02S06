import Task from './components/Task';
import React from 'react'
import ToDo from './components/ToDo'

function App() {
  const tasks = ['Reunião Condominio Jardim Zona Sul', 'Vistoria Condominio Nonoai', 'Vistoria Condominio Petropólis','Vistoria Canoas'];
  return (
    <div>
      <h1 className='text-center mt-5'>Título</h1>
      <ToDo tasks={tasks}/>
    </div>
    
  )
};

export default App
