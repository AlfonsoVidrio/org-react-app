import header from '/img/header.png';
import './Header.css';

export const Header = () => {
    return (
        <header className='header'>
            <img src={ header } alt='Org' />
        </header>
    )
}
