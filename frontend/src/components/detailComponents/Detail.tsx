import React from 'react'
import { useLocation } from "react-router-dom";
//型・定数設定
import Ningyo from '../../types';
import {teamTypeArray} from '../../const';

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
            
                <p>{ningyoObject.name}</p>
        </>
    )
}

export default Detail