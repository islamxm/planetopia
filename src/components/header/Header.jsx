import './Header.scss';
import Button from '../button/Button';
import { useState } from 'react';
import {Modal} from 'antd';
import img from '../../images/game-rules.png';
import '../gameRules/GameRules.scss';

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
                        <img src={img} alt="" />
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