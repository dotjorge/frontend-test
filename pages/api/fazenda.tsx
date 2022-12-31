import type { NextApiRequest, NextApiResponse } from "next";
import fazenda from "mocks/fazenda.json";
import { Fazenda } from "types";

export default (req: NextApiRequest, res: NextApiResponse<Fazenda>) => {
  res.status(200).json(fazenda);
};
