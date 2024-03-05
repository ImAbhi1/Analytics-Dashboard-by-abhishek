import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Typography, ButtonBase } from '@mui/material';
import index from '../Scroller/index.css';
function Scroller(props) {
    var items = [
        {
            image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // replace with your image URL
        },
        {
            image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxkYXRhJTIwYW5hbHlzaXN8ZW58MHx8MHx8fDA%3D' // replace with your image URL
        },
        {
            image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHxkYXRhJTIwYW5hbHlzaXN8ZW58MHx8MHx8fDA%3D' // replace with your image URL
        },
        {
            image: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxkYXRhJTIwYW5hbHlzaXN8ZW58MHx8MHx8fDA%3D' // replace with your image URL
        },
        {
            image: 'https://images.unsplash.com/photo-1644325349124-d1756b79dd42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjExfHxkYXRhJTIwYW5hbHlzaXN8ZW58MHx8MHx8fDA%3D'
        },
        {
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMGFuYWx5c2lzfGVufDB8fDB8fHww' // replace with your image URL
        },
        {
            image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGF0YSUyMGFuYWx5c2lzfGVufDB8fDB8fHww' // replace with your image URL
        }
    ];

    return (
        <Carousel>
            {items.map((item, i) => (
                <Item key={i} item={item} />
            ))}
        </Carousel>
    );
}

function Item(props) {
    return (
        <Paper>
            <ButtonBase component="a" className="image-container" href="#image-gallery">
                <img src={props.item.image} alt="random" className="img" />
            </ButtonBase>
        </Paper>
    );
}

export default Scroller;
