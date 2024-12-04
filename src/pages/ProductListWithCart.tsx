import {
  ItemsWrapper,
  PageAside,
  PageContainer,
  Cart,
  CartEmptyState,
} from "@components/ProductListWithCart/layout.atoms";
import menuItems from "@assets/ProductListWithCart/menuItems.json";
import MenuItem from "@components/ProductListWithCart/MenuItem";
import { useCallback, useMemo, useState } from "react";
import {
  ToggleItemQuantity,
  TProductItem,
} from "@components/ProductListWithCart/types";
import OrderInfo from "@components/ProductListWithCart/OrderInfo";
import CartItem from "@components/ProductListWithCart/CartItem";
import OrderConfirmedModal from "@components/ProductListWithCart/OrderConfirmedModal";
import OrderItem from "@components/ProductListWithCart/OrderItem";
import OrderConfirmedIcon from "@assets/ProductListWithCart/icons/icon-order-confirmed.svg?react";
import OrderTotal, {
  Button,
} from "@components/ProductListWithCart/Order.atoms";
import ModalTitle from "@components/ProductListWithCart/ModalTitle";

type ToggleQuantityCallback = (name: string) => ToggleItemQuantity;

const generateItemsList = () => menuItems.map((i) => ({ ...i, quantity: 0 }));

const ProductListWithCart = () => {
  const [itemsList, setItemsList] = useState<TProductItem[]>(generateItemsList);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleItemQuantity: ToggleQuantityCallback = useCallback(
    (name) => (operation) => {
      setItemsList((prev) =>
        prev.map((curr) => {
          if (curr.name !== name) return curr;

          const newQuantity =
            operation === "add" ? curr.quantity + 1 : curr.quantity - 1;
          return {
            ...curr,
            quantity: newQuantity,
          };
        }),
      );
    },
    [],
  );

  const removeItemFromCart = (name: string) => () => {
    setItemsList((prev) =>
      prev.map((curr) => {
        if (curr.name !== name) return curr;

        return {
          ...curr,
          quantity: 0,
        };
      }),
    );
  };

  const [totalQuantity, totalPrice, cartItems] = useMemo(() => {
    let totalQuantity = 0;
    let totalPrice = 0;
    const cartItems: TProductItem[] = [];

    itemsList.forEach((item) => {
      if (item.quantity > 0) {
        cartItems.push(item);
        totalQuantity += item.quantity;
        totalPrice += item.price;
      }
    });

    return [totalQuantity, totalPrice, cartItems];
  }, [itemsList]);

  const onClose = () => {
    setIsModalOpen(false);
    setItemsList(generateItemsList);
  };

  const onSubmit = () => setIsModalOpen(true);

  return (
    <PageContainer>
      <ItemsWrapper title="Desserts">
        {itemsList.map((item) => (
          <MenuItem
            key={item.name}
            active={item.quantity > 0}
            item={item}
            toggleItemQuantity={toggleItemQuantity(item.name)}
          />
        ))}
      </ItemsWrapper>
      <PageAside>
        <h3>Your Cart ({totalQuantity})</h3>
        {cartItems.length === 0 ? (
          <CartEmptyState />
        ) : (
          <>
            <Cart>
              {cartItems.map((item) => (
                <CartItem
                  key={item.name}
                  {...item}
                  onRemove={removeItemFromCart(item.name)}
                />
              ))}
            </Cart>
            <OrderInfo total={totalPrice} onSubmit={onSubmit} />
          </>
        )}
      </PageAside>
      <OrderConfirmedModal open={isModalOpen} onClose={onClose}>
        <OrderConfirmedIcon />
        <ModalTitle
          title="Order Confirmed"
          subtitle="We hope you enjoy your food!"
        />
        <Cart>
          {cartItems.map((item) => (
            <OrderItem key={item.name} {...item} />
          ))}
        </Cart>
        <OrderTotal total={totalPrice} />
        <Button onClick={onClose}>Start New Order</Button>
      </OrderConfirmedModal>
    </PageContainer>
  );
};

export default ProductListWithCart;
