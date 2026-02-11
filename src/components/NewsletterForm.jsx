import React from "react";
import Container from "./Container";
import { cn } from "../lib/utils";

const NewsletterForm = () => {
  return (
    <section className="bg-[#687892]">
      <Container>
        <div className="flex flex-col sm:flex-row py-14 items-center">
          <div className="flex-1">
            <h1 className="text-white text-4xl font-bold mb-8">
              Our Newsletters
            </h1>
            <p className="text-white max-w-[400px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore cumque, enim minima magni impedit!
            </p>
          </div>
          <div className="flex-1">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className={cn(
                "bg-transparent text-white mb-3 py-2 px-2 border-1 border-[#fff] placeholder:text-white w-80 rounded-lg placeholder:text-sm",
                "focus:outline-none",
              )}
            />
            <button
              type="submit"
              className="bg-[#005476] text-white rounded-md px-5 py-2.5 hover:bg-[#003f56] transition ml-10 cursor-pointer"
            >
              Submit Button
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsletterForm;
