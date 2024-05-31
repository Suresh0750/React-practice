import propTypes from 'prop-types'

function UserGreeting(promps){
    const wellcomeMessage = <h2 className="wellcome-message"> Welcome {promps.name} </h2>
    const loginPrompt = <h2 className="login-prompt">Please login to continue</h2>
    return(
        (promps.isLoggedIn ? wellcomeMessage : loginPrompt)
    )
}

UserGreeting.propTypes = {
    name : propTypes.string,
    isLoggedIn : propTypes.bool
}

UserGreeting.defaultProps = {
    name : 'suresh',
    isLoggedIn : false
}
 export default UserGreeting;