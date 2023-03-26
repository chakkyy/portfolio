import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import usesBackground from 'assets/uses-background.mp4';
import { Footer } from 'components/Footer';
import { Link } from 'components/Link';
import { List, ListItem } from 'components/List';
import { Meta } from 'components/Meta';
import {
  Table,
  TableBody,
  TableCell,
  TableHeadCell,
  TableRow,
} from 'components/Table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import styles from './Uses.module.css';

export const Uses = () => {
  return (
    <Fragment>
      <Meta
        title="Uses"
        description="A list of hardware and software I use to do my thing"
      />
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={{ src: usesBackground }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A somewhat comprehensive list of tools, apps, and more that I use on a daily basis to code and design things. And yeah, that is a Johnny Mnemonic GIF in the background."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>
                Development
              </ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use{' '}
                    <Link href="https://code.visualstudio.com/">
                      Visual Studio Code
                    </Link>{' '}
                    as my text editor, with the Dracula theme and
                    Cascadia Code PL as my typeface of choice.
                  </ListItem>
                  <ListItem>
                    Chrome is my main browser for both development and
                    general use.
                  </ListItem>
                  <ListItem>
                    <Link href="https://reactjs.org/">React</Link>{' '}
                    (and its ecosystem) is my front end Javascript
                    library of choice. The component-centric mental
                    model & their methods of lifecycle is the first
                    thing that truly made sense to me as a designer.
                  </ListItem>
                  <ListItem>
                    For 3D effects and image shaders I use{' '}
                    <Link href="https://threejs.org/">three.js</Link>.
                    It has a bit of a learning curve but you can do
                    some really powerful stuff with it.
                  </ListItem>
                  <ListItem>
                    For CSS I’ve used so much pre-processors and
                    css-in-js solutions like styled-components, but
                    these days I’m using vanilla CSS with{' '}
                    <Link href="https://postcss.org/">PostCSS</Link>{' '}
                    to get upcoming CSS features today.
                  </ListItem>
                  <ListItem>
                    For Javascript animations I use{' '}
                    <Link href="https://www.framer.com/motion/">
                      Framer Motion
                    </Link>
                    , it’s a great way to add spring animations to
                    React and three.js.
                  </ListItem>
                  <ListItem>
                    For building and testing UI components in
                    isolation I’m learning to use{' '}
                    <Link href="https://storybook.js.org/">
                      Storybook
                    </Link>
                    . Storybook of this website is coming soon :).
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.figma.com">Figma</Link> is
                    my primary tool for UI design these days. Learned
                    to use it on 2020 and I haven’t never looked for
                    another tool.
                  </ListItem>
                  <ListItem>
                    Any motion graphics I create are created in{' '}
                    <Link href="https://www.adobe.com/ar/products/aftereffects.html">
                      Adobe After Effects
                    </Link>
                    . So far I haven’t found a non-Adobe product
                    that’s as good. If anyone has suggestions please{' '}
                    <Link href="https://twitter.com/chakkyjs">
                      message me
                    </Link>
                    .
                  </ListItem>
                  <ListItem>
                    For any graphic design or photo editing I use{' '}
                    <Link href="https://www.adobe.com/ar/products/photoshop.html">
                      Adobe Photoshop
                    </Link>
                    . It’s a must have for any designer/photographer
                    and since I was a kid I’m in love with it,
                    spending hours on improve my creativity with this
                    software.
                  </ListItem>
                  <ListItem>
                    For me, it’s a never-ending journey of learning
                    and finding new tools and processes that I can use
                    to create and improve my designs. Nowadays i’m
                    learning{' '}
                    <Link href="https://www.adobe.com/ar/products/illustrator.html">
                      Adobe Illustrator
                    </Link>{' '}
                    so stay tuned!
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
