type TUser = {
  username: string;
  image: Record<"png" | "webp", string>;
};

export type TCommentBase = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: TUser;
};

interface TReply extends TCommentBase {
  replyingTo: string;
}

export interface IComment extends TCommentBase {
  replies: TReply[];
}
