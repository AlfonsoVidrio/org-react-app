import './ListOptions.css';

// eslint-disable-next-line react/prop-types
export const ListOptions = ({value, setValue}) => {

    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]

    const handleOptionChange = ( event ) => {
        setValue( event.target.value )
        console.log(value);
    }

    return (
        <div className='listOptions'>
            <label>Equipos</label>
            <select value = {value} onChange={handleOptionChange}>
                <option value="" defaultValue="" disabled hidden>-- Selecciona tu equipo --</option>              
                {equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
            </select>
        </div>
    )
}