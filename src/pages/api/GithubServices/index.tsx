import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export interface IGetRepoInfosProps {
  id: number | string;
  name: string;
  description: string;
  html_url: string
}

const getReposInfos = async (
  req: NextApiRequest,
  res: NextApiResponse<IGetRepoInfosProps[]>
) => {
  try {
    const { data } = await axios.get(
      `https://api.github.com/users/RobertoCosta33/repos`
    );

    res.status(200).json(data);
  } catch (error) {
    console.error({ error, function: "getRepositorysInfos" });
    throw "Dados não encontrados";
  }
};

export default getReposInfos;
