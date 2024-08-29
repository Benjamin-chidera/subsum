export const FormatCurrency = (value: number) => {
  return value.toLocaleString("en-US", { style: "currency", currency: "NGN" });
};
