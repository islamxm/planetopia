import './Planet.scss';
import './PlanetModal.scss';
import { useState } from 'react';
import {Modal} from 'antd';
import Button from '../button/Button';
import bnb from '../../images/icons/bnb.svg';


const Planet = ({img, name, progress, value, id, disabled}) => {
    const [isVisible, setIsVisible] = useState(false);
    const showModal = () => {
        setIsVisible(true);
    }
    const hideModal = () => {
        setIsVisible(false)
    }

    

    return (
        <div className={"planet " + (disabled ? 'disabled' : '')} id={id}>
            <div className="planet__img" style={{backgroundImage: `url(https://bubble-game.online/pro2.png)`}}>

            </div>
            <div className="planet__in">
            <div className="planet__name">{name}</div>
            {
                disabled ? (
                    <div className="planet__action">
                        <button className='planet__action_btn' onClick={showModal}>
                            Explore/Buy
                        </button>
                        <Modal width={580} visible={isVisible} onCancel={hideModal} className='planetModal'>
                            <div className="planetModal__prof">
                                <div className="planetModal__prof_in" style={{backgroundImage: `url(${img})`}}>
                                    {name}
                                </div>
                            </div>
                            <div className="planetModal__main">
                                <div className="planetModal__main_item">
                                    <div className="planetModal__main_item_name">Price</div>
                                    <div className="planetModal__main_item_value">
                                        <div className="planetModal__main_item_value_text">0.56</div>
                                        <div className="planetModal__main_item_value_icon">
                                            <img src={bnb} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="planetModal__main_item">
                                    <div className="planetModal__main_item_name">Bonus</div>
                                    <div className="planetModal__main_item_value">
                                        <div className="planetModal__main_item_value_text">0.392</div>
                                        <div className="planetModal__main_item_value_icon">
                                            <img src={bnb} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="planetModal__info">
                                <div className="planetModal__info_item">
                                    <div className="planetModal__info_item_name">Level reward 70%</div>
                                    <div className="planetModal__info_item_value">0.392</div>
                                </div>
                                <div className="planetModal__info_item">
                                    <div className="planetModal__info_item_name">Direct partners 15%</div>
                                    <div className="planetModal__info_item_value">0.084</div>
                                </div>
                                <div className="planetModal__info_item">
                                    <div className="planetModal__info_item_name">2nd line partners 10%</div>
                                    <div className="planetModal__info_item_value">0.056</div>
                                </div>
                                <div className="planetModal__info_item">
                                    <div className="planetModal__info_item_name">3nd line partners 5%</div>
                                    <div className="planetModal__info_item_value">0.028</div>
                                </div>
                            </div>
                            <div className="planetModal__action">
                                <Button text={'Approve'} onClick={hideModal}/>
                            </div>
                        </Modal>
                    </div>
                ) : (
                    

                    <div className="planet__progress">
                                    
                        <div className="planet__progress_vl">{progress + '%'}</div>
                        <div className="planet__progress_line">
                            <div className="planet__progress_line_fill" style={{width: `${progress}%`}}></div>
                        </div>
                    </div>
                )
            }
            <div className="planet__val">
                <div className="planet__val_icon"></div>
                <div className="planet__val_text">{value}</div>
            </div>
            </div>
        </div>
    )
}

export default Planet;