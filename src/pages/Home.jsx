import styles from '../Global.module.css';
import Header from '../components/common/Header';
import Hero from '../components/home/Hero';
import Footer from '../components/common/Footer';

const Home = () => {
    return (
        <main className={styles.main}>
            <Header/>
            <Hero/>
            <Footer/>
        </main>
    )
}

export default Home;