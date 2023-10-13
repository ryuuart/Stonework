import Stonework from "./Stonework";
import Column from "./Column";

interface Props {
  gap?: string;
  content: React.ReactNode[][];
}

export default function ({ content, gap = "0" }: Props) {
  function renderColumns(columnContent: React.ReactNode[][]) {
    const renderedContent = [];

    for (const contentColumn of columnContent) {
      renderedContent.push(<Column>{...contentColumn}</Column>);
    }

    return renderedContent;
  }

  return <Stonework gap={gap}>{renderColumns(content)}</Stonework>;
}
