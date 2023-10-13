import Styles from "@styles/stonework.module.css";

interface Props {
  children?: React.ReactNode;
}

export default function ({ children }: Props) {
  return <div className={`${Styles.stonework_column}`}>{children}</div>;
}
