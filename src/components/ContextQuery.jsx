import { Box,Paper, Typography } from "@mui/material";
import { useQuery } from "react-query";

export default function GetRequest(){
    const {isInitialized} = useContextOnPage();
    console.log(`Status ${isInitialized}`);
    const {isLoading, error, data } = useQuery('facts',() => 
    fetch('https://cat-fact.herokuapp.com/facts')
    .then(res => res.json()).then(result => result.value),
     {enabled:isInitialized} )
     console.log(data);
        if (isLoading) return 'Loading...'
        if (error) return (`An error has occurred: ${error.message}` )
    return(
        <Box sx={{display:'flex', justifyContent:'center'}} >
            <Paper >
                <Typography
                    m={6}
                    >
                      {data}
                    --- New ---
                </Typography>
            </Paper>
        </Box>
    )

}