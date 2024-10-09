import Dashboard from "./components/Dashboard.tsx";
import { useEffect, useState } from "react";

import Shovel from "./assets/sprites-npc/shovel-idle.png";
import ShovelTake from "./assets/sprites-npc/shovel-move.png";

export default () => {
    const [amount, setAmount] = useState(0);
    const [company, setCompany] = useState({ buy: false, value: 0 });
    const [idle, setIdle] = useState(Shovel);

    const changeAnimation = (idleSprite: string, moveSprite: string) => {
        setIdle(moveSprite);
        setInterval(() => {
            setIdle(idleSprite);
        }, 600);
    };

    const digMoney = () => {
        changeAnimation(Shovel, ShovelTake);
        makeMoney(1);
    };

    const makeMoney = (money: number) => {
        setAmount((amount) => amount + money);
    };

    const buyCompany = (money: number) => {
        if (money > amount) {
            return setCompany({ buy: false, value: 0 });
        }
        setAmount(amount - money);
        setCompany({ buy: true, value: money });
        setInterval(() => {
            setCompany({ buy: false, value: 0 });
        }, 1000);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            makeMoney(15);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <Dashboard func_buy={buyCompany} />
            <main>
                <div className="center-div">
                    <img src={idle} alt="img-npc" />
                    <button className="cave-btn" onClick={() => digMoney()}>
                        CAVAR
                    </button>
                </div>
                <div className="center-div">
                    <h1>R${amount}</h1>
                    {company.buy && (
                        <h2 style={{ color: "red" }}>-R${company.value}</h2>
                    )}
                </div>
                <article>
                    <div>npc-make-money +15 a cada 5s</div>
                </article>
            </main>
        </>
    );
};
