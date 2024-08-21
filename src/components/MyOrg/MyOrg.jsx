import './MyOrg.css';

// eslint-disable-next-line react/prop-types
export const MyOrg = ({toggleVisibility}) => {

    return (
        <section className='orgSection'>
            <h3 className='title'>Mi organización</h3>
            <figure className='img-container'>
                <img src="/img/add.png" alt="add" onClick={toggleVisibility}/>
            </figure>
        </section>
    )
}
