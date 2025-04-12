//we wont ever be using React.createElement again.
//let heading = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{id:"grandchild"},"I am the grand child")));

//React element
let jsx = (<h1>Hello this is a 
    multi
    line</h1>); // multi line code needs to be wrapped inside () brackets


let Title = () => {
    return (
        
            <h2>This is the title component</h2>
        
    );
}

// React Component  (any react fucntion that returns some jsx element is react component)
let Func1 = ()=> {
    return (
    <div>
        {jsx} 
        <Title />      
        {Title()}
        <h2>This is react functional componenet</h2> 
    </div>
)}; // this is a component composition

let jsxHeading = <h1 className="heading">This is heading using jsx</h1>;
let root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);
root.render(<Func1/>);

