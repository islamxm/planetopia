import './Header.scss';
import Button from '../button/Button';
import { useState } from 'react';
import {Modal} from 'antd';
import '../gameRules/GameRules.scss';
import road from '../../images/road.svg';

const Header = () => {
    const [connected, setConnected] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const hideModal = () => {
        setIsVisible(false)
    }

    const showModal = () => {
        setIsVisible(true)
    }

    return (
        <header className="header">
            <Modal onCancel={hideModal} width={1025} visible={isVisible} className='gameRules'>
                <div className="gameRules__in">
                    <div className="gameRules__head">
                        <h2 className="gameRules__head_title">Rule of the game</h2>
                        <div className="gameRules__head_btn">
                            <Button onClick={hideModal} text={'Close'}/>
                        </div>
                    </div>
                    <div className="gameRules__body">
                        <div className="gameRules__body_road">
                            <img src={road} alt={road} />
                        </div>
                        <div className="gameRules__body_item gameRules__body_item-1">
                            <div className="gameRules__body_item_num">1</div>
                            <div className="gameRules__body_item_text">
                                When the game is launched from 1 to 21 balls, 
                                the activation of the balls occurs according 
                                to the next. 
                            </div>
                        </div>
                        <div className="gameRules__body_item gameRules__body_item-2">
                            <div className="gameRules__body_item_num">2</div>
                            <div className="gameRules__body_item_text">
                                Every time the ball makes 
                                a circle, you get a reward 
                                of 70% of the cost of the ball, but no more than 
                                4 times, then the ball must 
                                be activated again. If you 
                                do not activate the bursting ball, the rest of the balls freeze
                            </div>
                        </div>
                        <div className="gameRules__body_item gameRules__body_item-3">
                            <div className="gameRules__body_item_num">3</div>
                            <div className="gameRules__body_item_text">
                                If at the first passage from 
                                1 to 21, your next ball is not activated, then the last ball will be able to make only 2 circles, then all balls will be frozen. 
                                To defrost them, you need 
                                to activate the next
                                ball in turn 
                            </div>
                        </div>
                        <div className="gameRules__body_item gameRules__body_item-4">
                            <div className="gameRules__body_item_num">4</div>
                            <div className="gameRules__body_item_text">
                            After activating all balls, you need to maintain their total amount on the monitor, each time activating the bursting balls again
                            </div>
                        </div>
                        <div className="gameRules__body_item gameRules__body_item-5">
                            <div className="gameRules__body_item_num">5</div>
                            <div className="gameRules__body_item_text">
                                All funds are instantly distributed 
                                to players' wallets. When your balls are frozen, the remuneration remains on the smart contract until you activate the ball you need 
                                for defrosting. For activation after freezing, you are given 72 hours, after which your reward will 
                                be distributed by other player
                            </div>
                        </div>
                        <div className="gameRules__body_item gameRules__body_item-6">
                            <div className="gameRules__body_item_num">6</div>
                            <div className="gameRules__body_item_text">
                                Inviting new players at your referral link, you will get 
                                an additional bonus of 15% 
                                of the cost of each ball that you will ever acquire 
                                the player you invited, as well as 10% of the second line 
                                and 5% of the third players' line invited by your partners
                            </div>
                        </div>
                        <div className="gameRules__body_item gameRules__body_item-7">
                            <div className="gameRules__body_item_num">7</div>
                            <div className="gameRules__body_item_text">
                                For the start, you need 
                                to buy the first ball worth 0.05 BNB.
                            </div>
                        </div>
                    </div>
                    <div className="gameRules__foot">
                        <div className="gameRules__foot_btn">
                            <Button onClick={hideModal} text={'Close'}/>
                        </div>
                    </div>
                </div>
            </Modal>
            <div className="container">
                <div className="header__in">
                    <div className="header__action">
                        <div className="header__action_btn">
                            <Button text={'Connect Wallet'}/>
                        </div>
                        <div className="header__action_btn">
                            <Button onClick={showModal} text={'Game Rules'}/>
                        </div>
                    </div>
                    <div className="header__connect">
                        {
                            connected ? (
                                <button className="header__connect_btn header__connect_btn-connected">
                                    <div className="header__connect_btn-connected_icon"></div>
                                    <div className="header__connect_btn-connected_value">0xb2c6...ff92</div>
                                </button>
                                
                            ) : (
                                <Button text={'Connect Wallet'}/>
                            )
                        }
                        
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;