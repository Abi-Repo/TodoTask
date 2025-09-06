import React, { useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";


const Crud = () => {
    const [todo, setTodo] = useState([
      { id: 1, task: "react js", checked: true },
      { id: 2, task: "javascript", checked: true },
      { id: 3, task: "docker", checked: false },
      { id: 4, task: "kubernetes", checked: false },
    ]);


    //handles the input(for adding the input)
    const[input, setInput] = useState('')
    function handleinput(){
        if(button){
            let newListItems = todo.map((ele)=>{
                return ele.id === currentele ? {...ele, task : input} : ele
            })
            setTodo(newListItems)
            setCurrentele(null)
            setInput('')
            setButton(false)
        }else{
            setTodo([...todo, {id : todo.length+1, task : input, checked : false}])
            setInput('')
        }
    }

    
    //handles the add button
    const[button, setButton] = useState(false)
    function handlebutton(id){
        let findtask = todo.find((ele) => ele.id === id )
        setInput( findtask.task );
        setButton(true)
        setCurrentele(id)
    }
    
    //for the updation purpose
    const[currentele, setCurrentele] = useState(null)
    


    //this function handles the deletion part 
    function handledelete(id){
        setTodo(todo.filter((ele)=> ele.id !== id ))
    }
    
    //this is for the checked or unchecked 
    function checkoruncheck(id){
        setTodo(todo.map((ele)=> ele.id === id ? {...ele, checked : !ele.checked} : ele))
    }
    return (
    <div>
        <ul>
            <input type="text" placeholder='enter your task here' value={input} onChange={(e)=>setInput(e.target.value)} />
            <button onClick={handleinput}>{button ? 'save' : 'add'}</button>
            {
                todo.map((ele)=>{
                    return (
                      <li key={ele.id} className="task">
                        <input type="checkbox" checked={ele.checked}  onChange={()=>checkoruncheck(ele.id)}/>
                        <label>{ele.task}</label>
                        <MdModeEditOutline role='button' tabIndex={0} onClick={()=>{handlebutton(ele.id)}} />
                        <MdDeleteOutline role='button' tabIndex={0} onClick={()=>{handledelete(ele.id)}}/>
                      </li>
                    );
                })
            }
        </ul>
    </div>
  )
}

export default Crud




























