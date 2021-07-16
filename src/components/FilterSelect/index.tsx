import { ChangeEventHandler, ReactNode, SelectHTMLAttributes } from "react";
import { FilterSelectContainer } from "./FilterSelect.styles";

interface FilterSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}

function FilterSelect({ children, ...props }: FilterSelectProps) {
  return <FilterSelectContainer {...props}>{children}</FilterSelectContainer>;
}

export { FilterSelect };
