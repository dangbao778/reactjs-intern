import styles from './css/add_service_content_style.module.css'
import {Link} from 'react-router-dom';
import Gotopage from "../../img/right_page.png";
import {useState} from 'react'
function Addservice_content(){

    const [codeService , setCodeService] = useState('201')
    const [nameService , setNameService] = useState('Khám tim mạch')
    const [desService , setDesService] = useState('')

    return(
        <div className={styles.account}>
            <div className={styles.accountinfo}>
                <div className={styles.accountinfolist}>
                    <p className={styles.accounttitle}>
                        Dịch vụ
                    </p>
                        <img src={Gotopage} alt="Gotopage" className={styles.levelgoto}></img>
                
                    <p className={styles.accounttitle }>
                        <Link to="/service" className={styles.list}>Danh sách dịch vụ</Link>
                    </p>
                        <img src={Gotopage} alt="Gotopage" className={styles.levelgoto}></img>
                    <p className={styles.accountlist }>
                        Thêm dịch vụ
                    </p>
                </div>
                {/* <div className={styles.bell}>
                    <Bellactive/>
                </div> */}
            </div>
            <div className={styles.accountcontainer}>
                <div className={styles.accountlisttitle}>
                    Quản lý dịch vụ
                </div>
                <div className={styles.addaccount}>
                    <div className={styles.addaccounttitle}>
                        Thông tin dịch vụ
                    </div>

                    <div className={styles.contaniner__input}>
                        <div className={styles.contaniner__input1}>
                            <div className={styles.serviceCode}>
                                <div className={styles.serviceCodetitle}>
                                    Mã dịch vụ: <span>*</span>
                                </div>
                                <div className={styles.serviceCodeinput}>
                                    <input type="text" value={codeService} onChange={ e=> setCodeService(e.target.value)}  />
                                </div>
                            </div>
                            
                            <div className={styles.serviceCode}>
                                <div className={styles.serviceCodetitle}>
                                    Tên dịch vụ: <span>*</span>
                                </div>
                                <div className={styles.serviceCodeinput}>
                                    <input type="text" value={nameService} onChange={ e=> setNameService(e.target.value)}  />
                                </div>
                            </div>       
                        </div>
                        <div className={styles.serviceCode}>
                                <div className={styles.serviceCodetitle}>
                                    Mô tả: <span>*</span>
                                </div>
                                <div className={styles.serviceCodeinput}>
                                    <textarea rows={4} cols={50} placeholder="Mô tả dịch vụ" value={desService} onChange={ e=> setDesService(e.target.value)}></textarea>
                                </div>
                        </div>
                    </div>

                    <div className={styles.contaniner__rules}>
                        <div className={styles.contaniner__rules__title}>
                                Quy tắc cấp số
                        </div>
                        <div className={styles.contaniner__checkbox}>
                            <div className={styles.contaniner__checkbox__items}>
                                <div className={styles.contaniner__checkbox__item}>
                                    <input type="checkbox"/> 
                                    <span>Tăng tự động từ:</span>
                                </div> 
                                <div className={styles.contaniner__checkbox__item}>
                                    <input type="checkbox"/> 
                                    <span>Prefix:</span>
                                </div>   
                                <div className={styles.contaniner__checkbox__item}>
                                    <input type="checkbox"/> 
                                    <span>Surfix:</span>
                                </div>   
                                <div className={styles.contaniner__checkbox__item}>
                                    <input type="checkbox"/> 
                                    <span>Reset mỗi ngày</span>
                                </div>   
                            </div>
                                <div className={styles.contaniner__input__items}>
                                <div className={styles.contaniner__input__item}>
                                    <input type="text" value='0001'  onChange={ e=>'value'}/>
                                    <span>đến</span>
                                    <input type="text" value='9999' onChange={ e=>'value'}/>
                                </div>
                                <div className={styles.contaniner__input__item}>
                                    <input type="text" value='0001'  onChange={ e=>'value'}/>                               
                                </div>
                                
                                <div className={styles.contaniner__input__item}>
                                    <input type="text" value='0001'  onChange={ e=>'value'}/>                               
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={styles.contaniner__more}>
                        <div className={styles.contaniner__more__title}>
                            <p className={styles.star}>*</p> <span className={styles.contaniner__more__require}>Là trường thông tin bắt buộc</span> 
                        </div>
                    </div>

                </div>
                <div className={styles.contaniner__button}>
                    <div className={styles.contaniner__cancel}>
                        <Link to="/service" className={styles.cancel}> Hủy bỏ </Link>
                    </div>
                    <div className={styles.contaniner__addservice}>
                        <Link to="/service" className={styles.add}>Thêm dịch vụ</Link>
                    </div>
                </div>
            </div>
                
        </div>
    )
}

export default Addservice_content;