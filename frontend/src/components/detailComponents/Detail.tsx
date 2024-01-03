import React from 'react'
import { useLocation } from "react-router-dom";
//型・定数設定
import Ningyo from '../../types';
import {teamTypeArray} from '../../const';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import styles from './Detail.module.css'
import Divider from '@mui/material/Divider';

//propsを受け取るNingyoObject型
interface NingyoObject{
    ningyoObject: Ningyo
}

const Detail:React.FC = () => {
    //ResultList.tsxから値を受け取る
    const location = useLocation();
    const { ningyoObject } = location.state as NingyoObject //受け取る人形オブジェクト
    console.log(ningyoObject)
    return (
        <>
                <Container maxWidth='md'>
                <h2 className={styles.ningyoName}>{ningyoObject.name}</h2>
                    <Grid container rowSpacing={1} columnSpacing={0}>
                        {/*概要用グリッド */}
                        <Grid item xs={12} sm={7} md={7} lg={8} xl={8}>
                            <p className={styles.ningyoText}>{ningyoObject.name}は人形国の人形です。{teamTypeArray[ningyoObject.team_id].value}軍所属です。</p>
                        </Grid>
                        {/*画像用グリッド */}
                        <Grid className={styles.ningyoInfoArea} item xs={12} sm={5} md={5} lg={4} xl={4}>
                            <img className={styles.ningyoImage} src={ningyoObject.image_url}></img>
                            <Grid container rowSpacing={1} columnSpacing={2}>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <span>名前</span>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <span>{ningyoObject.name}</span>
                                </Grid>
                            </Grid>
                            <Divider />
                            <Grid container rowSpacing={1} columnSpacing={2}>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <span>軍団</span>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <span>{teamTypeArray[ningyoObject.team_id].value}軍</span>
                                </Grid>
                            </Grid>
                            <Divider />
                            <Grid container rowSpacing={1} columnSpacing={2}>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <span>順位戦クラス</span>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <span>{ningyoObject.rank}</span>
                                </Grid>
                            </Grid>
                            <Divider />
                        </Grid>
                    </Grid>
                </Container>
        </>
    )
}

export default Detail