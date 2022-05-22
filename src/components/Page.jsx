import{ Box } from '@mui/material';
import { createContext, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Context = createContext();
export const useContextOnPage = () => useContext(Context);

export default function Page({ sx, ...otherProps }) {
    const navigate = useNavigate();
    const navigateToLogin =() => navigate('/login', { replace: true});
    const [isInitialized, setIsInitialized] = useState(false);
    useEffect(() => {
      if (sessionStorage.token){
        api.setup(sessionStorage.token);
        setIsInitialized(true)
      } else {
        navigateToLogin();
      }
  }, []);
    return(
      <Context.Provider value={{isInitialized}}>
        <Box sx={{
             height: '100vh', 
             width: '100 vw',
            display: 'flex',
            flexDirection: 'column',
            ...sx,
        }}
        {...otherProps}
        />
        </Context.Provider>
    )
}