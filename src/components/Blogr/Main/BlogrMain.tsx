import styled from "styled-components";
import Section from "./Section";
import desktopImage from "@assets/Blogr/illustration-editor-desktop.svg?inline";
import laptopImage from "@assets/Blogr/illustration-laptop-desktop.svg?inline";
import StateOfArtSection from "./StateOfArtSection";

const BlogrMain = () => {
  return (
    <StyledMain>
      <Section
        title="Designed for the future"
        textBlocks={[
          {
            h3: "Introducing an extensible editor",
            p: `
            Blogr features an exceedingly intuitive interface which lets
            you focus on one thing: creating content. The editor supports
            managmeent of multiple blogs and allows easy manipulation of
            embeds such as images, videos, and Markdown. Extensibility
            with plugins and themes provide easy ways to add functionality
            or change the looks of a blog.`,
          },
          {
            h3: "Robust content Management",
            p: `
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you're in full control.
            `,
          },
        ]}
        image={desktopImage}
      />
      <StateOfArtSection />
      <Section
        textPosition="right"
        textBlocks={[
          {
            h3: "Free, open, simple",
            p: `
            Blogr is a free and open source application backed by a large community
            of helpful developers. It supports features such as code syntax highlighting,
            RSS feeds, social media integration, third-party commenting tools, and works
            seamlessly with Google Analytics. The architecture is clean and is relatively
            easy to learn.`,
          },
          {
            h3: "Powerful tooling",
            p: `
              Batteries included. We built a simple and straightforward CLI tool that makes
              customization and deployment a breeze, but capable of producing even the most
              complicated sites.
            `,
          },
        ]}
        image={laptopImage}
      />
    </StyledMain>
  );
};

export default BlogrMain;

const StyledMain = styled.main`
  padding: 32px 0;
  overflowx: hidden;
`;
