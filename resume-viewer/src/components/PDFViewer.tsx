import { Root, Pages, Page, CanvasLayer, TextLayer } from "@anaralabs/lector";

interface PDFViewerProps {
  source: string;
}

export function PDFViewer({ source }: PDFViewerProps) {
  return (
    <Root
      source={source}
      isZoomFitWidth={true}
      className="w-full h-full overflow-auto"
      loader={
        <div className="flex items-center justify-center h-full">
          <span className="text-sm text-muted-foreground">Loading...</span>
        </div>
      }
    >
      <Pages className="py-6 px-4 flex flex-col items-center gap-6 dark:invert-[94%] dark:hue-rotate-180 dark:brightness-[80%] dark:contrast-[228%]">
        <Page>
          <CanvasLayer />
          <TextLayer />
        </Page>
      </Pages>
    </Root>
  );
}
