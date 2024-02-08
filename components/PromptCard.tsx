import { Post } from "@customTypes/post";
interface promptProps {
  post: Post;
  handleTagClick: any;
}
const PromptCard: React.FC<promptProps> = ({ post, handleTagClick }) => {
  return <div>{post.prompt}</div>;
};

export default PromptCard;
