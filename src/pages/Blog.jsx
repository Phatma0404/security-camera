import Container from "../components/Container";
import { MoveRight, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogData } from "../data/blogData";

const Blog = () => {
  return (
    <section id="blog" className="py-16 sm:py-24 scroll-mt-16">
      <Container>
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[#687892] font-semibold tracking-wider uppercase text-3xl">
            Our Blog
          </span>
          <h1 className="text-[#002b3d] text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Blog & Article
          </h1>
          <p className="text-[#7a7777] max-w-[500px] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nulla
            sapiente, ratione veniam molestiae enim commodi.
          </p>
        </div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {blogData.map((item, index) => (
            <Link
              key={index}
              to={`/blog/${item.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="w-full h-[200px] sm:h-[220px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-2 text-[#687892] text-xs sm:text-sm mb-3">
                  <Calendar size={14} />
                  <span>March 2026</span>
                  <span className="w-1 h-1 bg-[#687892] rounded-full"></span>
                  <span>Security</span>
                </div>

                <h2 className="text-[#002b3d] text-lg sm:text-xl font-bold mb-2 group-hover:text-[#687892] transition-colors duration-300">
                  {item.title}
                </h2>
                <p className="text-[#7a7777] text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>

                <span className="inline-flex items-center gap-1.5 text-[#002b3d] text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                  Read More
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Blog;
