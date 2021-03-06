import { HttpHeaders } from "@angular/common/http";
import { detailedgame } from "./game";
import { Post } from "./Post";
import { UserBaseInfo } from "./User";

export interface Requester<T>{
    head:RequestHead;
    body?:T;
}



export interface RequestHead{
    // uid: uid of the requester 
    // type: type of the request eg: PostCardList,Post, CommentList, PostCardDetailList, etc.
    uid?: string;
    type: string;

}

export const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    //   Authorization: 'my-auth-token'
    })
  };


export interface PostRequestParams{
    pid: string;

}
export interface UploadPostRequestParams{
    post:Post;
}
export interface PostCardRequestParams{
    pid: string[];
}

export interface PostCardDetailIndexRequestParams{
    tid:number;
}

export interface PostCardDetailRequestParams{
    pid: string[];
}
// export interface TopicCardIndexRequestParams{

// }

export interface TopicCardRequestParams{
    tid:number[];
}

export interface CommentCardIndexRequestParams{
    pid: string;
}
export interface CommentCardRequestParams{
    // pid: string;
    cid:string[];
}

export interface SubCommentRequestParams{
    // pid: string;
    // cid:string;
    sub_cid:string[];
}

export interface PostSearchRequestParams extends SearchRequestParams{
    tid?:number;
    // content:string;
}

export interface TopicCardSearchRequestParams extends SearchRequestParams{
    // content:string;
}


export interface SimpleGameSearchRequestParams{
    content:string;
}

export interface SearchRequestParams{
    content:string;
}

export interface UploadCommentRequestParams{
    userInfo:UserBaseInfo;
    pid:string;
    cid?:string;
    sub_cid?:string;
    reply_to?:UserBaseInfo;
    content:string;
    releaseTime:string;
}



//store

//store=========================================================================
export interface searchSimpleGameRequestParams{
    content:string;
}


export interface SimpleGameRequestParams{
    type:string;
    index:number;
}

export interface getdetailedgameRequestParams{
    gameid:number;
}

export interface adddetailedgameRequestParams{
    detailedgame:detailedgame;
}

export interface buygameRequestParams{
    gameid:number;
}
export interface getstateRequestParams{
    gameid:number;
}
//===========================================================



export interface FollowRequestParams{
    // follower_uid:number;
    follow_uid:string;
    follow:boolean;
}

export interface LoginRequestParams{
    uid:string;
    pwd:string;
}
export interface RegisterRequestParams{
    //phone is uid 
    phone:string;
    pwd:string;
    // userName:string;
    // sex:string;
    // birthDay:string;
    // avatarUrl:string;   
}

export interface EditUserInfoRequestParams{
    uid:string;
    pwd:string;
    newPwd?:string;
    userName?:string;
    sex?:string;
    birthDay?:string;
    avatarUrl?:string;
    signature?:string;
    email?:string;   
}

export interface LogoutRequestParams{
    uid:string;
    token:string;
}

export interface LoginValidationRequestParams{
    uid:string;
    token:string;
}

export interface MomentIndexRequestParams{
    uid:string;
}

export interface MomentRequestParams{
    uid:string;
    pid:string[];
}