import { Api } from "@/shared/lib/api";
import type { Posts } from "@/shared/lib/api/types";

export const getPosts = async (): Promise<Posts> => {
  return await Api.get(`posts`).json<Posts>();
};
