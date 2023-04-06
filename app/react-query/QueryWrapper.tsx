// "use client";

// import { ReactNode } from "react";
// import { QueryClient, QueryClientProvider } from "react-query";

// interface Props {
//   children?: ReactNode;
// }

// const queryClient = new QueryClient();

// const QueryWrapper = ({ children }: Props) => (
//   <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
// );

// export default QueryWrapper;

"use client";

import React, { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

interface Props {
  children?: ReactNode;
}

const QueryWrapper = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    {children}
  </QueryClientProvider>
);

export default QueryWrapper;
