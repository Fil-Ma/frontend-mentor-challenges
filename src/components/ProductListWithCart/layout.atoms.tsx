import colors from "@constants/colors";
import styled from "styled-components";
import EmptyStateIcon from "@assets/ProductListWithCart/icons/illustration-empty-cart.svg?react";

export const PageContainer = styled.div`
  padding: 64px;
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: flex-start;
  min-width: 320px;

  aside {
    width: 320px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PageAside = styled.aside`
  width: 320px;
  min-width: 320px;
  padding: 16px;
  background-color: white;
  border-radius: 8px;

  h3 {
    color: ${colors["product-list-with-cart"].red};
    font-weight: 400;
    font-size: 1.2rem;
    margin-block: 1rem;
  }
`;

export const Cart = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const PageContent = styled.div`
  h1 {
    margin: 0;
  }

  main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
    align-items: flex-start;
    margin-top: 16px;
  }
`;

export const ItemsWrapper = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <PageContent>
    <h1>{title}</h1>
    <main>{children}</main>
  </PageContent>
);

const EmptyStateWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  p {
    color: ${colors["product-list-with-cart"].red};
    font-size: 0.8rem;
    margin: 0;
  }
`;

export const CartEmptyState = () => {
  return (
    <EmptyStateWrapper>
      <EmptyStateIcon />
      <p>Your added items will appear here</p>
    </EmptyStateWrapper>
  );
};
