const {useState, useEffect} = React;

const GroceryListItem = (props) => {
  const [isFound, setIsFound] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const style = {
    textDecoration: isFound ? 'line-through' : 'none',
    fontWeight: isHovered ? 'bold' : 'normal'
  };

  return (
    <li style={style} onClick={() => setIsFound(!isFound)} onMouseEnter={() => setIsHovered(!isHovered)} onMouseOut={() => setIsHovered(!isHovered)}>
      {props.groceries}
    </li>
  );
};

const GroceryList = (props) => (
  <ul>
    {props.groceries.map((grocery) => (
      <GroceryListItem groceries = {grocery}/>
    ))}
  </ul>
);

const App = () => (
  <div>
    <h2>My grocery list</h2>
    <GroceryList groceries = {['Strawberries', 'Bananas']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
