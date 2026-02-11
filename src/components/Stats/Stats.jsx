import React from "react";
import Container from "../Container";
import { StatData } from "./StatData";
const Stats = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {StatData.map((stat, index) => (
            <div key={index}>
              <h3 className="text-3xl lg:text-4xl font-bold text-[#687483]">
                {stat.value}
              </h3>
              <p className="mt-2 text-sm text-gray-500 fond-bold">{stat.title}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Stats;
