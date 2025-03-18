import { create } from "zustand";
import axios from "axios";
import { toast } from "react-toastify";

export interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostState {
  posts: Post[];
  isLoading: boolean;
  fetchPosts: () => void;
  addPost: (post: Post) => void;
  updatePost: (id: number, updatedPost: Post) => void;
  deletePost: (id: number) => void;
}

const usePostStore = create<PostState>((set) => ({
  posts: [],
  isLoading: false,
  fetchPosts: async () => {
    set({ isLoading: true });
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      set({ posts: response.data.slice(0, 10) });
    } catch (error) {
      console.error("Error fetching posts:", error);

      toast.error("Error fetching posts");
    } finally {
      set({ isLoading: false });
    }
  },
  addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
  updatePost: (id, updatedPost) =>
    set((state) => ({
      posts: state.posts.map((post) => (post.id === id ? updatedPost : post)),
    })),
  deletePost: (id) =>
    set((state) => ({ posts: state.posts.filter((post) => post.id !== id) })),
}));

export default usePostStore;
