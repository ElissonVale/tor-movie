import LinkHome from '@report/app/components/LinkHome';
import Container from './components/Container';

export default function Home() {

  return (
    <Container>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Gerenciador do&nbsp;
          <code className="font-mono font-bold">Report Diário - SED</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h2 style={{ color: "#fff", fontWeight: "bold", fontSize: 40 }}>Report Diário .SED</h2>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <LinkHome href='/report/manager' title='Reports' subtitle='Gerenciar os reports já realizados e consultar histórico' />
        <LinkHome href='/report/generate' title='Generate' subtitle={`Gerar o report diário para o dia de hoje ${new Date().toLocaleDateString()}`} />
        {/* <LinkHome href='/' title='Templates' subtitle='Explore starter templates for Next.js.' />
        <LinkHome href='/' title='Deploy' subtitle='Instantly deploy your Next.js site to a shareable URL with Vercel.' /> */}
      </div>
    </Container>
  )
}