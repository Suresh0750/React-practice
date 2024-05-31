

function Student(promps){
    return(
        <div>
            <p>Name : {promps.name}</p>
            <p>age : {promps.age}</p>
            <p>stack : {promps.stack}</p>
            <p>Pass : {promps.isBoolean ? 'yes':'no'}</p>
            <hr />
        </div>
    )
}


export default Student