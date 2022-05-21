import { Box, Button, Checkbox, styled} from "@mui/material"


const styledItems = [
    'style prop', // div, checkbox, button
    'system props', // Box, Checkbox, Button
    'sx prop', // Box, Checkbox, Button
    'styled component', // div, checkbox, button
    'tailwind css' // div, checkbox, button
]

function StyleProp() {
    return(
      <div style={{
          display: 'grid',
          gridTemplateColumns:'1fr 2fr 1fr',
          padding: '8px',
          margin: '16px',
          border: "solid red",
          justifyItems:'center'
      }}>
          <input type="checkbox" />
          {styledItems[0]}
          <button
           type="submit"
           style={{
               height:'30px',
               width:'60px',
               backgroundColor:'#1976d2',
               color:'white',
               borderRadius:'8px'
           }}
           >
               click
          </button>
      </div>
    )
}

function SystemProps() {
    return(
        <Box
        display='grid'
        gridTemplateColumns='1fr 2fr 1fr'
        p={1}
        m={4}
        border="solid yellow"
        justifyItems='center'
    >
        <Checkbox/>
            {styledItems[1]}
        <Button
            variant="outlined">
            click
        </Button>
    </Box>
    )
}

function SxProps() {
    return(
        <Box
        sx={{
            display:'grid',
            gridTemplateColumns:'1fr 2fr 1fr',
            p:1,
            m:2,
            border:"solid black",
            justifyItems:'center'
        }}
    >
        <Checkbox/>
        {styledItems[2]}
        <Button
            variant="contained">
            click
        </Button>
    </Box>
    )
}

function StyledComponent() {
    const MyDiv = styled(Box)({
        display: 'grid',
        gridTemplateColumns:'1fr 2fr 1fr',
        padding: '8px',
        margin: '40px',
        border: "solid blue",
        justifyItems:'center'
    })
    const MyButton = styled(Button)({
        variant:"contained",
        height:'42px',
        width:'100px',
        backgroundColor:'black',
        color:'white',
        borderRadius:'8px'
    })

    return(
      <MyDiv>
          <Checkbox/>
          {styledItems[3]}
          <MyButton>
              click
              </MyButton>
      </MyDiv>

  )
}

function TailWindCss() {
    return(
        <div className="grid grid-cols-3 p-4 m-8 items-center justify-items-center border border-black border-solid ">
        <input type="checkbox" />
        {styledItems[4]}
        <button 
            type="submit"
            className="text-white bg-red-500 h-8 w-20 rounded"
            >
            click
        </button>
    </div>
    )
}


export default function Style() {
    return(
        <>
            <StyleProp/>
            <SystemProps/>
            <SxProps/>
            <StyledComponent/>
            <TailWindCss/>
        </>
    )

} 