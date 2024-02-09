export default function deepClone(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const newObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    newObj[key] = deepClone(obj[key]);
  }

  return newObj;
}
