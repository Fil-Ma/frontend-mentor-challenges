import styled from "styled-components";
import moneyImage from "@assets/EasyBank/image-currency.jpg?inline";
import restaurantImage from "@assets/EasyBank/image-restaurant.jpg?inline";
import planeImage from "@assets/EasyBank/image-plane.jpg?inline";
import confettiImage from "@assets/EasyBank/image-confetti.jpg?inline";

type TArticle = {
  image: string;
  author: string;
  title: string;
  description: string;
};

const articles: TArticle[] = [
  {
    image: moneyImage,
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    description: `The world is getting smaller and we're becoming more
    mobile. So why should you be forced to only receive money in a single`,
  },
  {
    image: restaurantImage,
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    description: `
      Our simple budgeting feature allows you to separate out your spending and set
      realistic limits each month. That means you
    `,
  },
  {
    image: planeImage,
    author: "Wilson Hutton",
    title: "Taky your Easybank card wherever you go",
    description: `
      We want you to enjoy your travels. This is why we don't charge any fees on purchases
      while you're abroad. We'll even show you
    `,
  },
  {
    image: confettiImage,
    author: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    description: `After a lot of hard work by the whole team, we're excited to launch our
    closed beta. It's easy to request an invite through the site`,
  },
];

const ArticlesSection = () => {
  return (
    <Container>
      <h2>Latest Articles</h2>
      <div>
        {articles.map((article) => (
          <Article key={article.title} {...article} />
        ))}
      </div>
    </Container>
  );
};

export default ArticlesSection;

const Container = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 42px 12px;

  h2 {
    font-size: 1.8rem;
    margin-block: 28px 24px !important;
  }

  > div {
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 16px;
  }

  @media (max-width: 480px) {
    > div {
      flex-direction: column;
      align-items: center;
      gap: 32px;
    }
  }
`;

const Article = ({ image, author, title, description }: TArticle) => {
  return (
    <StyledArticle>
      <img src={image} alt={title} />
      <div>
        <p className="article-caption">By {author}</p>
        <h4>{title}</h4>
        <p>{description} ...</p>
      </div>
    </StyledArticle>
  );
};

const StyledArticle = styled.article`
  flex: 1 1 230px;
  max-width: 25%;
  min-width: 230px;

  img {
    width: 100%;
    height: 200px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }

  div {
    padding: 12px 24px;
  }

  .article-caption {
    font-size: 0.7rem;
    line-height: 0.7rem;
    margin-block: 8px;
  }

  h4 {
    margin-block: 8px;
  }

  p {
    margin: 0 !important;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    margin-inline: 12px;
  }
`;
