import tigris2Large from 'assets/tigris2Large.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import tigris2 from 'assets/tigris2.jpg';
import tigrisLarge from 'assets/tigrisLarge.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import tigris from 'assets/tigris.jpg';
import motherduckLarge from 'assets/motherduckLarge.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import motherduck from 'assets/motherduck.jpg';
import diagridLarge from 'assets/diagridLarge.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import diagrid from 'assets/diagrid.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = [
  'Designer',
  'UX Engineer',
  'DevOps',
  'Filmmaker',
];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] =
    useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [
      intro,
      projectOne,
      projectTwo,
      projectThree,
      details,
    ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections((prevSections) => [
              ...prevSections,
              section,
            ]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
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
        title="Software Engineer"
        description="Portfolio of Carlos Ramirez — a software developer working on web & mobile
          apps with a focus on motion, experience design, and accessibility."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Diagrid"
        description="Marketing site for Diagrid, a cloud-native platform that simplifies distributed systems problems and boosts developer productivity. With tools and APIs for building resilient services, Diagrid enables seamless access to cloud resources and empowers developers to build amazing applications with ease."
        buttonText="View website"
        buttonLink="https://www.diagrid.io"
        model={{
          type: 'laptop',
          alt: 'Diagrid marketing site',
          textures: [
            {
              srcSet: [diagrid, diagridLarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Tigris Data"
        description="Marketing site for Tigris, a code-first developer data platform that empowers building rich applications that perform consistently at any scale. With an integrated suite of database and data services, Tigris simplifies development and enables developers to focus on their code, leading to better user experiences."
        buttonText="View website"
        buttonLink="https://tigrisdata.com/"
        model={{
          type: 'phone',
          alt: 'Tigris Data Marketing Site',
          textures: [
            {
              srcSet: [tigris, tigrisLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [tigris2, tigris2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="MotherDuck"
        description="Marketing site and Blog for Motherduck, a serverless data analytics platform that makes analytics fun, frictionless and ducking awesome. Built in collaboration with the folks at DuckDB Labs, Motherduck is based on DuckDB and offers an easy-to-use suite of data analytics tools."
        buttonText="View website"
        buttonLink="https://www.motherduck.com/"
        model={{
          type: 'laptop',
          alt: 'Motherduck marketing site',
          textures: [
            {
              srcSet: [motherduck, motherduckLarge],
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
