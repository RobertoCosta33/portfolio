import { createContext, useContext, useState, ReactNode } from "react";

interface IMenuContext {
  visible: boolean;
  setIsVisible: (visible: boolean) => void;
}

interface IMenuProviderProps {
  children?: ReactNode;
}

const MenuContext = createContext<IMenuContext>({
  visible: false,
  setIsVisible: () => {},
});

export const MenuProvider = ({ children }: IMenuProviderProps) => {
  const [visible, setIsVisible] = useState(false);

  return (
    <MenuContext.Provider value={{ visible, setIsVisible }}>
      {children}
    </MenuContext.Provider>
  );
};

export function useMenu() {
  const context = useContext(MenuContext);

  return context;
}

export const MenuConsumer = MenuContext.Consumer;
