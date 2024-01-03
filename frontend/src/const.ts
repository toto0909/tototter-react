//<teamType>型定義
export type teamType = {
    key: number;
    value: string;
};

const team_0: teamType = {
    key: 0,
    value: "未設定",
} as const;

const team_1: teamType = {
    key: 1,
    value: "かわ",
} as const;

const team_2: teamType = {
    key: 2,
    value: "とと",
} as const;

const team_3: teamType = {
    key: 3,
    value: "ムニャ",
} as const;

const team_4: teamType = {
    key: 4,
    value: "サメサメ",
} as const;

const team_5: teamType = {
    key: 5,
    value: "とら",
} as const;

const team_6: teamType = {
    key: 6,
    value: "一番弟子",
} as const;

const team_7: teamType = {
    key: 7,
    value: "最強ペンギン",
} as const;

//全軍団配列取得
export const teamTypeArray: teamType[] = [
    team_0, team_1, team_2, team_3, team_4, team_5, team_6, team_7
]