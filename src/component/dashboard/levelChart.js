import React, {Component} from 'react';
import chart from './css/levelChart-style.module.css';
import { BrowserRouter as Router, Route, Routes,Switch, Link } from 'react-router-dom';
// import grantNumberCircle from 'src/component/img/circle1.png'
import grantNumberCircle from "../img/circle1.png"
import grantNumberGroup from '../img/Group1.png'
import usedNumberCircle from '../img/circle2.png'
import usedNumberGroup from '../img/Group2.png'
import arrow from '../img/arrow.png';
import arrowdown from '../img/arrowdown.png';
import waittingNumberCircle from '../img/circle3.png'
import waittingNumberGroup from '../img/Group3.png'
import missedNumberCircle from '../img/circle4.png'
import missedNumberGroup from '../img/Group4.png'


class Chart extends Component {
    render(){
        return (
            <div className={chart.app}>
                <div className={chart.container}>
                    <div className={chart.levelChart}>
                    {/* <div className={chart.content}><span>Dashboard</span></div> */}
                    <div className={chart.title}><span>Biểu đồ cấp số</span></div>
                        <div className={chart.containerGrantNumber}>
                            <div className={chart.grantNumber}>
                                <div className={chart.grantNumberCircle}>
                                    <img src={grantNumberCircle} alt='grantNumberCircle' />
                                    <div className={chart.grantNumberGroup}><img src={grantNumberGroup} alt='grantNumberGroup' /></div>
                                    <span>Số thứ tự đã cấp</span>
                                </div>
                                <div>
                                    <span>4.221</span>
                                    <div className={chart.ratio}><img src={arrow} alt='arrow'></img><span>32,41%</span></div>
                                </div>
                            </div>
                        </div>
                        <div className={chart.containerUsedNumber}>
                            <div className={chart.usedNumber}>
                                <div className={chart.usedNumberCircle}>
                                    <img src={usedNumberCircle} alt='usedNumberCircle' />
                                    <div className={chart.usedNumberGroup}><img src={usedNumberGroup} alt='usedNumberGroup' /></div>
                                    <span>Số thứ tự đã sử dụng</span>
                                </div>
                                <div>
                                    <span>3.721</span>
                                    <div className={chart.ratio}><img src={arrowdown} alt='arrowdown'></img><span>32,41%</span></div>
                                </div>
                            </div>
                        </div>
                        <div className={chart.containerWaittingNumber}>
                            <div className={chart.waittingNumber}>
                                <div className={chart.waittingNumberCircle}>
                                    <img src={waittingNumberCircle} alt='usedNumberCircle' />
                                    <div className={chart.waittingNumberGroup}><img src={waittingNumberGroup} alt='usedNumberGroup' /></div>
                                    <span>Số thứ tự đang chờ</span>
                                </div>
                                <div>
                                    <span>468</span>
                                    <div className={chart.ratio}><img src={arrow} alt='arrow'></img><span>32,41%</span></div>
                                </div>
                            </div>
                        </div>
                        <div className={chart.containerMissedNumber}>
                            <div className={chart.missedNumber}>
                                <div className={chart.missedNumberCircle}>
                                    <img src={missedNumberCircle} alt='usedNumberCircle' />
                                    <div className={chart.missedNumberGroup}><img src={missedNumberGroup} alt='usedNumberGroup' /></div>
                                    <span>Số thứ tự đã bỏ qua</span>
                                </div>
                                <div>
                                    <span>32</span>
                                    <div className={chart.ratio}><img src={arrowdown} alt='arrowdown'></img><span>32,41%</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
    }
    
    export default Chart;