import Footer from '../Footer/Footer'
import Header from '../Header/Header';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const wrapper = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
}

const btn = {
    display: 'block',
    margin: '20px 43%',
}

const Layout = () => {
    const {text: {idText}, image: {idImg}} = useSelector(state => state);
    
    
    return (
        <div className={wrapper}>
        <Header/>
        <Outlet/>
        {idText && idImg && (
            <Link style={btn} to={`singleCard/${idText}/${idImg}`}>
                Поделиться открыткой
            </Link>
        )}
        <Footer/>
    </div>
    )
}

export default Layout;