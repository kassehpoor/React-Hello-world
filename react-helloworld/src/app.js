 
class App extends React.Component {
    render() {
        return (
            <div className="app-content"> 
                <h1>Hello world!</h1>
                <p>{Math.random()*10}</p>
            </div>
        )
    }
}
ReactDOM.render(<App />,document.getElementById("app"));

