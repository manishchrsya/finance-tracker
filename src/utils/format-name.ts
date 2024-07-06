export const getFirstName = (name: string) => {
  const firstName = (name ?? "").split(" ")[0];
  return firstName;
};
