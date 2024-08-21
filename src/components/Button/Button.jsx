import './Button.css';

// eslint-disable-next-line react/prop-types
export const Button = ({text}) => {
    return (
        <button className = 'button'>{text}</button>
    )
}
