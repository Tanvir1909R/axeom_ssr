import "./finger.scss";
import {Slider} from "../../components";
import {bot, search,automate,identify} from '../../assets/svg';


const FingerTip = () => {
  const data = [
    {
      icon:bot,
      heading:'Digital business AI',
      para:'The most of artificial intelligence by applying it to strategic digital business.'
    },
    {
      icon:search,
      heading:'Extract and Aggregate',
      para:'Enabling you to retrieve different types of data from a variety of sources.'
    },
    {
      icon:identify,
      heading:'Process Automation',
      para:'Bring Intelligence to automate complex business processes.'
    },
    {
      icon:automate,
      heading:'Automate Tagging',
      para:'Automatically generating descriptive tags of your product and images without metadata'
    }
  ]
  return (
    <div className="container bg_finger">
      <div className="finger_wrapper">
        <div className="finger_heading">
          <h1>Endless possibilities at <br /> your fingertips</h1>
        </div>
        <div className="finger_slider">
            <Slider isBreakdown={true} isFade={false} data={data} />
        </div>
      </div> 
    </div>
  );
};

export default FingerTip; 
