import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../models/IProduct";
import { IResponse } from "../models/IResponse";
import { ISale } from "../models/ISale";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://628e254ba339dfef87a86df6.mockapi.io/",
  }),
  endpoints: (builder) => ({
    fetchAllProducts: builder.query<IProduct[], IResponse>({
      query: (arg) => {
        const { page = 1, limit = 6, sortBy, filters, search, order } = arg;
        return {
          url: "items/",
          params: {
            page,
            limit,
            sortBy,
            filters,
            order,
            search,
          },
        };
      },
    }),
    fetchSale: builder.query<ISale[], string>({
      query: () => {
        return {
          url: "sale/",
        };
      },
    }),
    fetchOneProduct: builder.query<IProduct[], string>({
      query: (id) => {
        return {
          url: "items/",
          params: {
            id,
          },
        };
      },
    }),
  }),
});
