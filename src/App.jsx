import './App.css';
import { Footer } from './components/Footer/Footer.jsx';
import { Form } from './components/Form/Form.jsx';
import { Header } from './components/Header/Header.jsx';
import { MyOrg } from './components/MyOrg/MyOrg.jsx';
import { Team } from './components/Team/Team.jsx';
import { useState } from 'react';

export const App = () => {
  const [showForm, setShowForm] = useState(true);
  const [collaborators, setCollaborators] = useState([{
    team: 'Front End',
    photo: 'https://avatars.githubusercontent.com/u/154586838?v=4',
    name: 'Alfonso Vidrio',
    position: 'Desarrollador Front End'
  }]);

  const toggleVisibility = () => {
    setShowForm(!showForm)
  }

  const registerCollaborator = (collaborator) => {
    // Spread operator
    setCollaborators([...collaborators, collaborator])
  }

  const removeCollaborator = ( collaborator ) => {
    console.log('Eliminar colaborador');
  }

  // Lista de equipos
  const teams = [
    {
      title:"Programación",
      primaryColor:"#57C278",
      secondaryColor:"#D9F7E9"  
    },
    {
      title:"Front End",
      primaryColor:"#82CFFA",
      secondaryColor:"#E8F8FF"  
    },
    {
      title:"Data Science",
      primaryColor:"#A6D157",
      secondaryColor:"#F0F8E2"  
    },
    {
      title:"Devops",
      primaryColor:"#E06B69",
      secondaryColor:"#FDE7E8"  
    },
    {
      title:"UX y Diseño",
      primaryColor:"#DB6EBF",
      secondaryColor:"#FAE9F5"  
    },
    {
      title:"Móvil",
      primaryColor:"#FFBA05",
      secondaryColor:"#FFF5D9"  
    },
    {
      title:"Innovación y Gestión",
      primaryColor:"#FF8A29",
      secondaryColor:"#FFEEDF"  
    },

]
  return (
    <div className='container'>
      <Header />
      <main>
      { 
        showForm && <Form  
          titles={teams.map((team) => team.title)}
          registerCollaborator={registerCollaborator}
        />
      }
      
      {/* {showForm ? <Form />: <></>} */}
      <MyOrg toggleVisibility={toggleVisibility} />
      
      {teams.map(( team, index ) => <Team 
        team={team}
        key={index} 
        collaborators={collaborators.filter( collaborator => collaborator.team === team.title)}
        removeCollaborator={removeCollaborator}
      />)}

      </main>
      <Footer />
    </div>
  );
}
