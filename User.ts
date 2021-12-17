export interface UserBaseInfo{
    uid: string;
    userName: string;
}
export interface UserCard extends UserBaseInfo{
    userLevel: number;
    avatarUrl: string;
    // releaseTime?:string;
    // numberOfStars?:number;
}

export interface UserInfo extends UserCard{
    usersign:string;
    usersex:string;
    userbirth:number;
    usermail:string;
    attentionnumber:number;
    fansnumber:number;
    collectionnumber:number;
}
