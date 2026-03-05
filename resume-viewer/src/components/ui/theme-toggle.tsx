import { useEffect, useState } from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { Switch } from "@/components/ui/switch"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark")
    }
    return false
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      root.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [isDark])

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setIsDark(true)
    } else if (savedTheme === "light") {
      setIsDark(false)
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true)
    }
  }, [])

  return (
    <div className="flex items-center gap-1.5">
      <SunIcon className="size-3 text-muted-foreground" />
      <Switch
        size="sm"
        checked={isDark}
        onCheckedChange={setIsDark}
        aria-label="Toggle theme"
      />
      <MoonIcon className="size-3 text-muted-foreground" />
    </div>
  )
}
