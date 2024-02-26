"use client"

import { Card } from "@report/app/components/Card";
import Container from "@report/app/components/Container";
import { MenuHome } from "@report/app/components/MenuHome";
import PageBody from "@report/app/components/PageBody";
import PageHeader from "@report/app/components/PageHeader";
import SplashScreen from "@report/app/components/SplashScreen";
import { Field } from "@report/app/components/form/Field";
import { useEffect, useState } from "react";
import { SearchComponent } from "../watch/form/search";

export default function ManagerPage() {

    const [loading, setLoading] = useState<boolean>(true);
    const [reports, setReports] = useState<[]>();

    useEffect(() => {

        // Load data reports
        setReports([])

        setTimeout(() => {
            setLoading(false)
        }, 300)

    }, [])

    if (loading)
        return <SplashScreen />;

    return (
        <>
            <Container>
                {/* <PageHeader title="Up Torrent Download" /> */}
                <PageBody>

                    <SearchComponent placeholder="Pesquisar no torrent" onHandler={(searchTerm) => { console.log(searchTerm) }}/>

                    {/* <MenuHome onHandle={() => {}} /> */}
                </PageBody>
            </Container>
        </>
    );
}

