import React from "react";

import UserCard from "../components/UserCard";
import './Aside.css';
import PlayButton from '../components/PlayButton';

const Aside = () => {
    return (
        <>
            <section className="aside">
                <UserCard />
                <UserCard />
                <UserCard />
                <PlayButton />

            </section>
        </>
    )
};
export default Aside;