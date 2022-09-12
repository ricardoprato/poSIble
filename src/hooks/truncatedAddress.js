import { useMemo } from "react";

const truncatedAddress = (account) => {
  const truncated = useMemo(
    () => `${account?.substr(0, 6)}...${account?.substr(-4)}`,
    [account]
  );

  return truncated;
};

export const usePercent = (part, all) => {
  return ((part / all) * 100).toFixed(2);
};

export default truncatedAddress;
