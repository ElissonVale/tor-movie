"use client"

import { Card } from "@report/app/components/Card";
import Container from "@report/app/components/Container";
import PageBody from "@report/app/components/PageBody";
import PageHeader from "@report/app/components/PageHeader";
import SplashScreen from "@report/app/components/SplashScreen";
import { Field } from "@report/app/components/form/Field";
import { useEffect, useState } from "react";

export default function ManagerPage() {

    const [loading, setLoading] = useState<boolean>(true);
    const [reports, setReports] = useState<[]>();

    useEffect(() => {

        // Load data reports
        setReports([]);

        setTimeout(() => {
            setLoading(false);
        }, 800)

    }, []);

    if (loading)
        return <SplashScreen />;

    return (
        <>
            <Container>
                <PageHeader title="Up Torrent Download" />
                <PageBody>
                    <Container flex="flex">
                        <Card>
                            <form className="form col col-12">
                                <Field name="download_url" type="text" title="Torrent Link" required/>
                               
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Up Download</button>
                            </form>
                        </Card>
                    </Container>
                </PageBody>
            </Container>
        </>
    );
}

