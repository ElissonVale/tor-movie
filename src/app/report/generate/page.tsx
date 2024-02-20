"use client"

import Container from "@report/app/components/Container";
import PageBody from "@report/app/components/PageBody";
import PageHeader from "@report/app/components/PageHeader";
import SplashScreen from "@report/app/components/SplashScreen";
import { useEffect, useState } from "react";


export default function GeneratePage() {

    const [loading, setLoading] = useState<boolean>(true);
    const [reports, setReports] = useState<[]>();

    useEffect(() => {

        // Load data reports
        setReports([]);

        setTimeout(() => {
            setLoading(false);
        }, 800)
        
    }, []);

    if(loading)
        return <SplashScreen />;

    return (
        <>
            <Container>
                <PageHeader title="Generate a New Report" />
                <PageBody>
                    
                </PageBody>
            </Container>
        </>
    );
}