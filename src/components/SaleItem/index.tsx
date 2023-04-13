import { FC, memo } from "react";

import { ISale } from "../../models";

export const SaleItem: FC<ISale> = memo(({ image }) => {
  return (
    <div>
      <img src={image} alt="placeholder" />
    </div>
  );
});
