import { useParams, Link } from "react-router-dom";
import { blogData } from "../data/blogData";
import Container from "../components/Container";
import { ArrowLeft, Calendar, User, Tag, ArrowRight } from "lucide-react";

const BlogPost = () => {
  const { blogId } = useParams();
  const post = blogData.find((p) => p.id === Number(blogId));

  if (!post)
    return (
      <Container>
        <div className="py-32 text-center">
          <h1 className="text-3xl font-bold text-[#002b3d] mb-4">
            Post tapılmadı
          </h1>
          <Link
            to="/"
            className="text-[#687892] hover:text-[#002b3d] transition-colors"
          >
            Ana səhifəyə qayıt
          </Link>
        </div>
      </Container>
    );

  // Get other posts for sidebar
  const otherPosts = blogData.filter((p) => p.id !== post.id);

  return (
    <section className="py-12 sm:py-16">
      <Container>
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#687892] hover:text-[#002b3d] transition-colors mb-8 text-sm font-medium"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Main content */}
          <article className="flex-[2]">
            {/* Hero image */}
            <div className="w-full h-[250px] sm:h-[350px] md:h-[420px] rounded-2xl overflow-hidden mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 text-sm text-[#687892]">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <User size={14} />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Tag size={14} />
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002b3d] mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Content */}
            <div className="text-[#555] leading-relaxed space-y-4">
              {post.content.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Share / Tags */}
            <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-[#002b3d]">Tags:</span>
                <span className="bg-gray-100 text-[#687892] text-xs px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="bg-gray-100 text-[#687892] text-xs px-3 py-1 rounded-full">
                  Security
                </span>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="flex-1 lg:max-w-[320px]">
            {/* Recent posts */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-[#002b3d] font-bold text-lg mb-5">
                Recent Posts
              </h3>
              <div className="space-y-4">
                {otherPosts.map((item) => (
                  <Link
                    key={item.id}
                    to={`/blog/${item.id}`}
                    className="flex gap-4 group"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 rounded-xl object-cover shrink-0"
                    />
                    <div>
                      <h4 className="text-[#002b3d] font-semibold text-sm group-hover:text-[#687892] transition-colors leading-snug mb-1">
                        {item.title}
                      </h4>
                      <span className="text-[#687892] text-xs flex items-center gap-1">
                        <Calendar size={12} />
                        {item.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-gray-50 rounded-2xl p-6 mt-6">
              <h3 className="text-[#002b3d] font-bold text-lg mb-5">
                Categories
              </h3>
              <ul className="space-y-3">
                {["Security", "Technology", "Smart Home"].map((cat) => (
                  <li
                    key={cat}
                    className="flex items-center justify-between text-sm text-[#555] hover:text-[#002b3d] transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <ArrowRight size={14} className="text-[#687892]" />
                      {cat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-[#002b3d] rounded-2xl p-6 mt-6 text-white text-center">
              <h3 className="font-bold text-lg mb-2">Need Help?</h3>
              <p className="text-white/70 text-sm mb-5">
                Get in touch with our security experts today.
              </p>
              <Link
                to="/contactUs"
                className="inline-block bg-[#687892] hover:bg-[#005476] text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
};

export default BlogPost;
