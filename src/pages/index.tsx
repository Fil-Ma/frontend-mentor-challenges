import PATHS from "@routes/paths";
import { replaceDashesAndCapitalize } from "@utils/index";
import { NavLink } from "react-router";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Container>
      <InfoSection>
        <InfoHeading>About This Project</InfoHeading>
        <Paragraph>
          All designs and ideas are sourced from{" "}
          <a
            href="https://www.frontendmentor.io/challenges"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor
          </a>
          . You can view the source code for this project on{" "}
          <a
            href="https://github.com/Fil-Ma/frontend-mentor-challenges"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </Paragraph>
      </InfoSection>

      <Description>Here you can find the hosted applications:</Description>
      <AppList>
        {Object.values(PATHS).map((path) => (
          <AppListItem key={path}>
            <StyledNavLink to={path}>
              {replaceDashesAndCapitalize(path)}
            </StyledNavLink>
          </AppListItem>
        ))}
      </AppList>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #f7f7f7;
  height: 100vh;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const AppList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const AppListItem = styled.li`
  margin: 0.8rem 0;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.1rem;
  color: #0077cc;
  transition: color 0.3s ease;

  &:hover {
    color: #005fa3;
  }

  &:active {
    color: #003f6a;
  }
`;

const InfoSection = styled.section`
  margin-top: 3rem;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 800px;
`;

const InfoHeading = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;

  a {
    color: #0077cc;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #005fa3;
    }
  }
`;
