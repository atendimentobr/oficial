"use client"

import { useEffect, useState } from "react"
import { MessageCircle } from "lucide-react"

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const totalDuration = 3000
    const interval = 30
    const steps = totalDuration / interval
    const increment = 100 / steps

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment
        if (next >= 100) {
          clearInterval(timer)
          setTimeout(() => onComplete(), 150)
          return 100
        }
        return next
      })
    }, interval)

    return () => clearInterval(timer)
  }, [onComplete])

  const pct = Math.round(progress)

  return (
    <div className="relative min-h-dvh flex flex-col items-center justify-center bg-background px-8">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, hsl(210 90% 58% / 0.14), transparent 70%)",
        }}
        aria-hidden="true"
      />
      {/* Icone */}
      <div className="relative w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/30 ring-4 ring-primary/15">
        <MessageCircle className="w-10 h-10 text-secondary fill-secondary" />
      </div>

      {/* Titulo */}
      <h2 className="text-2xl font-bold text-primary mb-1 text-center">
        Atendimento Online
      </h2>
      <p className="text-sm text-muted-foreground mb-6 text-center">
        Preparando seu atendimento...
      </p>

      {/* Barra de progresso */}
      <div className="w-full max-w-xs">
        <div className="w-full h-3 rounded-full bg-muted overflow-hidden mb-1">
          <div
            className="h-full rounded-full bg-primary transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground text-right mb-6">
          {pct}%
        </p>
      </div>

      {/* Indicadores de pontos */}
      <div className="flex items-center gap-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full transition-colors duration-300"
            style={{
              backgroundColor:
                pct >= (i + 1) * 33
                  ? "hsl(var(--primary))"
                  : "hsl(var(--muted))",
            }}
          />
        ))}
      </div>
    </div>
  )
}
