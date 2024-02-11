import type { NextApiRequest, NextApiResponse } from "next";

export interface IMenuItemsProps {
  text: string;
  icon: string;
  id: string;
  href: string;
}

const getMenuItems = (
  req: NextApiRequest,
  res: NextApiResponse<IMenuItemsProps[]>
) => {
  const menuItems = [
    { text: "Home", icon: "Home", id: "1", href: "/" },
    { text: "Sobre", icon: "Info", id: "2", href: "/sobre" },
    { text: "Contato", icon: "Mail", id: "3", href: "/contato" },
    { text: "Repositórios", icon: "Code", id: "4", href: "/repositorios" },
  ];

  res.status(200).json(menuItems);
};

export default getMenuItems;
