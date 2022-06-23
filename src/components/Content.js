import Title from "./Title";
import Description from "./Description";

const Content = (props) => {
  console.log(`Props du content:`, props);
  return (
    <div className="container">
      <Title name={props.name} />
      <Description text={props.text} />
    </div>
  );
};

export default Content;
