import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getPosts } from "./api/posts";

function PostsLists2() {
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (postQuery.isLoading) return <h1>Loading...</h1>;
  if (postQuery.isError) return <pre>{JSON.stringify(postQuery.error)}</pre>;
  return (
    <div>
      <h1>Posts List 2</h1>
      <ol>
        {postQuery.data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
}

export default PostsLists2;
