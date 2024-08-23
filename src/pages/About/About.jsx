import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import Flip from "gsap/Flip";
import React, { useEffect } from "react";
import { Page } from "../../components/Page";
import { blue, green, yellow } from "../../utils";
import { Educations, Paragraph, SkillsWrapper, Text } from "./About.styled";
import { AboutItem } from "./AboutItem";
import Skills from "./SkillBall";

import { useInView } from "react-intersection-observer";
import { useState } from "react";

export const About = () => {
  const { ref, inView } = useInView({});
  const [show, setShow] = useState(inView);
  useEffect(() => {
    setShow(inView);
  }, [inView]);

  useEffect(() => {
    gsap.registerPlugin(Flip);
    let cards = document.querySelectorAll(".about-item");
    cards.forEach((card, i) => {
      if (i === 0) {
        card.classList.add("active");
      }
      card.addEventListener("mouseenter", (e) => {
        if (card.classList.contains("active")) {
          return;
        }
        const state = Flip.getState(cards);
        cards.forEach((c) => {
          c.classList.remove("active");
        });
        card.classList.add("active");
        Flip.from(state, {
          duration: 0.5,
          ease: "elastic.out(1,0.9)",
          absolute: true,
        });
      });
    });
  }, []);
  return (
    <div ref={ref}>
      <Page header="About">
        <Text>
          <Paragraph>
            So, I've been tinkering with code for a while now and code 'फटना' is a part of my day-to-day life 🥲👍, but always chasing
            after those lightbulb moments when a problem finally clicks into a
            solution.
            <br />
          </Paragraph>
          <Educations>
            <AboutItem
              color={blue}
              active
              data={{
                title: "Jaypee University of Information Technology",
                p: "Bachelors of Computer Science (2020-2024)",
                image:
                  "https://pbs.twimg.com/profile_images/1155372061247672320/RXZwgwKc_400x400.png",
              }}
            />
            <AboutItem
              color={green}
              data={{
                title: "Army Public School, Dhaula Kuan",
                p: "Schooling (12th)",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/ADGPI_Indian_Army.svg/440px-ADGPI_Indian_Army.svg.png",
              }}
            />
          </Educations>
        </Text>
        <SkillsWrapper>
          {show ? (
            <Canvas camera={{ position: [0, 0, 18] }}>
              <Skills />
            </Canvas>
          ) : (
            `${inView}`
          )}
        </SkillsWrapper>
      </Page>
    </div>
  );
};
