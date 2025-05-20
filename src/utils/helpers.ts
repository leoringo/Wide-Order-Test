import moment from "moment";
import CryptoJS from "crypto-js";

const secret = import.meta.env.VITE_SECRET;

export const dateFormatter = (date: Date) =>
  moment(date).format("D MMMM HH:mm"); // !! -- example output: "26 February 14:25"

export const setSessionStorage = (key: string, value: unknown) => {
  const stringified = JSON.stringify(value);
  const encryptedValue = CryptoJS.AES.encrypt(stringified, secret).toString();

  sessionStorage.setItem(key, encryptedValue);
};

export const getSessionStorage = (key: string): unknown => {
  const encryptedValue = sessionStorage.getItem(key);
  if (!encryptedValue) return null;

  try {
    const bytes = CryptoJS.AES.decrypt(encryptedValue, secret);
    const decryptedValue = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedValue);
  } catch (error) {
    console.error("Failed to decrypt sessionStorage data:", error);
    return null;
  }
};

export const formattedCurrency = (amount: number) => // !! -- Rp. 1.000.000
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
