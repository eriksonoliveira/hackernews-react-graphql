// VENDOR imports
import React from "react";

type Props = {
  link: {
    description: string;
    url: string;
    id: string;
  };
};

const Link = (props: Props): JSX.Element => {
  return (
    <div>
      <div>
        {props.link.description} ({props.link.url})
      </div>
    </div>
  );
};

export default Link;
