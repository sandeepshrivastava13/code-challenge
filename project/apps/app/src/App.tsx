import { List } from 'ui'
import {useEffect} from 'react';

import { useSelector,useDispatch } from 'react-redux';
import { fetchPokemonList } from './features/pokemon/pokemonSlice';


const api  = "https://pokeapi.co/api/v2/pokemon?limit=151"

const App = () => {

  const dispatch = useDispatch();

  const { pokemonList, loading, error } = useSelector((state) => state);


  useEffect(()=>{
    dispatch(fetchPokemonList(api))
  },[dispatch])


  if(error) return <h3>Something went wrong.</h3>

  if(loading) return <h3>Loading...</h3>

  return (
  <div className='App'>
    <h1>Pokemon list:</h1>
    <List list={pokemonList} />
  </div>
  )
}

export default App
