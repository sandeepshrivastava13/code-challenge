import { useDispatch } from "react-redux"
import { removePokemon } from "../../../apps/app/src/features/pokemon/pokemonSlice"


interface Pokemon{
  name:string,
  url:string
}

interface ListProps {
 list:Pokemon[]
}


export const List = (props:ListProps) => {  

  const dispatch=useDispatch()
  
  return <div className="pokemon-list">
    {props.list.map((item:Pokemon,index:number)=>
    <div className="list-items" key={index}>
     <h4>{item.name}</h4>
     <button onClick={()=>dispatch(removePokemon(item.name))}>Delete</button>
    </div>)}
  </div>
}