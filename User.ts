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
    signature?:string;
    sex?:string;
    birthDay?:string;
    email?:string;
    numberOfFollow:number;
    numberOfFans:number;
    numberOfCollection:number;
}
