import type { NextApiRequest, NextApiResponse } from "next";

export interface IMenuItemsProps {
  text: string;
  icon: string;
  id: string;
  href: string;
}

interface IErrorResponseProps {
  error: string;
}

type ResponseType = IMenuItemsProps[] | IErrorResponseProps;

const getMenuItems = (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  const menuItems = [
    { text: "Home", icon: "Home", id: "1", href: "/" },
    { text: "Sobre", icon: "Info", id: "2", href: "/sobre" },
    { text: "Contato", icon: "Mail", id: "3", href: "/contato" },
    { text: "Repositórios", icon: "Code", id: "4", href: "/repositorios" },
  ];

  try {
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error in getting Menu Items." });
  }
};

export default getMenuItems;
