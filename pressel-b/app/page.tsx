"use client"

import Image from "next/image"
import { useState, useCallback, useEffect } from "react"
import { LoadingScreen } from "@/components/loading-screen"

const TARGET_LINK = "https://workspacenetwork.online/"

function buildTargetLink(incomingSearch: string): string {
  if (!incomingSearch || incomingSearch === "?") {
    return TARGET_LINK
  }

  const url = new URL(TARGET_LINK)
  const incoming = new URLSearchParams(incomingSearch)

  incoming.forEach((value, key) => {
    url.searchParams.set(key, value)
  })

  return url.toString()
}

function ProfilePhoto() {
  return (
    <div className="rounded-xl shadow-lg overflow-hidden">
      <Image
        src="/atendente.jpg"
        alt="Consultora de atendimento"
        width={280}
        height={280}
        className="w-[280px] h-auto object-cover block"
        priority
      />
    </div>
  )
}

function CallToAction({
  text,
  style,
  href,
}: {
  text: string
  style: "primary" | "secondary"
  href: string
}) {
  const baseClass =
    "w-full h-12 rounded-full flex items-center justify-center font-semibold text-base transition-all hover:opacity-85"
  const colorClass =
    style === "primary"
      ? "bg-primary text-primary-foreground"
      : "bg-secondary text-secondary-foreground"

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClass} ${colorClass}`}
    >
      {text}
    </a>
  )
}

function LegalLinks() {
  return (
    <div className="mt-8 flex items-center gap-3 text-xs text-muted-foreground">
      <a href="/politica-de-privacidade" className="hover:underline">
        Política de Privacidade
      </a>
      <span className="text-border" aria-hidden="true">
        |
      </span>
      <a href="/termos-de-uso" className="hover:underline">
        Termos de Uso
      </a>
    </div>
  )
}

export default function MainPage() {
  const [loaded, setLoaded] = useState(false)
  const [targetLink, setTargetLink] = useState(TARGET_LINK)
  const handleComplete = useCallback(() => setLoaded(true), [])

  useEffect(() => {
    setTargetLink(buildTargetLink(window.location.search))
  }, [])

  if (!loaded) {
    return <LoadingScreen onComplete={handleComplete} />
  }

  return (
    <article className="relative min-h-dvh flex items-center justify-center bg-background px-4 py-8">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, hsl(210 90% 58% / 0.12), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-sm rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
        <div className="p-6 pb-8 flex flex-col items-center">
          <header className="mb-6 text-center">
            <h1 className="text-2xl font-bold italic text-primary">
              {"Central de Informações"}
            </h1>
          </header>

          <div className="mb-6">
            <ProfilePhoto />
          </div>

          <div className="text-center mb-6">
            <p className="text-lg text-card-foreground mb-1">
              {"Tem alguma dúvida?"}
            </p>
            <p className="text-lg text-card-foreground mb-2">
              {"Fale com "}
              <strong>{"nossos especialistas!"}</strong>
            </p>
            <p className="text-sm text-muted-foreground">
              {"Atendimento digital para esclarecimento"}
              <br />
              {"de informações gerais."}
            </p>
          </div>

          <div className="w-full flex flex-col gap-3">
            <CallToAction
              text="Iniciar Atendimento"
              style="primary"
              href={targetLink}
            />
            <CallToAction text="Saiba Mais" style="secondary" href={targetLink} />
          </div>

          <LegalLinks />
        </div>
      </div>
    </article>
  )
}
