
export const Card = ({ children }: any) => {
    return (
        <div className="container max-w-sm p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-800">
            {children}
        </div>
    )
}