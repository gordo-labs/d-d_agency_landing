import React from "react";

type IBodyProps = {
  headlineText: any;
  bodyText: any;
  bottomText: any;
};

const Body: React.FC<IBodyProps> = (props) => {
  return (
    <div>
      <div className="text-pink-800 tracking-wide font-semibold pb-4 w-full">
        {props.headlineText}
      </div>
      <div>{props.bodyText}</div>
      <div className="pt-4">{props.bottomText}</div>
    </div>
  );
};

export default Body;
