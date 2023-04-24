export type PostUser = {
  email: string;
  id: string;
  image: string;
  name: string;
};

export type PostComment = {
  id: string;
  message: string;
  postId: string;
  userId: string;
  createdAt: string;
};

export type PostType = {
  title: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  published: boolean;
  user: PostUser;
  comments?: PostComment[];
};
