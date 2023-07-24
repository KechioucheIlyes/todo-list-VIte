import { useEffect, useState } from "react"
import picReact from "../assets/react.svg"
import picVite from "../../public/vite.svg"
export function Input(){
    

    const [inp , setinp] = useState()

    const [list , setList] = useState([])
    const [deleted , setDeleted] = useState(false)

    
    
    const keysup = (e) =>{
        
        
        setinp(e.target.value)
        


    }

    const add = ()=>{

        const randPics = Math.floor(Math.random() * 2)
        console.log(parseInt(randPics))
        const randTargetReact = "https://react.dev/"
        const randTargetVit = "https://vitejs.dev/"
        
        const listes = [...list]
        const date = new Date().getTime()
        listes.push({
            date , 
            inp, 
            randPics : randPics === 0 ?  picReact  : picVite, 
            randtarget : randPics === 0 ? randTargetReact : randTargetVit,
            
        })
        
        setList(listes)
       

        setDeleted(false)
        
        

        
    }

    const deleteById = (date)=>{
        
        console.log(date)
        const filtredList = list.filter(item => item.date !== date )
        console.log(filtredList)

        setList(filtredList);
        setDeleted(true)
        
        

    }

    useEffect(()=>{
        if (deleted){
            document.title = `supprimé !`
        }
        else{
            document.title = `Vite React`
        }
        
    }, )



    return(
        <div>
            <div className="inpt-btn-container ">
                <input onKeyUp={keysup} className="inpt-input"placeholder="Ex : Faire du vélo"></input>
                { inp ?   <button onClick={add} className="btn-input ">✓</button> : null}
            </div>
            
            
            {list.length===0 ?  null : list.map(el => 
            <ul className="card-container " 
                key={el.date}> 
                <li className="cards" > 
                    <a href={`${el.randtarget}`} target="_blank"> 
                        <img src={el.randPics}></img>
                    </a>  
                    {el.inp} 
                    <button onClick={()=> {deleteById(el.date)}} className="btn-input "> ❌ </button>
                </li> 
            </ul> ) }
        </div>
    )
}