import { Box } from "@mui/material";
import { useEffect,useState } from "react"


function useCustomHook(api) {
    const [chackFact,setChackFact] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [errors,setError] = useState([]);
    const [count,setCount] = useState(0);
    async function getText() {
        try {
            const response = await fetch(api);
            if (response.status === 200) {
                response.json()
                .then(data => { setChackFact(arr => [...arr,data]);
                    
                })
                .finally(()=>{
                    setIsLoading(false)
                })
            }
            else throw new Error(`Response status is ${response.status} ...`)
        } catch (error) {            
            setError(array=>[...array,error.message])
        }
     }
    useEffect(() => {
        setIsLoading(true)
        getText()
     }
     ,[count])
    return {isLoading,chackFact, errors, setCount }
}


export default function UseMyCustomHook(){
    const { isLoading,chackFact, errors, setCount } = useCustomHook('https://cat-fact.herokuapp.com/facts');
    return (
        <Box sx={{
            display: 'grid',
            direction: 'column',
            gap:1,
            p:4,
        }}>
        <p>
            Errors: {errors}
        </p>
        <p>
            {isLoading && 'Loading, wait ...'}
        </p>
        <button 
            type = 'button'
            onClick = {()=>{setCount(i => i + 1)}}>
                Click me, please
        </button>
        <div >
            {chackFact.map((fact) => 
            <div key={fact.id}
            style = {{
                    color: 'red',
                    p: 4,
                    }}>
            {fact.value}
            </div> 
             )}
        </div>
        </Box>
       )
}