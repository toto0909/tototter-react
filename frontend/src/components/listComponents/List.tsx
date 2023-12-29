import React from 'react'
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
//型設定
import Ningyo from '../../types';
//firebase関係
import { db } from '../../firebase';
import { collection, getDocs, CollectionReference } from 'firebase/firestore';

//表示タイプ定義(人形, 軍団, 地理を出し分け)
interface State {
    list_type: string;
}

const List:React.FC = () => {
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
            :<>
                {list_type == 'ningyo' &&
                    <div>
                        {ningyos.map((ningyo) => (
                            <div key={ningyo.name}>{ningyo.name}</div>
                        ))}
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
            </>
        }
        </>
    )
}

export default List