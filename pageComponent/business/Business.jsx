import "./business.scss";
import { eye, reality } from "../../assets/svg";
// import Counter from "../../components/Counter";

const Business = () => {
  return (
    <div className="container">
      <div className="business_wrapper">
        <div className="business_plan">
          <h1>Build & Share Delightful Machine Learning Apps</h1>
          <p>
            AI Lab is an artificial intelligence company that excels in visual
            recognition, solving real-world problems for businesses.
          </p>
          <div className="plan">
            <div className="plan_logo">{reality}</div>
            <div className="plan_desc">
              <h4>Custom Machine Learning App Development</h4>
              <p>
                End-to-End development services to build machine learning
                applications specifically designed to your business.
              </p>
            </div>
          </div>
          <div className="plan">
            <div className="plan_logo">{eye}</div>
            <div className="plan_desc">
              <h4>Seamless ML Integration and Deployment</h4>
              <p>
                Inject ML models into your existing applications or develop
                standalone ML apps.
              </p>
            </div>
          </div>
        </div>
        <div className="business_image">
          <img src="./images/business_bg.jpg" alt="ai" />
        </div>
      </div>
    </div>
  );
};

export default Business;
