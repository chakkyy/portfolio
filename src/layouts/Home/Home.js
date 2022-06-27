import doit2Large from "assets/doit2Large.jpg";
import gamestackTexture2Placeholder from "assets/gamestack-list-placeholder.jpg";
import doit2 from "assets/doit2.jpg";
import doitLarge from "assets/doitLarge.jpg";
import gamestackTexturePlaceholder from "assets/gamestack-login-placeholder.jpg";
import doit from "assets/doit.jpg";
import henryLarge from "assets/henryLarge.jpg";
import sliceTexturePlaceholder from "assets/slice-app-placeholder.jpg";
import henry from "assets/henry.jpg";
import liteboxLarge from "assets/liteboxLarge.jpg";
import sprTexturePlaceholder from "assets/spr-lesson-builder-dark-placeholder.jpg";
import litebox from "assets/litebox.jpg";
import { Footer } from "components/Footer";
import { Meta } from "components/Meta";
import { Intro } from "layouts/Home/Intro";
import { Profile } from "layouts/Home/Profile";
import { ProjectSummary } from "layouts/Home/ProjectSummary";
import { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";

const disciplines = ["Designer", "Photographer", "Animator", "Prototyper"];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections((prevSections) => [...prevSections, section]);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: "-100% 0px 0px 0px" }
    );

    sections.forEach((section) => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Frontend Developer"
        description="Frontend portfolio of Carlos Ramirez — a software developer working on web & mobile
          apps with a focus on motion, experience design, and accessibility."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="workexp-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Litebox"
        description="Working as Software Engineer in a boutique online agency where growth is energized by our principles of innovation and rooted in our passion for quality and originality —so you can take on the world. "
        buttonText="View website"
        buttonLink="https://www.litebox.ai"
        model={{
          type: "laptop",
          alt: "Coming soon website builder",
          textures: [
            {
              srcSet: [litebox, liteboxLarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="workexp-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Poincenot Technology Studio"
        description="Worked as mobile developer full-time on a fintech software factory, redefining banking UX across all channels."
        buttonText="View website"
        buttonLink="https://poincenot.com/do-it/"
        model={{
          type: "phone",
          alt: "App login screen",
          textures: [
            {
              srcSet: [doit, doitLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [doit2, doit2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="workexp-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="SoyHenry Teaching Assistant"
        description="Guided students through the bootcamp. Helping them to work together and understand core concepts providing extracurricular projects to reinforce knowledge and practices to test students level before bootcamp test."
        buttonText="View website"
        buttonLink="https://www.soyhenry.com/"
        model={{
          type: "laptop",
          alt: "Teaching assistant in soyHenry bootcamp",
          textures: [
            {
              srcSet: [henry, henryLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
