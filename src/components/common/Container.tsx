const Container: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <main className={'min-h-screen px-4 py-6 grid place-items-start'}>
                {children}
        </main>
    )
}


export default Container;