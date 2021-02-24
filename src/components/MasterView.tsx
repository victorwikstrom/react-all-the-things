import React, { CSSProperties } from "react";
import sections from "./sections";
import NavigationItem from "./NavigationItem";

function MasterView() {
  return (
    <div style={rootStyle}>
      {sections.map(
        (section: { id: number; title: string; imgPath: string }) => (
          <NavigationItem
            key={section.id}
            title={section.title}
            imgPath={section.imgPath}
          />
        )
      )}
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr",
  height: "100%",
};

export default MasterView;
