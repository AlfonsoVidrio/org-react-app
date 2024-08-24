/* eslint-disable react/prop-types */
import { Collaborator } from '../Collaborator/Collaborator.jsx';
import './Team.css';
import hexToRgba from 'hex-to-rgba';

export const Team = ({ team, collaborators = [], removeCollaborator, updateTeamColor, like }) => {

    const { primaryColor, title, id } = team;

    const teamStyle = { backgroundColor: hexToRgba(primaryColor, 0.45)};
    const titleStyle = { borderColor: primaryColor };

    return (
        <>
            {collaborators.length > 0 &&
                <section className='team' style={teamStyle}>
                    <input 
                        type="color" 
                        className='input-color' 
                        value={primaryColor} 
                        onChange={(event) => {
                            updateTeamColor(event.target.value, id);
                        }}
                    />
                    <h3 style={titleStyle}>{title}</h3>
                    <div className='collaborators'>
                        {collaborators.map((collaborator, index) => <Collaborator
                            key={index}
                            collaborator={collaborator}
                            primaryColor={primaryColor}
                            removeCollaborator={removeCollaborator}
                            like={like}
                        />)}
                    </div>
                </section>
            }
        </>
    )
}