import { IAccount } from "@/interfacesAndTypes/accounts";

export const getAccounts = (
  type: string,
  page = 1,
  limit = 4
): Promise<IAccount[]> => {
  const TAG = "Turismo en Buenos Aires";
  const HAS_VOUCHER = true;

  const ORDER_BY: { [key: string]: string } = {
    tourism: "distance",
    benefits: "name",
  };
  const FILTER_BY: { [key: string]: string } = {
    tourism: `filterByTag=${TAG}`,
    benefits: `hasVoucher=${HAS_VOUCHER}`,
  };

  return fetch(
    `${process.env.BACKEND_URL}?${FILTER_BY[type]}&orderBy=${ORDER_BY[type]}&page=${page}&limit=${limit}`
  ).then((res) => res.json());
};
