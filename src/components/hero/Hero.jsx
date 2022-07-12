import './Hero.scss';
import heroLogo from '../../images/hero-logo.png';
import Button from '../button/Button';
import { useState } from 'react';
import {Modal} from 'antd';
import img from '../../images/game-rules.png';
import 'atropos/css'
import Atropos from 'atropos/react';
import bg from '../../images/hero-bg.png';


const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    const showModal = () => {
        setIsVisible(true)
    }

    const hideModal = () => {
        setIsVisible(false)
    }

    return (
        <div className="hero">
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
                <div className="hero__in">
                    <div className="hero__img">
                    <Atropos shadow={false} highlight={false}>
                        <img className='hero__logo'  src={heroLogo} alt="heroLogo"/>
                        
                    </Atropos>
                    
                    
                    </div>
                    <div className="hero__action">
                        <div className="hero__action_item">
                            <Button text={'Connect Wallet'}/>
                        </div>
                        <div className="hero__action_item">
                            <Button onClick={showModal} text={'Game Rules'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;