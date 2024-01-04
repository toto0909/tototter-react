import React from 'react'
import { useLocation } from "react-router-dom";
//型・定数設定
import Ningyo from '../../types';
import {teamTypeArray} from '../../const';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import styles from './Detail.module.css'
import Divider from '@mui/material/Divider';
//画像
import noImage from "../../assets/img/no_image.jpeg"

//propsを受け取るNingyoObject型
interface NingyoObject{
    ningyoObject: Ningyo
}

const Detail:React.FC = () => {
    //ResultList.tsxから値を受け取る
    const location = useLocation();
    const { ningyoObject } = location.state as NingyoObject //受け取る人形オブジェクト
    console.log(ningyoObject)

    //選択された人形が軍団長である場合、表示する文章を変更する
    const isCommender = () => {
        if(ningyoObject.name==teamTypeArray[ningyoObject.team_id].value){
            return (
                <p className={styles.ningyoText}>{ningyoObject.name}は人形国の人形です。{teamTypeArray[ningyoObject.team_id].value}軍の軍団長です。</p>
            )
        }else{
            return (
                <p className={styles.ningyoText}>{ningyoObject.name}は人形国の人形です。{teamTypeArray[ningyoObject.team_id].value}軍所属です。</p>
            )
        }
    }

    // const isKawaOrToto = (name: string) => {
    //     switch(name){
    //         case 'かわ':
    //             return <p>かわです</p>
    //             break;
    //         case 'とと':
    //             return <p>ととです</p>
    //             break;
    //         default:
    //             return <p>あああ</p>
    //             break;
    //     }
    // }

    return (
        <>
                <Container maxWidth='md'>
                <h2 className={styles.ningyoName}>{ningyoObject.name}</h2>
                <Divider/>
                    <Grid container rowSpacing={1} columnSpacing={0}>
                        {/*概要用グリッド */}
                        <Grid item xs={12} sm={7} md={7} lg={8} xl={8}>
                            { isCommender() }
                            {/* { isKawaOrToto(ningyoObject.name) } */}
                            {/* {ningyoObject.team_id == 1 ? <p>かわ軍</p> : <p>かわ軍以外</p>} */}
                        </Grid>
                        {/*画像用グリッド */}
                        <Grid className={styles.ningyoInfoArea} item xs={12} sm={5} md={5} lg={4} xl={4}>
                            {/* <p>型判定: {typeof ningyoObject.image_url}</p> */}
                            {ningyoObject.image_url ? <img className={styles.ningyoImage} src={ningyoObject.image_url}></img> : <img className={styles.ningyoImage} src={noImage}></img>}
                            
                            <Grid className={styles.ningyoProf} container rowSpacing={0} columnSpacing={0}>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <span>名前</span>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <span>{ningyoObject.name}</span>
                                </Grid>
                            </Grid>
                            <Divider/>
                            <Grid className={styles.ningyoProf} container rowSpacing={0} columnSpacing={0}>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <span>軍団</span>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <span>{teamTypeArray[ningyoObject.team_id].value}軍</span>
                                </Grid>
                            </Grid>
                            <Divider/>
                            <Grid className={styles.ningyoProf} container rowSpacing={0} columnSpacing={0}>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <span>順位戦クラス</span>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <span>{ningyoObject.rank}</span>
                                </Grid>
                            </Grid>
                            <Divider/>
                            <Grid className={styles.ningyoProf} container rowSpacing={0} columnSpacing={0}>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <span>身長</span>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <span>{ningyoObject.height}cm</span>
                                </Grid>
                            </Grid>
                            <Divider/>
                            <Grid className={styles.ningyoProf} container rowSpacing={0} columnSpacing={0}>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <span>体重</span>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <span>{ningyoObject.weight}kg</span>
                                </Grid>
                            </Grid>
                            <Divider/>
                            <Grid className={styles.ningyoProf} container rowSpacing={0} columnSpacing={0}>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <span>好物</span>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <span>{ningyoObject.favorite}</span>
                                </Grid>
                            </Grid>
                            <Divider/>
                            <Grid className={styles.ningyoProf} container rowSpacing={0} columnSpacing={0}>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <span>統率</span>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <span>{ningyoObject.power_leadership}</span>
                                </Grid>
                            </Grid>
                            <Divider/>
                            <Grid className={styles.ningyoProf} container rowSpacing={0} columnSpacing={0}>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <span>武力</span>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <span>{ningyoObject.power_force}</span>
                                </Grid>
                            </Grid>
                            <Divider/>
                            <Grid className={styles.ningyoProf} container rowSpacing={0} columnSpacing={0}>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <span>知力</span>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <span>{ningyoObject.power_intelligence}</span>
                                </Grid>
                            </Grid>
                            <Divider/>
                            <Grid className={styles.ningyoProf} container rowSpacing={0} columnSpacing={0}>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <span>政治</span>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <span>{ningyoObject.power_politics}</span>
                                </Grid>
                            </Grid>
                            <Divider/>
                            <Grid className={styles.ningyoProf} container rowSpacing={0} columnSpacing={0}>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <span>総合</span>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <span>{ningyoObject.power_leadership+ningyoObject.power_force+ningyoObject.power_intelligence+ningyoObject.power_politics}</span>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                <h2 className={styles.ningyoName}>概要</h2>
                <Divider/>
                <Grid container rowSpacing={1} columnSpacing={0}>
                    <Grid item xs={12} sm={7} md={7} lg={8} xl={8}>
                        <p className={styles.ningyoText}>{ningyoObject.description}</p>
                    </Grid>
                </Grid>
                </Container>
        </>
    )
}

export default Detail