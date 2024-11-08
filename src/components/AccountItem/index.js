import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/7331537277698441224~c5_300x300.webp?lk3s=a5d48078&nonce=32077&refresh_token=54dfbc63765c1aec4a5cc22e6539b7cf&x-expires=1731247200&x-signature=rNNL%2B0aC5kW4A33dqq2w6ZCLfIQ%3D&shp=a5d48078&shcp=c1333099"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Ngo Van Toan</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>ngovantoanttb</span>
            </div>
        </div>
    );
}

export default AccountItem;