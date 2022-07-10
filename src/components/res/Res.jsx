import './Res.scss';
import top from '../../images/icons/pls-bottom.svg';
import bottom from '../../images/icons/rec-bottom.svg';
import tableLogo1 from '../../images/icons/table-logo-1.png';
import bnbTable from '../../images/icons/bnb-table.svg'

const Res = () => {
    return (
        <div className="res">
            <div className="res__top">
                <img src={top} alt="" />
            </div>
            <div className="container">
                <div className="res__in">
                    <h2 className="res__head">
                        Planetopia Game recent activity
                    </h2>
                    <div className="res__body">
                        <table className="res__body_table">
                            <tr className="res__body_table_row">
                                <td className="res__body_table_item">
                                    <div className="res__body_table_item_img">
                                        <img src={tableLogo1} alt="tableLogo1" />
                                    </div>
                                </td>
                                <td className="res__body_table_item">
                                    <div className="res__body_table_item_id">ID 309014</div>
                                    <div className="res__body_table_item_prs res__body_table_item_prs-mob">
                                        <div className="res__body_table_item_prs_name">
                                            bubble 17  
                                        </div>
                                        <div className="res__body_table_item_prs_vl">
                                            <div className="res__body_table_item_prs_vl_icon">
                                                <img src={bnbTable} alt="" />
                                            </div>
                                            <div className="res__body_table_item_prs_vl_text">2</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="res__body_table_item res__body_table_item-hide">
                                    <div className="res__body_table_item_prs">
                                        <div className="res__body_table_item_prs_name">
                                            bubble 17  
                                        </div>
                                        <div className="res__body_table_item_prs_vl">
                                            <div className="res__body_table_item_prs_vl_icon">
                                                <img src={bnbTable} alt="" />
                                            </div>
                                            <div className="res__body_table_item_prs_vl_text">2</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="res__body_table_item">
                                    <div className="res__body_table_item_time">
                                        <span>15 minutes</span>
                                    </div>
                                </td>
                            </tr>
                            <tr className="res__body_table_row">
                                <td className="res__body_table_item">
                                    <div className="res__body_table_item_img">
                                        <img src={tableLogo1} alt="tableLogo1" />
                                    </div>
                                </td>
                                <td className="res__body_table_item">
                                    <div className="res__body_table_item_id">ID 309014</div>
                                    <div className="res__body_table_item_prs res__body_table_item_prs-mob">
                                        <div className="res__body_table_item_prs_name">
                                            bubble 17  
                                        </div>
                                        <div className="res__body_table_item_prs_vl">
                                            <div className="res__body_table_item_prs_vl_icon">
                                                <img src={bnbTable} alt="" />
                                            </div>
                                            <div className="res__body_table_item_prs_vl_text">2</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="res__body_table_item res__body_table_item-hide">
                                    <div className="res__body_table_item_prs">
                                        <div className="res__body_table_item_prs_name">
                                            bubble 17  
                                        </div>
                                        <div className="res__body_table_item_prs_vl">
                                            <div className="res__body_table_item_prs_vl_icon">
                                                <img src={bnbTable} alt="" />
                                            </div>
                                            <div className="res__body_table_item_prs_vl_text">2</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="res__body_table_item">
                                    <div className="res__body_table_item_time">
                                        <span>15 minutes</span>
                                    </div>
                                </td>
                            </tr>
                            <tr className="res__body_table_row">
                                <td className="res__body_table_item">
                                    <div className="res__body_table_item_img">
                                        <img src={tableLogo1} alt="tableLogo1" />
                                    </div>
                                </td>
                                <td className="res__body_table_item">
                                    <div className="res__body_table_item_id">ID 309014</div>
                                    <div className="res__body_table_item_prs res__body_table_item_prs-mob">
                                        <div className="res__body_table_item_prs_name">
                                            bubble 17  
                                        </div>
                                        <div className="res__body_table_item_prs_vl">
                                            <div className="res__body_table_item_prs_vl_icon">
                                                <img src={bnbTable} alt="" />
                                            </div>
                                            <div className="res__body_table_item_prs_vl_text">2</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="res__body_table_item res__body_table_item-hide">
                                    <div className="res__body_table_item_prs">
                                        <div className="res__body_table_item_prs_name">
                                            bubble 17  
                                        </div>
                                        <div className="res__body_table_item_prs_vl">
                                            <div className="res__body_table_item_prs_vl_icon">
                                                <img src={bnbTable} alt="" />
                                            </div>
                                            <div className="res__body_table_item_prs_vl_text">2</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="res__body_table_item">
                                    <div className="res__body_table_item_time">
                                        <span>15 minutes</span>
                                    </div>
                                </td>
                            </tr>
                            
                        </table>
                    </div>
                </div>
            </div>
            <div className="res__bottom">
                <img src={bottom} alt="" />
            </div>
        </div>
    )
}

export default Res;