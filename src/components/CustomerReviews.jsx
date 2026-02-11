import Container from "./Container";
import { MoveRight, Star } from "lucide-react";
import Camera from "../../public/images/camera-preview.jpg";
import { FaStar } from "react-icons/fa";
import User from "../../public/images/user.jpg";
import { TfiQuoteRight } from "react-icons/tfi";
const CustomerReviews = () => {
  return (
    <section className="bg-[#e9e9e9]">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-12 pt-16">
          <div className="leading-none flex-1">
            <h1 className="text-[#002b3d] max-w-[350px] text-[38px] font-bold">
              Nothing Secures you Better Than Us
            </h1>
          </div>

          <div className="flex-1">
            <p className="text-[#7a7777]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
              hic quae illo ratione ab! Lorem ipsum dolor sit amet consectetur.
            </p>
            <button className="flex flex-row gap-1 items-center text-[#002b3d]">
              Learn More
              <MoveRight className="pt-1" size={20} color="#002b3d" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row my-16 pb-12">
          <img
            src={Camera}
            alt="Camera-preview"
            className="flex-1 rounded-tl-[20px] rounded-bl-[20px] sm:rounded-none md:rounded-none"
            width={600}
          />

          <div className="bg-[#002b3d] p-16 flex-1 rounded-tr-[20px] rounded-br-[20px]">
            <span className="flex gap-1">
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
            </span>
            <h2 className="text-white mt-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, consequuntur suscipit? Recusandae officiis impedit
              iste sequi nisi architecto hic porro?
            </h2>

            <div className="flex items-center gap-4 mt-12 relative">
              <img src={User} alt="" width={100} className="rounded-full" />
              <p className="flex flex-col text-white">
                <span className="font-semibold">Joyce Ade</span>
                <span>Client</span>
              </p>{" "}
              <TfiQuoteRight className="absolute right-0 top-24" size={40} color="white"/>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CustomerReviews;
