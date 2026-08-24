import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidade - Central de Informações",
  description: "Informações sobre privacidade e uso de dados.",
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

export default function PrivacyPage() {
  return (
    <div className="min-h-dvh flex justify-center bg-background px-4 py-10">
      <main className="w-full max-w-2xl rounded-2xl bg-card shadow-xl px-6 py-8 sm:px-10">
        <ReturnButton />

        <h1 className="text-2xl font-bold text-primary mb-6">
          Política de Privacidade
        </h1>

        <div className="flex flex-col gap-5 text-sm text-card-foreground leading-relaxed">
          <p>
            {"A sua privacidade é importante para nós. Esta Política de Privacidade descreve como coletamos, usamos e protegemos as informações dos visitantes deste site."}
          </p>

          <TopicTitle>{"1. Informações Coletadas"}</TopicTitle>
          <p>
            {"Este site pode coletar informações não pessoais automaticamente, como tipo de navegador, idioma, horário de acesso e páginas visitadas. Essas informações são utilizadas exclusivamente para fins de análise e melhoria da experiência do usuário."}
          </p>

          <TopicTitle>{"2. Uso de Cookies e Tecnologias de Rastreamento"}</TopicTitle>
          <p>
            {"Este site utiliza cookies e tecnologias semelhantes, incluindo as fornecidas por serviços de terceiros, como o Google Ads e o Google Analytics, para:"}
          </p>
          <ul className="list-disc ml-4 flex flex-col gap-1">
            <li>{"Exibir anúncios personalizados com base nos interesses do usuário;"}</li>
            <li>{"Medir o desempenho de campanhas publicitárias;"}</li>
            <li>{"Analisar o tráfego e o comportamento de navegação dos visitantes;"}</li>
            <li>{"Melhorar a relevância dos conteúdos e anúncios exibidos."}</li>
          </ul>

          <TopicTitle>{"3. Google Ads e Remarketing"}</TopicTitle>
          <p>
            {"Utilizamos o Google Ads para veicular anúncios em plataformas de terceiros. O Google pode utilizar cookies para exibir anúncios com base em visitas anteriores a este site. Os dados coletados pelo Google Ads são tratados de acordo com a Política de Privacidade do Google, disponível em: "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary"
            >
              policies.google.com/privacy
            </a>
            {"."}
          </p>
          <p>
            {"Você pode desativar a personalização de anúncios acessando as Configurações de Anúncios do Google em: "}
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

          <TopicTitle>{"4. Compartilhamento de Dados"}</TopicTitle>
          <p>
            {"Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros. Os dados coletados por ferramentas de análise e publicidade (como Google Ads e Google Analytics) são gerenciados diretamente por essas plataformas, conforme suas respectivas políticas de privacidade."}
          </p>

          <TopicTitle>{"5. Direitos do Usuário"}</TopicTitle>
          <p>
            {"Você tem o direito de solicitar acesso, correção ou exclusão de quaisquer dados pessoais eventualmente coletados. Para exercer esses direitos, entre em contato conosco através dos canais disponíveis neste site."}
          </p>

          <TopicTitle>{"6. Alterações nesta Política"}</TopicTitle>
          <p>
            {"Reservamo-nos o direito de alterar esta Política de Privacidade a qualquer momento. Recomendamos que os visitantes revisem esta página periodicamente para se manterem informados sobre eventuais atualizações."}
          </p>

          <ImportantNotice />
        </div>
      </main>
    </div>
  )
}
