import Styles from "@styles/stonework.module.css";
import { forwardRef } from "react";

interface Props {
  children?: React.ReactNode;
}

export default forwardRef((props: Props, ref: React.Ref<HTMLDivElement>) => {
  return (
    <div className={`${Styles.item}`} ref={ref}>
      {props.children}
    </div>
  );
});
