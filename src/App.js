// import { ThemeProvider } from '@mui/material/styles';
// import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'routes';

// defaultTheme
// import themes from 'themes';

// project imports
// import NavigationScroll from 'components/NavigationScroll';
import Dashboard from 'views/Dashboard';

// ==============================|| APP ||============================== //

const App = () => {
    return (
        // <StyledEngineProvider injectFirst>
        //     <ThemeProvider theme={themes()}>
        //         <CssBaseline />
        //         <NavigationScroll>
        //             <Routes />
        //         </NavigationScroll>
        //     </ThemeProvider>
        // </StyledEngineProvider>
        <Dashboard />
    );
};

export default App;
