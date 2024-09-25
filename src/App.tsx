import Dashboard from "./components/Dashboard.tsx";
import { useEffect, useState } from "react";

export default () => {
    const [amount, setAmount] = useState(0);

    const makeMoney = (money: number) => {
        setAmount((amount) => amount + money);
    };

    const buyCompany = (money: number) => {
        setAmount((amount) => amount + money);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            makeMoney(15);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <Dashboard />
            <button onClick={() => makeMoney(1)}>Farm</button>
            <h1>R${amount}</h1>
            <div onClick={() => buyCompany(amount)}>
                npc-make-money +15 a cada 5s
            </div>
        </>
    );
};
