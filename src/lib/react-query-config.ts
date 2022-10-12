import { QueryClientConfig } from "@tanstack/react-query";

export const config: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
};
