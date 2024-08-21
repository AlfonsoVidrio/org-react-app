import { useState } from 'react';
import './App.css';
import { Form } from './components/Form/Form.jsx';
import { Header } from './components/Header/Header.jsx';
import { MyOrg } from './components/MyOrg/MyOrg.jsx';

export const App = () => {
  const [showForm, setShowForm] = useState(true);

  const toggleVisibility = () => {
    setShowForm(!showForm)
  }

  return (
    <div>
      <Header />
      { showForm && <Form /> }
      {/* {showForm ? <Form />: <></>} */}
      <MyOrg toggleVisibility={toggleVisibility} />
    </div>
  );
}
