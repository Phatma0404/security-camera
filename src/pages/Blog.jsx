import React from "react";
import Container from "../components/Container";
import { Folder, MoveRight } from "lucide-react";

const Blog = () => {
  const blog = [
    {
      image:
        "https://i.pinimg.com/736x/52/fa/2b/52fa2bd926af9d915d87ec2f1cd0ebc7.jpg",
      title: "Security solutions",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum corrupti doloribus voluptas! ",
    },
    {
      image:
        "https://i.pinimg.com/736x/0a/f5/22/0af522210637a7d5e3f9a72ab3df2790.jpg",
      title: "Monitor the workplace",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum corrupti doloribus voluptas! ",
    },
    {
      image:
        "https://i.pinimg.com/1200x/28/15/3c/28153c7b5f7327cfe43997202d41ae53.jpg",
      title: "Why choose secures",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum corrupti doloribus voluptas! ",
    },
  ];
  return (
    <section className="pb-12">
      <Container>
        <div className="text-center mt-24">
          <h1 className="text-[#002b3d] text-3xl md:text-5xl font-bold mb-4">
            Blog & Article
          </h1>
          <p className="text-[#7a7777] mb-12 mx-auto max-w-[600px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nulla
            sapiente, ratione veniam molestiae enim commodi labore mollitia quae
            culpa animi modi dolore.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6">
          {blog.map((item, index) => (
            <div key={index} className="">
              <div className="w-[370px] h-[200px]">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex gap-3 mt-3">
                <Folder color="#7a7777" />
                <span className="text-[#7a7777]">Uncategorized</span>
              </div>
              <h1 className="text-[#002b3d] text-2xl font-bold my-3">
                {item.title}
              </h1>
              <p className="text-[#7a7777]">{item.desc}</p>
              <button className="flex flex-row gap-1 items-center text-[#002b3d] font-semibold mt-3 pb-8 cursor-pointer">
                Learn More
                <MoveRight className="pt-1" size={20} color="#002b3d" />
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Blog;
