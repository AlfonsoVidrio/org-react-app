/* eslint-disable react/prop-types */
import "./Collaborator.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";

export const Collaborator = ({ collaborator = [], primaryColor, removeCollaborator, like }) => {
    const { name, position, photo, id, fav } = collaborator;

    return (
        <div className="collaborator">
            <IoCloseCircle className="remove" onClick={() => removeCollaborator(id)}/>
            <div className="header" style={{backgroundColor: primaryColor}}>
                <img src={photo} alt={name} />
            </div>
            <div className="info">
                <h4>{name}</h4>
                <h5>{position}</h5>
                { fav ? <FaHeart color="red" onClick={() => like(id)}/> : <FaRegHeart onClick={() => like(id)}/>}
            </div>
        </div>
    )
}