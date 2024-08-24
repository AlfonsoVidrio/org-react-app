import { useState } from 'react';
import { Field } from '../Field/Field.jsx';
import { ListOptions } from '../ListOptions/ListOptions.jsx';
import { Button } from '../Button/Button.jsx';
import './Form.css';

// eslint-disable-next-line react/prop-types
export const Form = ({ titles, registerCollaborator, createTeam }) => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [photo, setPhoto] = useState('');
    const [team, setTeam] = useState('');

    const [title, setTitle] = useState('');
    const [color, setColor] = useState('#000');

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

    const handleSubmitTeam = ( event ) => {
        event.preventDefault()
        createTeam({title, primaryColor: color})
    }

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

                <Field 
                    title='Nombre' 
                    placeholder='Ingresar nombre' 
                    required 
                    value={name} 
                    setValue={setName}
                />

                <Field 
                    title='Puesto' 
                    placeholder='Ingresar puesto' 
                    required
                    value={position} 
                    setValue={setPosition}
                />

                <Field 
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
            <form onSubmit={handleSubmitTeam}>
                <h2>Rellena el formulario para crear el equipo.</h2>

                <Field 
                    title='Titulo' 
                    placeholder='Ingresar titulo' 
                    required 
                    value={title} 
                    setValue={setTitle}
                />

                <Field 
                    title='Color' 
                    placeholder='Ingresar el color en HEX' 
                    required
                    value={color} 
                    setValue={setColor}
                    typeInput='color'
                />

                <Button text='Registrar equipo' />
                </form>
        </section>
    );
};
