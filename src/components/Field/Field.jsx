import './Field.css';

/* eslint-disable react/prop-types */
export const Field = ({title, placeholder, required, value, setValue, typeInput = 'text'}) => {

    const handleInputChange = ( event ) => {
        setValue(event.target.value)
    }

    return (
        <div className='field'>
            <label>{title}</label>
            <input 
                type={typeInput} 
                placeholder={`${placeholder}...`} 
                value={value} 
                required={required}
                onChange={handleInputChange}
                />
        </div>
    )
}