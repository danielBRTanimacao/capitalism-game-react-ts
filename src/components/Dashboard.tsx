import { useState } from "react";
import Miner from "../assets/sprites-npc/miner.png";
import Brock from "../assets/sprites-npc/brock.png";

export default () => {
    const [hideShop, setHideShop] = useState(true);

    class NpcObjects {
        img: string;
        purchased: boolean;
        price: number;
        money_maked: number;
        seconds: number;

        constructor(img: string, price: number) {
            this.img = img;
            this.purchased = false;
            this.price = price;
            this.money_maked = 0;
            this.seconds = 0;
        }
    }

    const miner = new NpcObjects(Miner, 50);
    const drill = new NpcObjects(Brock, 100);

    return (
        <>
            <header className="dashboard-header">
                <nav className="dash-title">
                    <h1>Loja</h1>
                    <button
                        onClick={() => setHideShop((prevState) => !prevState)}
                    >
                        {hideShop ? "vvv" : "^^^"}
                    </button>
                </nav>
                <ul className={`dashboard-list ${hideShop && "d-none"}`}>
                    <li className="item-dash">
                        <img src={miner.img} alt="item" />
                        <div>
                            {!miner.purchased ? (
                                <button className="btn-dash">
                                    {miner.price}$
                                </button>
                            ) : (
                                <button className="btn-dash disabled">X</button>
                            )}
                        </div>
                    </li>
                    <li className="item-dash">
                        <img src={drill.img} alt="item" />
                        <div>
                            {!drill.purchased ? (
                                <button className="btn-dash">100$</button>
                            ) : (
                                <button className="btn-dash disabled">X</button>
                            )}
                        </div>
                    </li>
                </ul>
            </header>
        </>
    );
};
