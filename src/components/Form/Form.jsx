import { useState } from 'react';
import { TextField } from '../TextField/TextField.jsx';
import { ListOptions } from '../ListOptions/ListOptions.jsx';
import { Button } from '../Button/Button.jsx';
import './Form.css';

// eslint-disable-next-line react/prop-types
export const Form = ({ titles, registerCollaborator }) => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [photo, setPhoto] = useState('');
    const [team, setTeam] = useState('');

    const defaultPhoto = '/img/profile.jpg';

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Verifica si la URL de la imagen es válida
        const isValidImage = await validateImageUrl(photo);
        const validPhoto = isValidImage ? photo : defaultPhoto;

        const collaborator = {
            name,
            position,
            photo: validPhoto,
            team
        };

        registerCollaborator(collaborator);
    };

    const validateImageUrl = (url) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = url;
             // La imagen se ha cargado correctamente
            img.onload = () => resolve(true);
            // Error al cargar la imagen
            img.onerror = () => resolve(false);
        });
    };
    

    return (
        <section className='form'>
            <form onSubmit={handleSubmit}>
                <h2>Rellena el formulario para crear el colaborador.</h2>

                <TextField 
                    title='Nombre' 
                    placeholder='Ingresar nombre' 
                    required 
                    value={name} 
                    setValue={setName}
                />

                <TextField 
                    title='Puesto' 
                    placeholder='Ingresar puesto' 
                    required
                    value={position} 
                    setValue={setPosition}
                />

                <TextField 
                    title='Foto'   
                    placeholder='Ingresar url de la foto' 
                    value={photo} 
                    setValue={setPhoto}
                />

                <ListOptions 
                    value={team} 
                    setValue={setTeam}
                    titles={titles}
                />

                <Button text='Crear' />
            </form>
        </section>
    );
};
