import AddToCartIcon from "@assets/ProductListWithCart/icons/icon-add-to-cart.svg?react";
import DecrementIcon from "@assets/ProductListWithCart/icons/icon-decrement-quantity.svg?react";
import IncrementIcon from "@assets/ProductListWithCart/icons/icon-increment-quantity.svg?react";
import {
  Container,
  Button,
  IconButton,
  Counter,
  Image,
  DetailsContainer,
} from "./MenuItem.atoms";
import { ToggleItemQuantity, TProductItem } from "./types";

interface CardLayoutProps extends Omit<TProductItem, "image"> {
  imageSrc: string;
  children: React.ReactNode;
}

const CardLayout = ({
  imageSrc,
  children,
  category,
  quantity,
  name,
  price,
}: CardLayoutProps) => {
  return (
    <Container $active={quantity > 0}>
      <figure>
        <Image src={imageSrc} alt={name} />
        {children}
      </figure>
      <DetailsContainer>
        <p>{category}</p>
        <p>{name}</p>
        <p>&#36;{price.toFixed(2)}</p>
      </DetailsContainer>
    </Container>
  );
};

const MenuItem = ({
  active = false,
  item,
  toggleItemQuantity,
}: {
  active?: boolean;
  item: TProductItem;
  toggleItemQuantity: ToggleItemQuantity;
}) => {
  const { image, ...rest } = item;

  if (!active) {
    return (
      <CardLayout imageSrc={image.desktop} {...rest}>
        <Button onClick={() => toggleItemQuantity("add")}>
          <AddToCartIcon />
          <span>Add to Cart</span>
        </Button>
      </CardLayout>
    );
  }

  return (
    <CardLayout imageSrc={image.desktop} {...rest}>
      <Counter>
        <IconButton
          role="button"
          onClick={() => toggleItemQuantity("subtract")}
        >
          <DecrementIcon />
        </IconButton>
        <p>{item.quantity}</p>
        <IconButton role="button" onClick={() => toggleItemQuantity("add")}>
          <IncrementIcon />
        </IconButton>
      </Counter>
    </CardLayout>
  );
};

export default MenuItem;
