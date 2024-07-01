// src/utils/normalizeString.ts
const normalizeString = (str: string): string => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/-/g, "")
    .toLowerCase();
};

export default normalizeString;
