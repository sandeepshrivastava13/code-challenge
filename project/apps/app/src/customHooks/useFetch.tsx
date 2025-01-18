import axios from "axios";
import { useEffect, useState } from "react";
import {useDispatch} from 'react-redux';
import { addPokemonList } from "../features/pokemon/pokemonSlice";


interface Pokemon {
    name: string;
    url: string;
  };

export default function useFetch(url: string) {
  const [data, setData] = useState<Pokemon[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    async function getPokemonData() {
      try {
        const response = await axios(url);
        setLoading(false);
        setData(response.data?.results);
      } catch (err: any) {
        setLoading(false);
        setError(err?.message);
      }finally{
        setLoading(false)
      }
    }
    getPokemonData();
  }, [url]);

  return [data,error,loading];
}
