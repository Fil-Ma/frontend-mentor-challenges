import styled from "styled-components";
import phonesImage from "@assets/Blogr/illustration-phones.svg?inline";
import colors from "@constants/colors";

const { neutral, gradient } = colors.blogr;

const StateOfArtSection = () => {
  return (
    <Section>
      <div className="phones"></div>
      <div>
        <h3>State of the Art Infrastructure</h3>
        <p>
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </Section>
  );
};

export default StateOfArtSection;

const Section = styled.section`
  padding: 64px 0;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 48px;
  align-items: center;

  border-top-right-radius: 90px;
  border-bottom-left-radius: 90px;
  background: linear-gradient(
    to right,
    ${gradient.blue.dark},
    ${gradient.blue.desaturated}
  );

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 24px;
    align-items: stretch;

    background: linear-gradient(
      to bottom,
      ${gradient.blue.dark},
      ${gradient.blue.desaturated}
    );
  }

  h3,
  p {
    color: ${neutral.white};
    margin: 0;
  }

  h3 {
    margin-block: 16px;
    font-size: 2.2rem;
    line-height: 2.2rem;
  }

  div {
    flex: 1;
  }

  .phones {
    background: url("${phonesImage}");
    background-size: 1000px 1000px;
    background-position: center;
    height: 200px;
  }
`;
