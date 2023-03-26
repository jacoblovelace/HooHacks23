import './Sustainability.css';

function Sustainability() {
  const itemDescriptions = {
    "glass": "recycle it",
    "plastic": "test",
    "trash": "test2"
  }

  const itemArray = Object.keys(itemDescriptions).map((item, index) => (
    <div key={index}>
      <h3>{item}</h3>
      <p>{itemDescriptions[item]}</p>
    </div>
  ));

  return (
    <div>
        <h2>Sustainability</h2>
        <div className="item-list">
            {itemArray}
        </div>
    </div>
  );
}

export default Sustainability;