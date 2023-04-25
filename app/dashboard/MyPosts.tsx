"use client";

import { useQuery } from "react-query";
import axios from "axios";
import { AuthPosts } from "../types/authPosts";

const fetchAuthPosts = async () => {
  const response = await axios.get("/api/posts/authPosts");
  return response.data;
};

export default function MyPosts() {
  const { data, isLoading } = useQuery<AuthPosts>({
    queryFn: fetchAuthPosts,
    queryKey: ["auth-posts"],
  });

  if (isLoading) return <h1>Loading...</h1>;
  console.log(data);
  return (
    <div>
      <h1>Data</h1>
    </div>
  );
}
