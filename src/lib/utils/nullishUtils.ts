export const isNullish = (value: any): boolean => {
  const nullishStrings = ["null", "none", "0", "-1"];
  return (
    (typeof value === "string" &&
      nullishStrings.includes(value.toLowerCase())) ||
    value === null ||
    value === undefined ||
    value === false ||
    value === "" ||
    value === 0 ||
    value === -1
  );
};
