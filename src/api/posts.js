const POSTS = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export const getPosts = async () => {
  await wait(1000);
  return POSTS;
};
