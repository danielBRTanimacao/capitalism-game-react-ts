import { useState } from "react";

export default () => {
    const [amount, setAmount] = useState(0);

    const makeMoney = (money: number) => {
        setAmount((amount) => amount + money);
    };

    const setTimer = (time: Number) => {
        return time;
    };

    return (
        <>
            <button onClick={() => makeMoney(1)}>Farm</button>
            <h1>{amount}</h1>
            <div onClick={() => makeMoney(15)}>
                npc-make-money +15 a cada 5s
            </div>
        </>
    );
};
