import colors from "@constants/colors";
import styled from "styled-components";

const { neutral } = colors.blogr;

type Items = {
  label: string;
  url?: string;
};

const FooterList = ({ title, items }: { title: string; items: Items[] }) => {
  return (
    <div>
      <CategoryTitle>{title}</CategoryTitle>
      <List>
        {items.map(({ label, url }) => (
          <CategoryItem key={label}>
            <a href={url || "#"}>{label}</a>
          </CategoryItem>
        ))}
      </List>
    </div>
  );
};

export default FooterList;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const CategoryTitle = styled.h4`
  color: ${neutral.white};
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 500;
  margin-bottom: 16px;

  @media (max-width: 640px) {
    text-align: center;
  }
`;

const CategoryItem = styled.li`
  a {
    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: 100;
    text-decoration: none;
    color: ${neutral.white};
  }

  @media (max-width: 640px) {
    text-align: center;
  }
`;
