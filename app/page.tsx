"use client";

import axios from "axios";
import AddPost from "./components/AddPost";
import { useQuery } from "react-query";
import Post from "./components/Post";

//Fetch All Posts
const getPosts = async () => {
  const response = await axios.get("/api/posts/getPosts");
  return response.data;
};

export default function Home() {
  const { data, error, isLoading } = useQuery({
    queryFn: getPosts,
    queryKey: ["posts"],
  });

  if (error) return error;
  if (isLoading) return "Loading...";
  console.log(data);
  return (
    <main className="">
      <AddPost />
      {data?.map((post) => (
        <Post
          key={post.id}
          avatar={post.user.image}
          name={post.user.name}
          postTitle={post.title}
          id={post.id}
        />
      ))}
    </main>
  );
}
