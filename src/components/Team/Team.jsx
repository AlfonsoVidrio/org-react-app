/* eslint-disable react/prop-types */
import { Collaborator } from '../Collaborator/Collaborator.jsx';
import './Team.css';
export const Team = ({ team, collaborators = [], removeCollaborator }) => {

    const { primaryColor, secondaryColor, title } = team;

    const teamStyle = { backgroundColor: secondaryColor };
    const titleStyle = { borderColor: primaryColor };

    return (
        <>
            {collaborators.length > 0 &&
                <section className='team' style={teamStyle}>
                    <h3 style={titleStyle}>{title}</h3>
                    <div className='collaborators'>
                        {collaborators.map((collaborator, index) => <Collaborator
                            key={index}
                            collaborator={collaborator}
                            primaryColor={primaryColor}
                            removeCollaborator={removeCollaborator}
                        />)}
                    </div>
                </section>
            }
        </>
    )
}