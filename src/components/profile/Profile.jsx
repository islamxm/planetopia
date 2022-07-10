import './Profile.scss';
import profileImg from '../../images/profile-img.png';
import avatar from '../../images/avatar.png';
import tableIcon1 from '../../images/icons/table-icon-1.svg';
import tableIcon2 from '../../images/icons/table-icon-2.svg';
import top from '../../images/icons/profile-top.svg';
import {Modal} from 'antd';
import Button from '../button/Button';
import { useState } from 'react';

const Profile = () => {
    const [isVisible, setIsVisible] = useState(false);

    const showModal = () => {
        setIsVisible(true);
    }

    const hideModal = () => {
        setIsVisible(false);
    }

    return (
        <div className="profile">
            <div className="profile__top">
                <img src={top} alt="" />
            </div>
            <div className="container">
                <div className="profile__in">
                    <div className="profile__card">
                        <div className="profile__card_img">
                            <img src={profileImg} alt="profileImg" />
                        </div>
                        <div className="profile__card_body">
                            <div className="profile__card_body_info">
                                <div className="profile__card_body_info_head">
                                    <div className="profile__card_body_info_head_avatar">
                                        <img src={avatar} alt="avatar" />
                                    </div>
                                    <div className="profile__card_body_info_head_descr">
                                        <div className="profile__card_body_info_head_descr_id">
                                            <div className="profile__card_body_info_head_descr_id_value">ID 317166</div>
                                        </div>
                                        <div className="profile__card_body_info_head_descr_connect">
                                            <div className="profile__card_body_info_head_descr_connect_value">0xb2c6...ff92</div>
                                            <div className="profile__card_body_info_head_descr_connect_icon"></div>
                                        </div>
                                        <div className="profile__card_body_info_head_descr_ex">
                                            <div className="profile__card_body_info_head_descr_ex_main">invited 03. 04. 2022 by</div>
                                            <div className="profile__card_body_info_head_descr_ex_id">ID 309014</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="profile__card_body_info_action">
                                    <div className="profile__card_body_info_action_name">
                                        My personal link 
                                    </div>
                                    <a href='bubble.game/fgd8kh' className="profile__card_body_info_action_link">
                                        bubble.game/fgd8kh
                                    </a>
                                    <div className="profile__card_body_info_action_btns">
                                        <div className="profile__card_body_info_action_btns_btn">
                                            <Button text={'Copy'}/>
                                        </div>
                                        <div className="profile__card_body_info_action_btns_btn">
                                            <Button text={'Share'}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="profile__card_body_content">
                                <table className="profile__card_body_content_table">
                                    <tr className='profile__card_body_content_table_row'>
                                        <th className='profile__card_body_content_table_head'></th>
                                        <th className='profile__card_body_content_table_head'>
                                            <img src={tableIcon1} alt="" />
                                        </th>
                                        <th className='profile__card_body_content_table_head'>
                                            <img src={tableIcon2} alt="" />
                                        </th>
                                    </tr>
                                    <tr className="profile__card_body_content_table_row">
                                        <td className="profile__card_body_content_table_item">Mission Reward</td>
                                        <td className="profile__card_body_content_table_item">20</td>
                                        <td className="profile__card_body_content_table_item">10</td>
                                    </tr>
                                    <tr className="profile__card_body_content_table_row">
                                        <td className="profile__card_body_content_table_item">Team Reward</td>
                                        <td className="profile__card_body_content_table_item">50</td>
                                        <td className="profile__card_body_content_table_item">20</td>
                                    </tr>
                                    <tr className="profile__card_body_content_table_row">
                                        <td className="profile__card_body_content_table_item">PlanetX Reward</td>
                                        <td className="profile__card_body_content_table_item">70</td>
                                        <td className="profile__card_body_content_table_item">30</td>
                                    </tr>
                                </table>
                                <div className="profile__card_body_content_action">
                                    <button onClick={showModal} className="profile__card_body_content_action_btn">
                                        <div className="profile__card_body_content_action_btn_text">
                                        Stats
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal width={740} className='profile__modal' visible={isVisible} onCancel={hideModal}>
                <table className="profile__card_body_content_table">
                    <tr className='profile__card_body_content_table_row'>
                        <th className='profile__card_body_content_table_head'></th>
                        <th className='profile__card_body_content_table_head'>
                            <img src={tableIcon1} alt="" />
                        </th>
                        <th className='profile__card_body_content_table_head'>
                            <img src={tableIcon2} alt="" />
                        </th>
                    </tr>
                    <tr className="profile__card_body_content_table_row">
                        <td className="profile__card_body_content_table_item">Mission Reward</td>
                        <td className="profile__card_body_content_table_item">20</td>
                        <td className="profile__card_body_content_table_item">10</td>
                    </tr>
                    <tr className="profile__card_body_content_table_row">
                        <td className="profile__card_body_content_table_item">Team Reward</td>
                        <td className="profile__card_body_content_table_item">50</td>
                        <td className="profile__card_body_content_table_item">20</td>
                    </tr>
                    <tr className="profile__card_body_content_table_row">
                        <td className="profile__card_body_content_table_item">PlanetX Reward</td>
                        <td className="profile__card_body_content_table_item">70</td>
                        <td className="profile__card_body_content_table_item">30</td>
                    </tr>
                </table>
                <div className="profile__modal_action">
                    <div className="profile__modal_action_btn">
                        <Button text={'Buy'}/>
                    </div>
                    <div className="profile__modal_action_btn">
                        <Button onClick={hideModal} text={'Close'}/>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Profile;