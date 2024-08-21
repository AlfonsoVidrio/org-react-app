import './TextField.css';

/* eslint-disable react/prop-types */
export const TextField = ({title, placeholder, required, value, setValue}) => {

    const handleInputChange = ( event ) => {
        setValue(event.target.value)
    }

    return (
        <div className='text-field'>
            <label>{title}</label>
            <input 
                type="text" 
                placeholder={`${placeholder}...`} 
                value={value} 
                required={required}
                onChange={handleInputChange}
                />
        </div>
    )
}