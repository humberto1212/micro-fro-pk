import { useEffect, useState } from 'react'
import { Pokemon } from '../types'

const PokemonList = () => {
    const [pkList, setPkList] = useState<Pokemon[] | null>(null)
 
        const fetchList = async() => {
            try{
                const response = await fetch('https://raw.githubusercontent.com/humberto1212/micro-fro-pk/main/mocks/pokemonList.json');
                
                if(!response.ok){
                    throw new Error('Request failed')
                }

                const jsonData = await response.json();

                setPkList(jsonData)

            }catch(Error){

            }
        }

    useEffect(() => {   
        fetchList()
    }, [])
    
    if(!pkList){
        <h1>Loading...</h1>
    }

  return (
   <>
    <ul>
        {
            pkList?.map(pk => {
                return (
                   <li style={{width: "100px", display: "flex",flexDirection: "column",alignItems: "center", listStyleType: "none", cursor: "pointer" }} key={pk.id}>
                        <label>{pk.name}</label>
                        <img style={{width: "80px" }} src={pk.sprite}/>

                   </li> 
                )
            } )
        }
    </ul>
   </>
  )
}

export default PokemonList