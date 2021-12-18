import { Post, PostCard, PostCardDetail } from "./Post";
import { TopicCard } from "./Topic";
import { UserCard, UserInfo } from "./User";
import { detailedgame, simplegame } from "./game";
import { Comment,SubComment } from "./Comment";

export interface PostResponse{
    post: Post;
    userCard: UserCard;
}

export interface PostCardIndexResponse{
    success: boolean;
    message?:string;
    pid?: string[];
}

export interface PostCardResponse{
    postCards: PostCard[];
}

export interface PostCardDetailIndexResponse{
    success: boolean;
    message?:string;
    pid?: string[];
}
export interface PostCardDetailResponse{
    data:{
        postCardsDetail: PostCardDetail,
        userCard: UserCard
    }[];
}

export interface UserDetailsResponse{
    success: boolean;
    message?: string;
    userInfo?: UserInfo;
}

export interface PostSearchResponse{
    success: boolean;
    message?: string;
    pid?: string[];
}

export interface TopicCardSearchResponse{
    success: boolean;
    message?: string;
    tid?: string[];
}

export interface TopicCardIndexResponse{
    success: boolean;
    message?:string;
    tid?:number[];
}

export interface TopicCardResponse{
    topicCards: TopicCard[];
}

export interface CommentIndexResponse{
    success: boolean;
    message?: string;
    cid?:string[];
}

export interface CommentResponse{
    comments:Comment[]
}
export interface SubCommentResponse{
    subComments:SubComment[]
}
export interface UploadPostResponse{
    success: boolean;
    message?: string;
}
export interface UploadCommentResponse{
    success: boolean;
    message?: string;
}
// store======================================================================
//查询
export interface searchsimplegamelistResponse{
    success: boolean;
    simplegamelist?:simplegame[];
}
//store三个模块
export interface simplegamelistResponse{
    success: boolean;
    simplegamelist?:simplegame[];
}
//store的展示游戏图片
export interface storeShowImgResponse{
    success: boolean;
    storeShowImg?:string[];
}

export interface getdetailedgameResponse{
    success: boolean;
    detailedgame:detailedgame;
}

export interface addresultResponse{
    success: boolean;
    message?: string;
}

export interface buygameresultResponse{
    success: boolean;
    message?: string;
}
export interface getstateResponse{
    success:boolean;
    state:boolean;
}
//----------------------------------------------------------------
export interface FollowResponse{
    success: boolean;
    message?: string;
}
export interface LoginResponse{
    success: boolean;
    message?: string;
    token?: string;
    userInfo?:UserInfo;
}
export interface RegisterResponse{
    success: boolean;
    message?: string;
    userInfo?:UserInfo;
}
export interface EditUserResponse{
    success:boolean,
    message?:string;
}