type Props = {
    children: any,
    flex?: 'flex' | 'cont'
}

const Container = ({ children, flex }: Props) => {

    return (
        <>
            <main className={`${flex} min-h-screen flex-col items-center justify-between p-24`}>
                {children}
            </main>
        </>
    );
}

export default Container;