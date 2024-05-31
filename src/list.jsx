

function List(){

    const fruits = ["apple","orange","watermelan","banana","Mango"]

    const listofFruits = fruits.map((val,i)=>{
        return <li key={i} >{val}</li>
    })
    const sports = [
        {id:1,name:"football",range:96},
        {id:2,name:"cricket",range:94},
        {id:3,name:"basketball",range:93},
        {id:4,name:"Tennies",range:92},
        {id:5,name:"kokko",range:91},
        {id:6,name:"valiball",range:99},
    ]
    sports.sort((a,b)=>{
        // return a.name.localeCompare()-b.name.localeCompare()
        return a.range-b.range
    })

    const sportOfList = sports.map((val)=>{
        return <li key = {val.id}>{val.name} : <b>{val.range}</b> </li>
    })
    const filterSports = sports.filter((val)=>{

        if(val.id>95){
            return <li key={val.id}>{val.name} : {val.range}</li>
        }
    })
    const lang = [{prev : "HTML", fullform:"Hyper Text Markup Language"},{prev : "CSS", fullform:
        "Caste Cading Style Sheets"
    },{prev : "JS" , fullform : "Javascript"},{prev : 'Rs', fullform : "React js"}]

    const langOflist = lang.map((val,i)=>{
        return <>
        <dl key={i}>{val.prev}</dl>
        <dt>{val.fullform}</dt>
        </>
    })
    return(
        <>
        <h2>Fruits</h2>
        <ul>{listofFruits}</ul>
        <h2>Sports</h2>
        <ol>{sportOfList}</ol>
        <h2>Rang filter</h2>
        <ul>{filterSports}</ul>

        <h2>Language</h2>
        {langOflist}
        </>
    )
}

export default List