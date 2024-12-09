import BlogrFooter from "@components/Blogr/Footer/BlogrFooter";
import BlogrHeader from "@components/Blogr/Header/BlogrHeader";
import BlogrMain from "@components/Blogr/Main/BlogrMain";
import colors from "@constants/colors";
import styled from "styled-components";

const Blogr = () => {
  return (
    <BlogrDocument>
      <BlogrHeader />
      <BlogrMain />
      <BlogrFooter />
    </BlogrDocument>
  );
};

export default Blogr;

// font-family: "Ubuntu", sans-serif;
// font-family: "Overpass", sans-serif;

const BlogrDocument = styled.div`
  background-color: ${colors.blogr.neutral.white};
  font-family: "Overpass", sans-serif;
  font-style: normal;
`;
