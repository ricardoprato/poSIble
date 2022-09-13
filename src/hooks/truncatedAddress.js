import { useMemo } from "react";

export const useTruncatedAddress = (account) => {
  const truncated = useMemo(
    () => `${account?.substr(0, 5)}...${account?.substr(-4)}`,
    [account]
  );

  return truncated;
};

export const usePercent = (part, all) => {
  return ((part / all) * 100).toFixed(2);
};
