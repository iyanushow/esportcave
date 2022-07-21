import React from "react";
import ReactFaq from "react-faq-component";

const styles = {
  bgColor: "transparent",
  rowTitleColor: "white",
  rowTitleTextSize: "14px",
  rowContentColor: "white",
  rowContentTextSize: "14px",
  arrowColor: "white",
};

const config = {
  animate: true,
  expandIcon: "+",
  collapseIcon: "-",
};

const Accordion = ({ className, items }) => {
  return (
    <div className={className}>
      <ReactFaq data={items} styles={styles} config={config} />
    </div>
  );
};

export default Accordion;
