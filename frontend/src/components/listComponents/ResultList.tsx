import React from 'react'
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
//MUI
import Container from "@mui/material/Container";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
//型・定数設定
import Ningyo from '../../types';
import {teamTypeArray} from '../../const';
//firebase関係
import { db } from '../../firebase';
import { collection, getDocs, CollectionReference } from 'firebase/firestore';
//react-router-dom
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

//画像無し状態のダミー画像
import no_image from "../../assets/img/no_image.jpeg"

//表示タイプ定義(人形, 軍団, 地理を出し分け)
interface State {
    list_type: string;
}

//Detail画面遷移Link用Style定義
const DetailLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

const ResultList:React.FC = () => {
    //Home.tsxから表示条件を受け取る
    const location = useLocation();
    const { list_type } = location.state as State;
    //通信中フラグ
    const [processing, setProcessing] = useState<boolean>(false);
    //firebase接続=>データ格納用
    const [ningyos, setNingyos] = useState<Ningyo[]>([]);

    useEffect(() => {
        setProcessing(true);
        const fetchNingyos = async() => {
            const ningyosCollectionRef = collection(db, 'ningyos') as CollectionReference<Ningyo>;
            try{
                const result = await getDocs(ningyosCollectionRef);
                setNingyos(result.docs.map((doc) => doc.data()));
                //初期ソート
                setNingyos(prev => prev.sort((a, b) => b.power_leadership - a.power_leadership))
            }
            catch(e){
                alert('通信エラー')
            }
        }
        //人形・軍団・地理条件に応じてDBからデータ取得
        if(list_type == 'ningyo'){
            fetchNingyos();
        }
        setProcessing(false);
    }, [processing]);

    //人形ソートメソッド
    const sortNingyos = (type: string) => {
        var clonedNingyos = Array.from(ningyos);
        switch(type){
            case 'leadership':
                clonedNingyos.sort((a, b) => b.power_leadership - a.power_leadership);
                break;
            case 'force':
                clonedNingyos.sort((a, b) => b.power_force - a.power_force);
                break;
            case 'intelligence':
                clonedNingyos.sort((a, b) => b.power_intelligence - a.power_intelligence);
                break;
            case 'politics':
                clonedNingyos.sort((a, b) => b.power_politics - a.power_politics);
                break;
            case 'all':
                clonedNingyos.sort((a, b) => (b.power_leadership + b.power_force + b.power_intelligence + b.power_politics) - (a.power_leadership + a.power_force + a.power_intelligence + a.power_politics));
                break;
            case 'order':
                let clonedNingyos_a = clonedNingyos.filter((ningyo) => ningyo.rank.includes('A級'));
                clonedNingyos_a.sort((a, b) => Number(a.rank.split(' ')[1].replace("位", "")) - Number(b.rank.split(' ')[1].replace("位", "")));
                let clonedNingyos_b1 = clonedNingyos.filter((ningyo) => ningyo.rank.includes('B級1組'));
                clonedNingyos_b1.sort((a, b) => Number(a.rank.split(' ')[1].replace("位", "")) - Number(b.rank.split(' ')[1].replace("位", "")));
                let clonedNingyos_b2 = clonedNingyos.filter((ningyo) => ningyo.rank.includes('B級2組'));
                clonedNingyos_b2.sort((a, b) => Number(a.rank.split(' ')[1].replace("位", "")) - Number(b.rank.split(' ')[1].replace("位", "")));
                let clonedNingyos_c1 = clonedNingyos.filter((ningyo) => ningyo.rank.includes('C級1組'));
                clonedNingyos_c1.sort((a, b) => Number(a.rank.split(' ')[1].replace("位", "")) - Number(b.rank.split(' ')[1].replace("位", "")));
                let clonedNingyos_c2 = clonedNingyos.filter((ningyo) => ningyo.rank.includes('C級2組'));
                clonedNingyos = clonedNingyos_a.concat(clonedNingyos_b1).concat(clonedNingyos_b2).concat(clonedNingyos_c1).concat(clonedNingyos_c2)
                break;
            default :
                return;
        }
        setNingyos(clonedNingyos);
    };

    //人形・軍団・地理リストをlist_typeに応じて出し分ける
    return (
        <>
        {processing? 
            //通信中
            <>
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            </>
            //通信終了時
            :<Container maxWidth='md'>
                {/* 人形リスト一覧表示 */}
                {list_type == 'ningyo' &&
                    <div>
                        {/* ソートボタン一覧表示 */}
                            <Grid container rowSpacing={1}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Button variant="contained" color="error" onClick={() => sortNingyos('order')}>順位戦(公式強さ序列)</Button>
                                </Grid>
                            </Grid>
                            <p>能力順に並び替え</p>
                            <Grid container rowSpacing={1}>
                                <Grid item xs={4} sm={2} md={2} lg={2} xl={2}>
                                    <Button variant="contained" color="warning" onClick={() => sortNingyos('leadership')}>統率順</Button>
                                </Grid>
                                <Grid item xs={4} sm={2} md={2} lg={2} xl={2}>
                                    <Button variant="contained" color="error" onClick={() => sortNingyos('force')}>武力順</Button>
                                </Grid>
                                <Grid item xs={4} sm={2} md={2} lg={2} xl={2}>
                                    <Button variant="contained" onClick={() => sortNingyos('intelligence')}>知力順</Button>
                                </Grid>
                                <Grid item xs={4} sm={2} md={2} lg={2} xl={2}>
                                    <Button variant="contained" color="success" onClick={() => sortNingyos('politics')}>政治順</Button>
                                </Grid>
                                <Grid item xs={4} sm={2} md={2} lg={2} xl={2}>
                                    <Button variant="contained" color="info" onClick={() => sortNingyos('all')}>総合順</Button>
                                </Grid>
                            </Grid>
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            {ningyos.map((ningyo, index) => (
                                <div key={ningyo.name}>
                                    <DetailLink to="/detail" state={{ningyoObject: ningyo }}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                {ningyo.image_url? <Avatar alt={ningyo.name} src={ningyo.image_url} /> : <Avatar alt="画像がありません" src={no_image} />}
                                            </ListItemAvatar>
                                            <ListItemText primary={(index+1+'位 ') + ningyo.name} secondary={teamTypeArray[ningyo.team_id].value + '軍(' + ningyo.rank + ') ' + '統率' + ningyo.power_leadership + ' 武力' + ningyo.power_force + ' 知力' + ningyo.power_intelligence + ' 政治' + ningyo.power_politics + ' 総合' + (ningyo.power_leadership + ningyo.power_force + ningyo.power_intelligence + ningyo.power_politics)}  />
                                        </ListItem>
                                    </DetailLink>
                                    <Divider />
                                </div>
                            ))}
                        </List>
                    </div>
                }

                {/* 軍団リスト一覧表示 */}
                {list_type == 'team' &&
                    <div>軍団一覧</div>
                }

                {/* 州リスト一覧表示 */}
                {list_type == 'geography' &&
                    <div>地理一覧</div>
                }
            </Container>
        }
        </>
    )
}

export default ResultList