import Container from "./Container";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { TfiQuoteRight } from "react-icons/tfi";
import User from "../../public/images/user.jpg";

const reviews = [
  {
    name: "Joyce Ade",
    role: "Business Owner",
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, consequuntur suscipit? Recusandae officiis impedit iste sequi nisi architecto hic porro?",
    image: User,
  },
  {
    name: "Michael Chen",
    role: "Office Manager",
    rating: 5,
    text: "Ducimus soluta placeat voluptatibus laboriosam! Excepturi officiis quisquam recusandae soluta necessitatibus omnis inventore quod doloremque.",
    image: User,
  },
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    rating: 4.5,
    text: "Assumenda cupiditate nihil id, nisi quia facilis? Neque suscipit officiis assumenda obcaecati ullam maiores beatae quaerat modi.",
    image: User,
  },
];

const StarRating = ({ rating }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }, (_, i) =>
      i < Math.floor(rating) ? (
        <FaStar key={i} className="text-amber-400" size={14} />
      ) : i < rating ? (
        <FaStarHalfAlt key={i} className="text-amber-400" size={14} />
      ) : (
        <FaStar key={i} className="text-gray-300" size={14} />
      )
    )}
  </div>
);

const CustomerReviews = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#f8f9fa]">
      <Container>
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[#687892] font-semibold tracking-wider uppercase text-sm">
            Testimonials
          </span>
          <h1 className="text-[#002b3d] text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4 leading-tight">
            What Our Clients Say
          </h1>
          <p className="text-[#7a7777] max-w-[500px] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            hic quae illo ratione ab!
          </p>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 relative group"
            >
              {/* Quote icon */}
              <TfiQuoteRight
                size={32}
                className="text-gray-100 group-hover:text-[#687892]/20 absolute top-6 right-6 transition-colors duration-300"
              />

              {/* Stars */}
              <StarRating rating={review.rating} />

              {/* Review text */}
              <p className="text-[#555] mt-4 mb-6 text-sm sm:text-base leading-relaxed">
                "{review.text}"
              </p>

              {/* Divider */}
              <div className="border-t border-gray-100 pt-5">
                <div className="flex items-center gap-3">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-[#002b3d] font-bold text-sm sm:text-base">
                      {review.name}
                    </h4>
                    <span className="text-[#687892] text-xs sm:text-sm">
                      {review.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CustomerReviews;
