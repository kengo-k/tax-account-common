export const sleep = (ms: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, ms);
  });
};
