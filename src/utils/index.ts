const capitalizeFirstLetter = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);

export const replaceDashesAndCapitalize = (text: string) => {
  const textWithoutDashes = text.replaceAll("-", " ");
  return capitalizeFirstLetter(textWithoutDashes);
};

export const formatPrice = (price: string | number) => {
  let result = 0;
  if (typeof price === "string") {
    const floatNumber = parseFloat(price);
    if (!Number.isNaN(floatNumber)) {
      result = floatNumber;
    }
  } else {
    result = price;
  }

  return result.toLocaleString("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
