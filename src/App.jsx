import './App.css';
import { v4 as uuid } from 'uuid';
import { Footer } from './components/Footer/Footer.jsx';
import { Form } from './components/Form/Form.jsx';
import { Header } from './components/Header/Header.jsx';
import { MyOrg } from './components/MyOrg/MyOrg.jsx';
import { Team } from './components/Team/Team.jsx';
import { useState } from 'react';

export const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [collaborators, setCollaborators] = useState([{
    id: uuid(),
    team: 'Front End',
    photo: 'https://avatars.githubusercontent.com/u/154586838?v=4',
    name: 'Alfonso Vidrio',
    position: 'Desarrollador Front End',
    fav: false
  }]);
  const [ teams, setTeams ] = useState([
    {
      id: uuid(),
      title: "Programación",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9"
    },
    {
      id: uuid(),
      title: "Front End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF"
    },
    {
      id: uuid(),
      title: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2"
    },
    {
      id: uuid(),
      title: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8"
    },
    {
      id: uuid(),
      title: "UX y Diseño",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5"
    },
    {
      id: uuid(),
      title: "Móvil",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9"
    },
    {
      id: uuid(),
      title: "Innovación y Gestión",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF"
    },

  ])

  const toggleVisibility = () => {
    setShowForm(!showForm)
  }

  const registerCollaborator = (collaborator) => {
    // Spread operator
    setCollaborators([ ...collaborators, {...collaborator, id:uuid()}])
  }

  const removeCollaborator = ( id ) => {
    const newCollaborators = collaborators.filter( (collaborator) => collaborator.id !== id);
    setCollaborators(newCollaborators)
  }

  const updateTeamColor = (color, id) => {
    const updatedTeams = teams.map( (team) => {
      if (team.id === id){
        team.primaryColor = color;
      }

      return team;
    })

    setTeams(updatedTeams);
  }

  const createTeam = (newTeam) => {
    setTeams([...teams, {...newTeam, id:uuid()}])
  }

  const like = ( id ) => {
    const updatedCollaborators = collaborators.map((collaborator) => {
      if(collaborator.id == id){
        collaborator.fav = !collaborator.fav
      }
      return collaborator;
    })

    setCollaborators(updatedCollaborators)
  }

  return (
    <div className='container'>
      <Header />
      <main>
        {/* {showForm ? <Form />: <></>} */}
        <MyOrg toggleVisibility={toggleVisibility} />
        {
          showForm && <Form
            titles={teams.map((team) => team.title)}
            registerCollaborator={registerCollaborator}
            createTeam={createTeam}
          />
        }

        {teams.map((team, index) => <Team
          team={team}
          key={index}
          collaborators={collaborators.filter(collaborator => collaborator.team === team.title)}
          removeCollaborator={removeCollaborator}
          updateTeamColor={updateTeamColor}
          like={like}
        />)}

      </main>
      <Footer />
    </div>
  );
}
