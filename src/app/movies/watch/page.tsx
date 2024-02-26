"use client"

import Container from "@report/app/components/Container";
import SplashScreen from "@report/app/components/SplashScreen";
import { useEffect, useState } from "react";
import { SearchComponent } from "./form/search";
import { PageFooter } from "@report/app/components/PageFooter";
import { Modal } from "@report/app/components/Modal";
import PageBody from "@report/app/components/PageBody";
import { UpDownloadForm } from "./form/updownload";
import { MenuHome } from "@report/app/components/MenuHome";

export default function GeneratePage() {

    const [visible, setVisible] = useState<boolean>(false)

    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {

        setTimeout(() => {
            setLoading(false)
        }, 800)

    }, [])

    if (loading)
        return <SplashScreen />

    return (
        <>
            <Container>

                <SearchComponent placeholder="Perquisar filme" onHandler={(searchTerm) => { }} />

                <PageBody>

                    {/* Listening Movies */}

                    {/* {Array.from({ length: 50 }).map(item => {
                        return (
                            <Card>
                                <form className="form col col-12">
                                    <Field name="download_url" type="text" title="Torrent Link" required />

                                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Up Download</button>
                                </form>
                            </Card>
                        )
                    })} */}

                </PageBody>

                {/* <PageFooter onHandle={() => { setVisible(true) }} /> */}

                <MenuHome onHandle={() => { setVisible(true) }} />

            </Container>

            <Modal title="Realizar Up Download" onClose={() => { setVisible(false) }} visible={visible} hideFooter>
                <UpDownloadForm />
            </Modal>
        </>
    );
}