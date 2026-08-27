import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Termos de Uso - Central de Informações",
  description: "Condições de uso deste site.",
  robots: { index: false, follow: false, nocache: true },
}

function ReturnButton() {
  return (
    <a
      href="/"
      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:underline mb-6"
    >
      {"← Voltar"}
    </a>
  )
}

function TopicTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-semibold text-lg text-primary">{children}</h2>
  )
}

function ImportantNotice() {
  return (
    <div className="mt-4 p-4 rounded-xl border border-border bg-muted">
      <h2 className="font-bold text-sm text-primary mb-2">
        {"Aviso Importante"}
      </h2>
      <p className="text-xs text-muted-foreground leading-relaxed">
        {"Este site não possui qualquer vínculo com órgãos governamentais, instituições financeiras ou entidades públicas. Trata-se de uma página exclusivamente informativa, sem fins de prestação de serviços oficiais, governamentais ou financeiros. Todo o conteúdo aqui apresentado tem caráter meramente informativo."}
      </p>
    </div>
  )
}

export default function TermsPage() {
  return (
    <div className="min-h-dvh flex justify-center bg-background px-4 py-10">
      <main className="w-full max-w-2xl rounded-2xl bg-card shadow-xl px-6 py-8 sm:px-10">
        <ReturnButton />

        <h1 className="text-2xl font-bold text-primary mb-6">
          Termos de Uso
        </h1>

        <div className="flex flex-col gap-5 text-sm text-card-foreground leading-relaxed">
          <p>
            {"Ao acessar e utilizar este site, você concorda com os seguintes Termos de Uso. Caso não concorde com qualquer uma das condições abaixo, recomendamos que não utilize o site."}
          </p>

          <TopicTitle>{"1. Objetivo do Site"}</TopicTitle>
          <p>
            {"Este site tem como objetivo fornecer informações gerais ao público. O conteúdo apresentado é de caráter exclusivamente informativo e não constitui assessoria, consultoria ou prestação de serviços de qualquer natureza."}
          </p>

          <TopicTitle>{"2. Uso de Cookies e Publicidade"}</TopicTitle>
          <p>
            {"Este site utiliza cookies e tecnologias de rastreamento fornecidas por terceiros, incluindo o Google Ads, para fins de publicidade e análise de tráfego. Ao navegar neste site, você consente com o uso dessas tecnologias conforme descrito em nossa Política de Privacidade."}
          </p>
          <p>
            {"Os anúncios exibidos podem ser personalizados com base no seu histórico de navegação e interesses. O Google pode utilizar informações coletadas para exibir anúncios relevantes em outros sites parceiros da Rede de Display do Google."}
          </p>

          <TopicTitle>{"3. Propriedade Intelectual"}</TopicTitle>
          <p>
            {"Todo o conteúdo deste site, incluindo textos, imagens, logotipos e layout, é protegido por direitos autorais. A reprodução total ou parcial sem autorização prévia é proibida."}
          </p>

          <TopicTitle>{"4. Limitação de Responsabilidade"}</TopicTitle>
          <p>
            {"As informações disponibilizadas neste site são fornecidas \"como estão\", sem garantias de qualquer tipo, expressas ou implícitas. Não nos responsabilizamos por decisões tomadas com base nas informações aqui contidas."}
          </p>

          <TopicTitle>{"5. Links para Terceiros"}</TopicTitle>
          <p>
            {"Este site pode conter links para sites de terceiros. Não temos controle sobre o conteúdo ou as práticas de privacidade desses sites e não nos responsabilizamos por eles. O acesso a links externos é por conta e risco do usuário."}
          </p>

          <TopicTitle>{"6. Google Ads e Coleta de Dados"}</TopicTitle>
          <p>
            {"Ao utilizar este site, você reconhece que o Google Ads pode coletar dados de navegação para veiculação de anúncios personalizados. Esses dados são processados de acordo com os termos e a política de privacidade do Google. Você pode gerenciar suas preferências de anúncios em: "}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary"
            >
              adssettings.google.com
            </a>
            {"."}
          </p>

          <TopicTitle>{"7. Alterações nos Termos"}</TopicTitle>
          <p>
            {"Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento, sem aviso prévio. O uso continuado do site após eventuais alterações constitui aceitação dos novos termos."}
          </p>

          <ImportantNotice />
        </div>
      </main>
    </div>
  )
}
