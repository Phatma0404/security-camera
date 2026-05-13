import Container from "./Container";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BadgeCheck, MapPin, ThumbsUp } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const StarRating = ({ rating, size = 14 }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }, (_, i) =>
      i < Math.floor(rating) ? (
        <FaStar key={i} className="text-amber-400" size={size} />
      ) : i < rating ? (
        <FaStarHalfAlt key={i} className="text-amber-400" size={size} />
      ) : (
        <FaStar key={i} className="text-gray-300 dark:text-gray-600" size={size} />
      )
    )}
  </div>
);

const Avatar = ({ name, color }) => {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div
      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0 ${color}`}
    >
      {initials}
    </div>
  );
};

const CustomerReviews = () => {
  const { t } = useLanguage();
  const reviews = [
    {
      name: "Joyce Ade",
      role: t("reviews.role1"),
      rating: 5,
      text: t("reviews.text1"),
      color: "bg-gradient-to-br from-rose-400 to-pink-600",
      location: t("reviews.location1"),
      date: t("reviews.date1"),
      service: t("reviews.service1"),
      helpful: 24,
      verified: true,
    },
    {
      name: "Michael Chen",
      role: t("reviews.role2"),
      rating: 5,
      text: t("reviews.text2"),
      color: "bg-gradient-to-br from-blue-400 to-indigo-600",
      location: t("reviews.location2"),
      date: t("reviews.date2"),
      service: t("reviews.service2"),
      helpful: 18,
      verified: true,
    },
    {
      name: "Sarah Johnson",
      role: t("reviews.role3"),
      rating: 4.5,
      text: t("reviews.text3"),
      color: "bg-gradient-to-br from-amber-400 to-orange-600",
      location: t("reviews.location3"),
      date: t("reviews.date3"),
      service: t("reviews.service3"),
      helpful: 31,
      verified: true,
    },
  ];

  const avgRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <section className="py-16 sm:py-24 bg-[#f8f9fa] dark:bg-[#0a0a0a]">
      <Container>
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-[#002b3d] dark:text-white text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4 leading-tight">
            {t("reviews.title")}
          </h1>
          <p className="text-[#7a7777] dark:text-gray-400 max-w-[500px] mx-auto">
            {t("reviews.desc")}
          </p>

          {/* Trust summary bar */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-5 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-full px-5 sm:px-7 py-3 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#002b3d] dark:text-white">
                {avgRating}
              </span>
              <StarRating rating={parseFloat(avgRating)} size={16} />
            </div>
            <div className="w-px h-6 bg-gray-200 dark:bg-gray-700" />
            <span className="text-xs sm:text-sm text-[#687892] dark:text-gray-400">
              <span className="font-semibold text-[#002b3d] dark:text-white">
                247
              </span>{" "}
              {t("reviews.totalReviews")}
            </span>
            <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-1.5 text-xs sm:text-sm text-[#687892] dark:text-gray-400">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              {t("reviews.googleVerified")}
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-sm hover:shadow-lg border border-gray-100 dark:border-gray-800 transition-all duration-300 flex flex-col"
            >
              {/* Top: user info */}
              <header className="flex items-start gap-3 mb-4">
                <Avatar name={review.name} color={review.color} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-[#002b3d] dark:text-white font-semibold text-sm sm:text-base truncate">
                      {review.name}
                    </h4>
                    {review.verified && (
                      <BadgeCheck size={16} className="text-[#005476] dark:text-[#7aa6c0] shrink-0" />
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[#687892] dark:text-gray-400 mt-0.5">
                    <MapPin size={11} />
                    <span className="truncate">{review.location}</span>
                  </div>
                </div>
              </header>

              {/* Rating + date */}
              <div className="flex items-center justify-between mb-3">
                <StarRating rating={review.rating} size={15} />
                <span className="text-xs text-[#687892] dark:text-gray-500">
                  {review.date}
                </span>
              </div>

              {/* Service tag */}
              <span className="inline-flex self-start items-center text-[10px] font-medium uppercase tracking-wider text-[#005476] dark:text-[#7aa6c0] bg-[#005476]/10 dark:bg-[#7aa6c0]/10 px-2.5 py-1 rounded-full mb-3">
                {review.service}
              </span>

              {/* Review text */}
              <p className="text-[#555] dark:text-gray-300 text-sm leading-relaxed flex-1">
                {review.text}
              </p>

              {/* Footer: helpful + verified purchase */}
              <footer className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <button className="inline-flex items-center gap-1.5 text-xs text-[#687892] dark:text-gray-400 hover:text-[#005476] dark:hover:text-white transition-colors cursor-pointer">
                  <ThumbsUp size={13} />
                  <span>{t("reviews.helpful")} ({review.helpful})</span>
                </button>
                {review.verified && (
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                    ✓ {t("reviews.verifiedCustomer")}
                  </span>
                )}
              </footer>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CustomerReviews;
