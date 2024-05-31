
import Header from './header'
import Student from './student'
import Footer from './footer'
import Food from './food'
import Card from './card'
import Button from './button'
import Button1 from './button/button1'
import  Button3 from './button3'
import UserGreeting from './userGreeting'
import List from './list'
import ListUsePromps from './listtry1'
import Navbar from './nav.jsx'
function App(){
    const department = [
      {id:1,department:"MECH"},
      {id:2,department:"CSC"},
      {id:3,department:"ECE"},
      {id:4,department:"IT"},
      {id:5,department:"CIVIL"}
    ]
    return (
      <>
      <Navbar/>
      <Header/>
      <Student name="suresh" age={21} stack="MERN Stack" isBoolean={true}/>
      <div className='card-container'>
        <Card name= "Suresh" stack="MERN Stack Developer" about="I am a MERN stack developer at zoho"/>
        <Card name="Suresh" stack="MERN Stack Developer" about="I am a MERN stack developer at zoho"/>
        <Card name="Suresh" stack="MERN Stack Developer" about="I am a MERN stack developer at zoho"/>
        <Card name="Suresh" stack="MERN Stack Developer" about="I am a MERN stack developer at zoho"/>
        <Card name="Suresh" stack="MERN Stack Developer" about="I am a MERN stack developer at zoho"/>
        <Card />
      </div>
      <Food/>
      <Button1></Button1>
      <Button/>
      <Button3 />
      <UserGreeting/>
      <UserGreeting name = "Pranav" isLoggedIn={true}/>
      <List />
    {department.length &&  <ListUsePromps itmes={department} categories="Department"/> } 
    <ListUsePromps itmes={department} categories="Department"/>
      <Footer/>
      </>
    )
} 

export default App


