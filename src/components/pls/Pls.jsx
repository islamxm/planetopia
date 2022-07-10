import './Pls.scss';
import top from '../../images/icons/profile-bottom.svg';
import bottom from '../../images/icons/pls-bottom.svg';
import Planet from '../planet/Planet';
import pl1 from '../../images/pl1.png'
import pl2 from '../../images/pl2.png'
import pl3 from '../../images/pl3.png'
import pl4 from '../../images/pl4.png'
import pl5 from '../../images/pl5.png'
import pl6 from '../../images/pl6.png'
import pl7 from '../../images/pl7.png'
import pl8 from '../../images/pl8.png'
import pl9 from '../../images/pl9.png'
import pl10 from '../../images/pl10.png'

const Pls = () => {
    return (
        <div className="pls">
            
            <div className="container">
                <div className="pls__top">
                    <img src={top} alt="" />
                </div>
                <div className="pls__in">
                    <div className="pls__action">
                        <button className="pls__action_btn"><span>Starfield 1</span></button>
                        <button className="pls__action_btn"><span>Starfield 2</span></button>
                    </div>
                    <div className="pls__list">
                        <Planet 
                            img={pl1}
                            name={'1PT'} 
                            progress={10} 
                            value={0.05} 
                            id={'pl1'}/>
                        <Planet 
                            img={pl2}
                            name={'2LW'} 
                            progress={30} 
                            value={0.12} 
                            id={'pl2'}/>
                        <Planet 
                            img={pl3}
                            name={'3UQ'} 
                            progress={90} 
                            value={0.5} 
                            id={'pl3'}/>
                        <Planet 
                            img={pl4}
                            name={'4ES'} 
                            progress={60} 
                            value={0.7} 
                            id={'pl4'}/>
                        <Planet 
                            img={pl5}
                            name={'5MG'} 
                            progress={40} 
                            value={0.9} 
                            id={'pl5'}/>
                        <Planet 
                            img={pl6}
                            name={'6AN'} 
                            progress={50} 
                            value={1.2} 
                            id={'pl6'}/>
                        <Planet  
                            img={pl7}
                            name={'7HZ'} 
                            progress={80} 
                            value={1.6} 
                            id={'pl7'}/>
                        <Planet 
                            img={pl8}
                            disabled={true}  
                            name={'8RT'} 
                            progress={0} 
                            value={2} 
                            id={'pl8'}/>
                        <Planet  
                            img={pl9}
                            name={'9MK'} 
                            progress={50} 
                            value={3.5} 
                            id={'pl9'}/>
                        <Planet  
                            img={pl10}
                            name={'10KL'} 
                            progress={70} 
                            value={6} 
                            id={'pl10'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pls;