export default () => {
    return (
        <>
            <header className="dashboard-header">
                <nav className="dash-title">
                    <h1>Loja</h1>
                    <button>pa baixo</button>
                </nav>
                <ul className="dashboard-list">
                    <li className="item-dash">
                        <img src="https://fakeimg.pl/70x70/" alt="item" />
                        <div>
                            <button className="btn-dash">50$</button>
                        </div>
                    </li>
                    <li className="item-dash">
                        <img src="https://fakeimg.pl/70x70/" alt="item" />
                        <div>
                            <button className="btn-dash">50$</button>
                        </div>
                    </li>
                </ul>
            </header>
        </>
    );
};
