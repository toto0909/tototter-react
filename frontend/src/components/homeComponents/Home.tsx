import React from 'react'
//MUI
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from '@mui/system/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
//react-router-dom
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
//CSS
import styles from './Home.module.css';
//画像
import ningyo from "../../assets/img/kawa.jpg"

//CSS in js
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

//List画面遷移Link用Style定義
const ListLink = styled(Link)`
    text-decoration: none;
`;

const Home:React.FC = () => {
    return (
        <>
            {/* 検索領域 */}
            <Container maxWidth='md'>
                <Box component="section" sx={{ p: 4, border: '1px dashed grey'}}>
                    検索領域
                </Box>
            </Container>

            {/* メニューカード領域 */}
            <Container className={styles.card_area} maxWidth='md'>
                <Grid container rowSpacing={1} columnSpacing={2}>
                    {/* 全人形データ一覧画面遷移カード SP...縦並び, TB...横2列, その他...横3列 */}
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                        <ListLink to="/list" state={{ list_type: "ningyo" }}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image={ningyo}
                                    alt="green iguana"
                                    />
                                    <CardContent className={styles.card_text}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            <span className={styles.card_text}>人形一覧</span>
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            全人形の詳細プロフィール情報
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </ListLink>
                    </Grid>
                    {/* 全軍団データ一覧画面遷移カード SP...縦並び, TB...横2列, その他...横3列 */}
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                        <ListLink to="/list" state={{ list_type: "team" }}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image={ningyo}
                                    alt="green iguana"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        軍団一覧
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        全7軍団の兵力・統制関係データ
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </ListLink>
                    </Grid>
                    {/* 全地理データ一覧画面遷移カード SP...縦並び, TB...横2列, その他...横3列 */}
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                        <ListLink to="/list" state={{ list_type: "geography" }}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image={ningyo}
                                    alt="green iguana"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        地理データ
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        全15州/全都市の詳細データ
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </ListLink>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Home