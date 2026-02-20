import { GlobalWorkerOptions } from "pdfjs-dist";
import "pdfjs-dist/web/pdf_viewer.css";
import { ThemeToggle } from "./components/ThemeToggle";
import { PDFViewer } from "./components/PDFViewer";

GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.mjs",
  import.meta.url
).toString();

const RESUME_URL = import.meta.env.VITE_RESUME_URL || "/resume.pdf";

function App() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="https://nasrul.info"
            className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
          >
            Resume
          </a>

          <nav className="flex items-center gap-6">
            <a
              href={RESUME_URL}
              download="nasrul_resume.pdf"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Download
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="h-[calc(100vh-100px)] rounded-lg border border-border/60 bg-card overflow-hidden">
            <PDFViewer source={RESUME_URL} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Nasrul Huda</span>
          <a
            href="https://nasrul.info"
            className="hover:text-foreground transition-colors"
          >
            nasrul.info
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
