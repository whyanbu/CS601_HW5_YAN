import './App.css'
import InventoryList from './components/InventoryList'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
    return (
        <div>
            <Header />
            <InventoryList/>
            <Footer />
        </div>
    );
}

export default App;
