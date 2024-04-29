import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import PostsLists1 from "./PostsLists1";
import PostsLists2 from "./PostsLists2";

function App() {
  const [currentPage, setCurrentPage] = useState(<PostsLists1 />);

  return (
    <div>
      <button onClick={() => setCurrentPage(<PostsLists1 />)}>
        PostsLists1
      </button>
      <button onClick={() => setCurrentPage(<PostsLists2 />)}>
        PostsLists2
      </button>
      <br />
      {currentPage}
    </div>
  );
}

export default App;
