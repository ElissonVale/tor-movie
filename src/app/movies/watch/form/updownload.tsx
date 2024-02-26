import { Field } from "@report/app/components/form/Field"


export const UpDownloadForm = () => {
    return (
        <>
            <form className="form col col-12">

                <Field name="download_url" type="text" title="Torrent Link" required />

                <Field name="movie_name" type="text" title="Nome do Filme" required />

                <section className="justify-center items-center my-2">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Up Download</button>
                </section>

            </form>
        </>
    )
}