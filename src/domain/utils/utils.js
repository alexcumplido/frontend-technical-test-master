export const groupItems = (items) => {
  return items.reduce((acc, val) => {
    acc[val] = acc[val] === undefined ? 1 : (acc[val] += 1);
    return acc;
  }, {});
};

export const getFileExtension = (item) => item.path.split(".").pop();
