// material-ui
import { Typography, Grid, Paper, Card, Button } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import MainLayout from 'views/MainLayout';
import CustomizedButton from 'components/button';
// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
    const theme = useTheme();
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.prep,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.primary.main
    }));
    return (
        <MainLayout>
            <CustomizedButton>cuatomises</CustomizedButton>
            <Typography variant="h1">
                Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers ete
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={12}>
                    <Item>xs=12</Item>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Item>xs=6</Item>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Item>xs=6</Item>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Item>xs=3</Item>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Item>xs=3</Item>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Item>xs=2</Item>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Item>xs=2</Item>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Item>xs=1</Item>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Item>xs=1</Item>
                </Grid>
                <Button>hello2</Button>
            </Grid>
            <Card sx={{ bgcolor: theme.palette.primary, m: 20 }}>
                <Item>its a card</Item>
                <Typography variant="prep">hello Button</Typography>
            </Card>
        </MainLayout>
    );
};

export default SamplePage;
