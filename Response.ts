import { Post, PostCard, PostCardDetail } from "./Post";
import { TopicCard } from "./Topic";
import { UserCard, UserInfo } from "./User";
import { detailedgame, simplegame } from "./game";
import { Comment,SubComment } from "./Comment";

export interface PostResponse{
    post: Post;
    userCard: UserCard;
}

export interface PostCardIndexResponse extends ResponseMessage{
    pid?: string[];
}

export interface PostCardResponse{
    postCards: PostCard[];
}

export interface PostCardDetailIndexResponse extends ResponseMessage{
    pid?: string[];
}
export interface PostCardDetailResponse{
    data:{
        postCardsDetail: PostCardDetail,
        userCard: UserCard
    }[];
}

export interface UserDetailsResponse extends ResponseMessage{
    userInfo?: UserInfo;
}

export interface PostSearchResponse extends ResponseMessage{
    pid?: string[];
}

export interface TopicCardSearchResponse extends ResponseMessage{
    tid?: string[];
}

export interface TopicCardIndexResponse extends ResponseMessage{
    tid?:number[];
}

export interface TopicCardResponse{
    topicCards: TopicCard[];
}

export interface CommentIndexResponse extends ResponseMessage{
    cid?:string[];
}

export interface CommentResponse{
    comments:Comment[]
}
export interface SubCommentResponse{
    subComments:SubComment[]
}
export interface UploadPostResponse extends ResponseMessage{
}
export interface UploadCommentResponse extends ResponseMessage{
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
export interface FollowResponse extends ResponseMessage{
}
export interface LoginResponse extends ResponseMessage{
    token?: string;
    userInfo?:UserInfo;
}
export interface RegisterResponse extends ResponseMessage{
    userInfo?:UserInfo;
}
export interface EditUserResponse extends ResponseMessage{
}

export interface LogoutResponse extends ResponseMessage{
}

export interface ResponseMessage{
    success: boolean;
    message?:string;
}
export interface LoginValidationResponse extends ResponseMessage{
}

export interface MomentIndexResponse extends ResponseMessage{
    pid?: string[],
}

export interface MomentResponse {
    postCardsDetail: PostCardDetail[],
}