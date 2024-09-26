import { useState } from "react";
import Miner from "../assets/sprites-npc/miner.png";
import Brock from "../assets/sprites-npc/brock.png";

export default () => {
    const [hideShop, setHideShop] = useState(true);

    return (
        <>
            <header className="dashboard-header">
                <nav className="dash-title">
                    <h1>Loja</h1>
                    <button onClick={() => setHideShop(false)}>vvv</button>
                </nav>
                <ul className={`dashboard-list ${hideShop && "d-none"}`}>
                    <li className="item-dash">
                        <img src={Miner} alt="item" />
                        <div>
                            <button className="btn-dash">50$</button>
                        </div>
                    </li>
                    <li className="item-dash">
                        <img src={Brock} alt="item" />
                        <div>
                            <button className="btn-dash">50$</button>
                        </div>
                    </li>
                </ul>
            </header>
        </>
    );
};
