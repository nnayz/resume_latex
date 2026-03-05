import { GlobalWorkerOptions } from "pdfjs-dist";
import "pdfjs-dist/web/pdf_viewer.css";
import { ThemeToggle } from "./components/ui/theme-toggle";
import { PDFViewer } from "./components/PDFViewer";

GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.mjs",
  import.meta.url
).toString();

const RESUME_URL = import.meta.env.VITE_RESUME_URL || "/resume.pdf";

function App() {
  return (
    <div className="h-screen flex flex-col bg-background font-sans">
      <header className="shrink-0 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="max-w-3xl mx-auto px-4 py-2 flex items-center justify-between">
          <a
            href="https://nasrul.info"
            className="text-xs font-medium text-foreground hover:text-muted-foreground transition-colors"
          >
            Resume
          </a>

          <nav className="flex items-center gap-4">
            <a
              href={RESUME_URL}
              download="nasrul_resume.pdf"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Download
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="flex-1 min-h-0">
        <div className="h-full max-w-3xl mx-auto">
          <PDFViewer source={RESUME_URL} />
        </div>
      </main>
    </div>
  );
}

export default App;
