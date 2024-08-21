import './Form.css';
import { useState } from 'react';
import { TextField } from '../TextField/TextField.jsx';
import { ListOptions } from '../ListOptions/ListOptions.jsx';
import { Button } from '../Button/Button.jsx';

export const Form = () => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [photo, setPhoto] = useState('');
    const [team, setTeam] = useState('');

    const handleSubmit = ( event ) => {
        event.preventDefault();
        let data = {
            name,
            position,
            photo,
            team
        }
        console.log(data);
    }

    return (
        <section className='form'>
            <form onSubmit={handleSubmit}>
                <h2>Rellena el formulario para crear el colaborador.</h2>

                <TextField 
                    title = 'Nombre' 
                    placeholder='Ingresar nombre' 
                    required 
                    value={name} 
                    setValue={setName}
                />

                <TextField 
                    title = 'Puesto' 
                    placeholder='Ingresar puesto' 
                    required
                    value={position} 
                    setValue={setPosition}
                />

                <TextField 
                    title = 'Foto'   
                    placeholder='Ingresar foto' 
                    required
                    value={photo} 
                    setValue={setPhoto}
                />
                
                <ListOptions 
                    value={team} 
                    setValue={setTeam}
                />

                <Button text='Crear' />
            </form>
        </section>
    )
}