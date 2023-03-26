import './Sustainability.css';

function Sustainability() {
  const itemDescriptions = {
    "glass": [["recycle"], "To recycle glass, rinse the container to remove any food or drink residue and remove any non-glass materials such as caps or lids. Then, take the clean glass to a recycling center or place it in a recycling bin designated for glass."],
    "paper": [["trash", "recycle"], "To dispose of paper properly, sort your paper waste into recyclable and non-recyclable categories. Recyclable paper products such as newspapers, magazines, and cardboard boxes should be placed in a recycling bin, while soiled or contaminated paper should be disposed of in the regular trash. For confidential documents, shred them before disposing of them. Always check with your local recycling guidelines to ensure proper disposal."],
    "plastic": [["recycle", "trash"], "To dispose of plastic properly, check the recycling number on the plastic item and rinse it with water to remove any food or drink residue. Different types of plastic have different recycling numbers and some may not be recyclable, so always check with your local recycling guidelines to ensure proper disposal. If the plastic item is recyclable, place it in a recycling bin designated for plastic. Non-recyclable plastic should be disposed of in the regular trash. Remember to reduce the use of single-use plastic items whenever possible to help minimize plastic waste."]
  }

  // const itemArray = Object.keys(itemDescriptions).map((item, index) => (
  //   <div key={index}>
  //     <h3>{item}</h3>
  //     <p>{itemDescriptions[item]}</p>
  //   </div>
  // ));

  const renderItemInfo = (item) => {
    return (
      <div>
        <h3 style={{textTransform: "capitalize"}}>{item}</h3>
        <div className="disposal-types">
          {itemDescriptions[item][0].map((type) => <h3 className={type}>{type}</h3>)}
        </div>
        <p>{itemDescriptions[item][1]}</p>
        <hr/>
      </div>
    );
  }

  return (
    <div>
        <h2>Sustainability</h2>
        <div className="item-list">
        {Object.keys(itemDescriptions).map(renderItemInfo)}
        </div>
    </div>
  );
}

export default Sustainability;