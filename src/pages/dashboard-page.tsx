import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Input from "../components/ui/input";
import TextArea from "../components/ui/textarea";
import PostCard from "../components/post-card";
import useAuthStore from "../store/auth";
import usePostStore, { Post } from "../store/post";
import { GoSignOut } from "react-icons/go";

const DashboardPage = () => {
  const { logout } = useAuthStore();
  const { posts, fetchPosts, addPost, updatePost, deletePost, isLoading } =
    usePostStore();
  const [newPost, setNewPost] = useState<Post>({ id: 0, title: "", body: "" });
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleCancel = () => {
    setNewPost({ id: 0, title: "", body: "" });
    setIsEditing(false);
  };

  const handleClick = (id: number) => {
    const post = posts.find((post) => post.id === id);
    if (post) {
      setIsEditing(true);
      setNewPost(post);
    }
  };

  const handleAdd = () => {
    if (newPost.title && newPost.body) {
      addPost({ ...newPost, id: Date.now() });
      setNewPost({ id: 0, title: "", body: "" });

      toast.success("Post added successfully");
    }
  };

  const handleUpdate = () => {
    if (newPost.title && newPost.body) {
      updatePost(newPost.id, newPost);

      setNewPost({ id: 0, title: "", body: "" });
      setIsEditing(false);

      toast.success("Post updated successfully");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          onClick={logout}
          className="bg-red-500 cursor-pointer text-white p-2 rounded"
        >
          <GoSignOut />
        </button>
      </div>

      <div className="flex border border-neutral-300 flex-col gap-4 w-full max-w-md mx-auto bg-white rounded-xl p-4">
        <Input
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          placeholder="Title"
        />

        <TextArea
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          placeholder="Body"
        />

        {isEditing ? (
          <div className="flex gap-4 w-full">
            <button
              onClick={handleCancel}
              className="bg-red-600 uppercase text-sm font-bold hover:bg-red-700 text-white p-2 rounded w-full"
            >
              cancel
            </button>
            <button
              onClick={handleUpdate}
              className="bg-black uppercase text-sm font-bold hover:bg-neutral-800 text-white p-2 rounded w-full"
            >
              update post
            </button>
          </div>
        ) : (
          <button
            onClick={handleAdd}
            className="bg-black uppercase text-sm font-bold hover:bg-neutral-800 text-white p-2 rounded"
          >
            add post
          </button>
        )}
      </div>

      {isLoading && (
        <div className="w-full flex justify-center items-center mt-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          <p className="ml-4">Loading...</p>
        </div>
      )}

      <ul className="grid mt-16 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {posts.map((post) => (
          <PostCard
            post={post}
            key={post.id}
            onEdit={() => handleClick(post.id)}
            onDelete={() => deletePost(post.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default DashboardPage;
