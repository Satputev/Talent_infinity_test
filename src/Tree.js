import React, { useState } from "react";

const Tree = ({ data = [] }) => {
  return (
    <div>
      <ul>
        {data.map((tree) => (
          <Treenode node={tree} />
        ))}
      </ul>
    </div>
  );
};
const Treenode = ({ node }) => {
  const hasChild = node.childCompany ? true : false;

  return (
    <li>
      <div style={{ backgroundColor: node.badge }}>{node.companyname}</div>

      {hasChild && <Tree data={node.childCompany} />}
    </li>
  );
};
export default Tree;
