import type { NextApiRequest, NextApiResponse } from "next";

export interface IExamplesItemsProps {
  text: string;
  icon: string;
  id: string;
  href: string;
}

const getExamplesItems = (
  req: NextApiRequest,
  res: NextApiResponse<IExamplesItemsProps[]>
) => {
  const exampleItems = [
    {
      text: "Projetos 3D",
      icon: "ThreeDRotation",
      id: "5",
      href: "/examples/projetos_3d",
    },
    { text: "CRUD", icon: "Edit", id: "6", href: "/examples/crud" },
    { text: "Lista", icon: "List", id: "7", href: "/examples/lista" },
    {
      text: "Formulário",
      icon: "Description",
      id: "8",
      href: "/examples/formulario",
    },
  ];

  res.status(200).json(exampleItems);
};

export default getExamplesItems;
