import React from 'react'
import styles from './Header.module.css'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';

//List画面遷移Link用Style定義
const ListLink = styled(Link)`
    text-decoration: none;
`;

const Header:React.FC = () => {
    return (
        <header className={styles.header}>
            <Grid container rowSpacing={1} columnSpacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                    <ListLink to="/">
                        <span className={styles.headerText}>Ningyo Wiki</span>
                    </ListLink>
                </Grid> 
            </Grid>
        </header>
    )
}

export default Header