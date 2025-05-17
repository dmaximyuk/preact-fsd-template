export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export type Posts = Array<Post>;
