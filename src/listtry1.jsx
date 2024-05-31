

import PropsTypes from 'prop-types'

function ListUsePromps(promps){

    let prompLi = promps.itmes.map((val,i)=>{
        return <li key={i}>id : {val.id} department : {val.department} </li>
    })

    return (
        <>
        <h2>{promps.categories}</h2>
        <ol>{prompLi}</ol>
        </>
    )

}

ListUsePromps.PropsTypes = {
    categories : PropsTypes.string,
    itmes : PropsTypes.arrayOf(PropsTypes.shape({
        id: PropsTypes.number,
        department : PropsTypes.string
    }))
}

ListUsePromps.defaultProps = {
    categories : "Department",
    itmes : []
}



export default ListUsePromps;