
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import AccountPreview from './AccountPreview';
import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function AccountItem() {


    const renderPreview = () => (
        <PopperWrapper>
            <div className={cx('preview')}>
                <AccountPreview />
            </div>
        </PopperWrapper>
    );

    return (
        <div>
            <Tippy
                interactive
                delay={[0, 600]}
                render={renderPreview}
                placement="bottom"
                offset={[-20, 0]}
            >
                <div
                    className={cx('account-item')}
                >
                    <img
                        className={cx('avatar')}
                        src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/7331537277698441224~c5_300x300.webp?lk3s=a5d48078&nonce=9848&refresh_token=b042798c1e8992e58f6d056f87970e34&x-expires=1731679200&x-signature=yWZc0tgczNvKLMcI6lypD95ZFQA%3D&shp=a5d48078&shcp=c1333099"
                        alt=""
                    />
                    <div className={cx('item')}>
                        <p className={cx('nickname')}>
                            <strong>ngovantoanttb</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Ngô Văn Toàn</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
