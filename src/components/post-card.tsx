import { FC } from "react";
import { Post } from "../store/post";
import { GoTrash, GoPencil } from "react-icons/go";

interface PostCardProps {
  post: Post;
  onEdit: () => void;
  onDelete: () => void;
}

const PostCard: FC<PostCardProps> = ({ post, onEdit, onDelete }) => {
  return (
    <li className="border flex flex-col gap-6 justify-between bg-white border-neutral-300 rounded-xl p-4">
      <div>
        <h2 className="text-lg font-bold line-clamp-2">{post.title}</h2>
        <p className="text-sm font-light tracking-wide mt-2">{post.body}</p>
      </div>

      <div className="flex items-center gap-2 justify-end">
        <button
          onClick={onEdit}
          className="bg-neutral-700 text-white p-2 rounded cursor-pointer"
        >
          <GoPencil />
        </button>
        <button
          onClick={onDelete}
          className="bg-red-600 text-white p-2 rounded cursor-pointer"
        >
          <GoTrash />
        </button>
      </div>
    </li>
  );
};

export default PostCard;
