import Header from './Header';


function DefaultLayout({ children }) {
    return (
        <div className="default-layout">
            <Header />
            <div className='container'>
                <div className='content'>{ children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
