
const Container = ({ children }: any) => {

    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                {children}
            </main>
        </>
    );
}

export default Container;