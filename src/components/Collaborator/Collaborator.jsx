/* eslint-disable react/prop-types */
import "./Collaborator.css";

export const Collaborator = ({ collaborator = [], primaryColor, removeCollaborator }) => {
    const { name, position, photo } = collaborator;


    return (
        <div className="collaborator">
            <span onClick={removeCollaborator}>X</span>
            <div className="header" style={{backgroundColor: primaryColor}}>
                <img src={photo} alt={name} />
            </div>
            <div className="info">
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}