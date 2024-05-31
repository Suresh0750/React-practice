
import ZohoImg from './assets/zoho.jpg'
import propTypes from 'prop-types'

function Card(card){
    return(
        
        <>
        <div className='Card'>
            <img className='card-img' src={ZohoImg} alt="" loading="lazy" />
            <h2 className='devName'>{card.name}</h2>
            <h2 className='card-title'>{card.stack}</h2>
            <p className="card-para">{card.about}</p>
        </div>
      
        </>

    )
}
// This propType we can mention for denoting datatypes 

Card.propTypes = {
    name : propTypes.string,
    stack : propTypes.string,
    about : propTypes.string
}

// Hear we can give value in defaultly

Card.defaultProps = {
    name : 'pranav',
    stack : 'MERN',
    about : 'He is software developer'
}
export default Card;
