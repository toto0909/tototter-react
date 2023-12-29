import React from 'react'
import { useLocation } from "react-router-dom";

//表示タイプ定義(人形, 軍団, 地理を出し分け)
interface State {
    list_type: string;
}

const List:React.FC = (props) => {
    //Home.tsxから表示条件を受け取る
    const location = useLocation();
    const { list_type } = location.state as State;
    return (
        <div>{list_type}</div>
    )
}

export default List