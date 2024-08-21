import './ListOptions.css';

// eslint-disable-next-line react/prop-types
export const ListOptions = ({value, setValue, titles=[]}) => {

    const handleOptionChange = ( event ) => {
        setValue( event.target.value )
        console.log(value);
    }

    return (
        <div className='listOptions'>
            <label>Equipos</label>
            <select value = {value} onChange={handleOptionChange}>
                <option value="" defaultValue="" disabled hidden>-- Selecciona tu equipo --</option>             
                {titles.map((title, index) => <option key={index} value={title}>{title}</option>)}
            </select>
        </div>
    )
}