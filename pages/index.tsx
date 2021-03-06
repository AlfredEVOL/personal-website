import type { NextPage } from "next";
import type { NextApiRequest } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../assets/logo-base-purple.svg";

const readIp = async (setter: Function) => {
    const res = await fetch("/api/ip");
    const data = await res.json();
    setter(data.ip);
};

const Home: NextPage = () => {
    const [ip, setIP] = useState("0.0.0.0");
    useEffect(() => {
        if (window === undefined) return;
        readIp(setIP);
    }, []);
    return (
        <div className={styles.container}>
            <Head>
                <title>Alfred Jophy | Homepage</title>
                <meta
                    name="description"
                    content="I don't know what I'm doing."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.content}>
                <h2>Hi, <i>{ip}</i> </h2>
                <div className={styles.content_image}>
                    <Image src={Logo} layout="fill"  />
                </div>
                <h1>Alfred Jophy</h1>
            </div>
        </div>
    );
};

export default Home;
