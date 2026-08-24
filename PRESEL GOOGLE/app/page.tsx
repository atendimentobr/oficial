"use client"

import { useEffect, useState } from "react"
import { Lock, Check, ArrowLeft } from "lucide-react"

const TARGET_LINK = "https://lively-cake-0580.belopudim2026.workers.dev"

type Screen = "main" | "privacy" | "terms"

function LoadingScreen({ progress }: { progress: number }) {
  const pct = Math.round(progress)
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-6 py-8 animate-[fadeIn_0.4s_ease-out]">
      <div className="mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-primary/10 shadow-[0_0_0_8px_hsl(var(--primary)/0.1)] animate-[pulseRing_2s_infinite]">
        <Lock className="h-8 w-8 text-primary" strokeWidth={2} />
      </div>
      <h2 className="mb-8 text-center text-xl font-bold text-foreground">Ambiente Seguro</h2>

      <div className="w-full max-w-[280px]">
        <div className="mb-2 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full transition-[width] duration-100 ease-linear"
            style={{
              width: `${pct}%`,
              background: "linear-gradient(90deg, hsl(var(--primary)), hsl(243 75% 74%))",
            }}
          />
        </div>
        <p className="text-center text-sm font-semibold text-primary">{pct}%</p>
      </div>
    </div>
  )
}

function MainScreen({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-page-gradient px-6 py-8 animate-[fadeIn_0.4s_ease-out]">
      <div className="w-full max-w-[400px] rounded-[1.25rem] border border-muted/60 bg-card shadow-xl">
        <div className="flex flex-col items-center px-6 py-10">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-secondary/15">
            <Check className="h-10 w-10 text-secondary" strokeWidth={2.5} />
          </div>

          <div className="mb-8 text-center">
            <h1 className="mb-3 text-2xl font-extrabold leading-tight text-card-foreground text-balance">
              Conexão Estabelecida
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground text-pretty">
              O sistema foi carregado com sucesso. Avance para iniciar o preenchimento ou consultar o guia oficial.
            </p>
          </div>

          <div className="mb-6 w-full">
            <a
              href={TARGET_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[52px] w-full items-center justify-center rounded-xl bg-secondary text-[1.05rem] font-bold text-secondary-foreground shadow-[0_4px_12px_hsl(var(--secondary)/0.3)] transition-transform hover:shadow-[0_6px_16px_hsl(var(--secondary)/0.4)] active:scale-[0.98]"
            >
              ACESSAR PORTAL AGORA
            </a>
          </div>

          <div className="w-full border-t border-muted pt-6 text-center">
            <div className="mb-4 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
              <button
                type="button"
                onClick={() => onNavigate("privacy")}
                className="hover:underline"
              >
                Política de Privacidade
              </button>
              <span aria-hidden="true" className="text-border">
                |
              </span>
              <button type="button" onClick={() => onNavigate("terms")} className="hover:underline">
                Termos de Uso
              </button>
            </div>
            <p className="px-2 text-[0.7rem] leading-relaxed text-muted-foreground">
              Este portal tem caráter estritamente informativo e atua de forma independente. Não possuímos vínculo com o
              Google, YouTube ou entidades governamentais.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

function LegalNotice() {
  return (
    <div className="mt-8 rounded-lg border border-border bg-muted/50 p-5">
      <h2 className="mb-2 mt-0 text-base font-bold text-foreground">Aviso Importante</h2>
      <p className="m-0 text-sm text-muted-foreground">
        Este portal tem caráter estritamente informativo e atua de forma independente. Não possuímos vínculo com o
        Google, YouTube ou entidades governamentais. Todo o conteúdo aqui apresentado tem caráter meramente informativo.
      </p>
    </div>
  )
}

function BackLink({ onBack }: { onBack: () => void }) {
  return (
    <button
      type="button"
      onClick={onBack}
      className="mb-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
    >
      <ArrowLeft className="h-4 w-4" />
      Voltar ao Início
    </button>
  )
}

function PrivacyScreen({ onBack }: { onBack: () => void }) {
  return (
    <section className="flex min-h-dvh justify-center px-4 py-8 animate-[fadeIn_0.4s_ease-out]">
      <div className="h-fit w-full max-w-[680px] rounded-xl bg-card p-8 shadow-lg">
        <BackLink onBack={onBack} />
        <h1 className="mb-6 text-2xl font-extrabold text-card-foreground">Política de Privacidade</h1>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          A sua privacidade é importante para nós. Esta Política de Privacidade descreve como coletamos, usamos e
          protegemos as informações dos visitantes deste site.
        </p>

        <h2 className="mb-2 mt-6 text-lg font-bold text-card-foreground">1. Informações Coletadas</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          Este site pode coletar informações não pessoais automaticamente, como tipo de navegador, idioma, horário de
          acesso e páginas visitadas. Essas informações são utilizadas exclusivamente para fins de análise e melhoria da
          experiência do usuário.
        </p>

        <h2 className="mb-2 mt-6 text-lg font-bold text-card-foreground">2. Uso de Cookies e Tecnologias</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          Este site utiliza cookies e tecnologias semelhantes, incluindo as fornecidas por serviços de terceiros, como o
          Google Ads e o Google Analytics, para:
        </p>
        <ul className="mb-4 list-disc pl-6 leading-relaxed text-muted-foreground">
          <li className="mb-2">Exibir anúncios personalizados com base nos interesses do usuário;</li>
          <li className="mb-2">Medir o desempenho de campanhas publicitárias;</li>
          <li className="mb-2">Analisar o tráfego e o comportamento de navegação;</li>
        </ul>

        <h2 className="mb-2 mt-6 text-lg font-bold text-card-foreground">3. Google Ads e Remarketing</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          Utilizamos o Google Ads para veicular anúncios em plataformas de terceiros. O Google pode utilizar cookies
          para exibir anúncios com base em visitas anteriores a este site. Os dados coletados pelo Google Ads são
          tratados de acordo com a Política de Privacidade do Google:{" "}
          <a
            className="text-primary underline"
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            policies.google.com/privacy
          </a>
          .
        </p>

        <h2 className="mb-2 mt-6 text-lg font-bold text-card-foreground">4. Compartilhamento de Dados</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros.
        </p>

        <LegalNotice />
      </div>
    </section>
  )
}

function TermsScreen({ onBack }: { onBack: () => void }) {
  return (
    <section className="flex min-h-dvh justify-center px-4 py-8 animate-[fadeIn_0.4s_ease-out]">
      <div className="h-fit w-full max-w-[680px] rounded-xl bg-card p-8 shadow-lg">
        <BackLink onBack={onBack} />
        <h1 className="mb-6 text-2xl font-extrabold text-card-foreground">Termos de Uso</h1>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          Ao acessar e utilizar este site, você concorda com os seguintes Termos de Uso. Caso não concorde com qualquer
          uma das condições abaixo, recomendamos que não utilize o site.
        </p>

        <h2 className="mb-2 mt-6 text-lg font-bold text-card-foreground">1. Objetivo do Site</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          Este site tem como objetivo fornecer informações gerais ao público. O conteúdo apresentado é de caráter
          exclusivamente informativo e não constitui assessoria, consultoria ou prestação de serviços oficiais de
          qualquer natureza.
        </p>

        <h2 className="mb-2 mt-6 text-lg font-bold text-card-foreground">2. Uso de Cookies e Publicidade</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          Este site utiliza cookies e tecnologias de rastreamento, incluindo o Google Ads, para fins de publicidade e
          análise. Ao navegar neste site, você consente com o uso dessas tecnologias. Os anúncios exibidos podem ser
          personalizados com base no seu histórico.
        </p>

        <h2 className="mb-2 mt-6 text-lg font-bold text-card-foreground">3. Propriedade Intelectual</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          O conteúdo deste site é protegido por direitos autorais. A reprodução total ou parcial sem autorização prévia
          é proibida.
        </p>

        <h2 className="mb-2 mt-6 text-lg font-bold text-card-foreground">4. Links para Terceiros</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          Este site pode conter links para sites de terceiros. Não temos controle sobre o conteúdo ou as práticas de
          privacidade desses sites e não nos responsabilizamos por eles.
        </p>

        <LegalNotice />
      </div>
    </section>
  )
}

export default function PresellPage() {
  const [progress, setProgress] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [screen, setScreen] = useState<Screen>("main")

  useEffect(() => {
    const totalDuration = 2500
    const interval = 25
    const increment = 100 / (totalDuration / interval)

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment
        if (next >= 100) {
          clearInterval(timer)
          setTimeout(() => setLoaded(true), 200)
          return 100
        }
        return next
      })
    }, interval)

    return () => clearInterval(timer)
  }, [])

  const handleNavigate = (s: Screen) => {
    setScreen(s)
    window.scrollTo(0, 0)
  }

  if (!loaded) {
    return <LoadingScreen progress={progress} />
  }

  if (screen === "privacy") {
    return <PrivacyScreen onBack={() => handleNavigate("main")} />
  }

  if (screen === "terms") {
    return <TermsScreen onBack={() => handleNavigate("main")} />
  }

  return <MainScreen onNavigate={handleNavigate} />
}
