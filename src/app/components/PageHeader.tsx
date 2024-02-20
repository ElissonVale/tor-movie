import Link from "next/link";

type props = {
    title: string
}

const PageHeader = ({ title }: props) => {

    return (
        <>
            <div style={{ width: "100%", padding: 18 }} className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                <section className="sec-button-h" style={{ width: "10%", float: "left" }}>
                    <Link href="/" style={{ padding: 10, fontWeight: "bold" }}>
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">&lt;-</span>
                    </Link>
                </section>
                <section className="sec-title-h" style={{ width: "90%", float: "left" }}>
                    <h1 style={{ fontWeight: "bold", textAlign: "center" }}>{title}</h1>
                </section>               
            </div>
        </>
    );
}

export default PageHeader;


