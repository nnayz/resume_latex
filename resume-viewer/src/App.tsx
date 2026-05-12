import { useState, useEffect } from "react";
import { GlobalWorkerOptions } from "pdfjs-dist";
import "pdfjs-dist/web/pdf_viewer.css";
import { ThemeToggle } from "./components/ui/theme-toggle";
import { PDFViewer } from "./components/PDFViewer";
import { Switch } from "@/components/ui/switch";

GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.mjs",
  import.meta.url
).toString();

const RESUME_URL = import.meta.env.VITE_RESUME_URL || "/resume.pdf";
const LEBENSLAUF_URL = import.meta.env.VITE_LEBENSLAUF_URL || "/lebenslauf.pdf";

function App() {
  const [isEuropass, setIsEuropass] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("lang") === "de";
  });

  useEffect(() => {
    const url = new URL(window.location.href);
    if (isEuropass) {
      url.searchParams.set("lang", "de");
    } else {
      url.searchParams.delete("lang");
    }
    window.history.replaceState(null, "", url.toString());
  }, [isEuropass]);

  const pdfUrl = isEuropass ? LEBENSLAUF_URL : RESUME_URL;
  const downloadName = isEuropass ? "nasrul_lebenslauf.pdf" : "nasrul_resume.pdf";

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
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-muted-foreground">Europass</span>
              <Switch
                size="sm"
                checked={isEuropass}
                onCheckedChange={setIsEuropass}
                aria-label="Toggle Europass / Lebenslauf"
              />
            </div>
            <a
              href={pdfUrl}
              download={downloadName}
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
          <PDFViewer source={pdfUrl} />
        </div>
      </main>
    </div>
  );
}

export default App;
