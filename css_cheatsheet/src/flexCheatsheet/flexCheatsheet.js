import './flexCheatsheet.css';

const inlineCoral = {
  'background-color': 'coral',
}

export default function FlexCheatsheet() {
  return (
    <div> /* can i comment */
    <ul className="navigation">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <div className="chart">
      <div style={{'background-color': 'coral',
                    'height': '20px'}}>coral</div>
      <div style={{'background-color': 'blue',
                    'height': '130px'}}>blue</div>
      <div style={{'background-color': 'lightblue',
                    'height': '45px'}}>lightblue</div>
      <div style={{'background-color': 'green',
                    'height': '100px'}}>green</div>
      <div style={{'background-color': 'lightyellow',
                   'height': '85px'}}>yellow</div>
    </div>
    </div>
  );
}
