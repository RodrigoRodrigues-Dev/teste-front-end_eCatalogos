import type { ReactNode } from "react";
import { ContainerWrapper } from "./styles";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
