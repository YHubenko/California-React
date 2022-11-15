import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

function App(props) {
    return (
        <div>
            <Header forHeader={props.state}/>
            <Main forMain={props.state}/>
            <Footer forFooter={props.state}/>
        </div>
    );
}

export default App;