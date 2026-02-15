import { useParams } from "react-router-dom";
import { blogData } from "../data/blogData";

const BlogPost = () => {
  const { blogId } = useParams();
  console.log("blogId from URL:", blogId, typeof blogId);
  const post = blogData.find((p) => p.id == Number(blogId));
  console.log(post);
  if (!post) return <p>Post tapılmadı</p>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-[400px] object-cover rounded-xl mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.desc}</p>
    </div>
  );
};

export default BlogPost;
