const BIG_NUMBER = 3000;

export const largeData = new Array(BIG_NUMBER).fill(0).map((_, i) => {
  return {
    id: i,
    isActive: i == BIG_NUMBER - 10,
  };
});
