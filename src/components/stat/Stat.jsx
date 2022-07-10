import './Stat.scss';

const Stat = () => {
    return (
        <div className="stat">
            <div className="container">
                <div className="stat__in">
                    <h2 className="stat__head">Statistics</h2>
                    <div className="stat__body">
                        <div className="stat__body_item">
                            <div className="stat__body_item_name">Total players</div>
                            <div className="stat__body_item_num">3435</div>
                            <div className="stat__body_item_val">+656780</div>
                        </div>
                        <div className="stat__body_item">
                            <div className="stat__body_item_name">Transactions made</div>
                            <div className="stat__body_item_num">756478</div>
                            <div className="stat__body_item_val">+5632</div>
                        </div>
                        <div className="stat__body_item">
                            <div className="stat__body_item_name">Turnover of the game</div>
                            <div className="stat__body_item_num">87675979</div>
                            <div className="stat__body_item_val">+786</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stat;