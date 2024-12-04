type TProductImage = "thumbnail" | "mobile" | "tablet" | "desktop";

export type TProductItem = {
  image: Record<TProductImage, string>;
  name: string;
  category: string;
  price: number;
  quantity: number;
};

type TOperation = "add" | "subtract";

export type ToggleItemQuantity = (operation: TOperation) => void;
