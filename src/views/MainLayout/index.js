// material-ui
import { styled } from '@mui/material/styles';

// ==============================|| AUTHENTICATION 1 WRAPPER ||============================== //

const MainLayout = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    minHeight: '100vh'
}));

export default MainLayout;