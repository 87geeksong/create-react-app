import React from "react";
import { BrowserRouter as Router, Link, Route, Routes, useNavigate } from "react-router-dom";
import router from "./router";
import { Tree } from "antd";
const { TreeNode } = Tree;
function App() {
  const treeData = []
  const navigate = useNavigate()
  router.map((item,index)=>{
    const children = []
    item.children.map((v, i)=>{
      children.push({
        title: v.title,
        key: `${index}-${i}`,
        path: v.path,
      })
    })
    treeData.push({
      title: item.title,
      key: index,
      children
    })
  })
  console.log(useNavigate,'useNavigate');
  const onExpand = (expandedKeys, obj) => {
    console.log(expandedKeys, obj, 1111111);
    const {node: {path}} = obj
    console.log(path,'rr');
    navigate(path)
  };
  return (
    <>
      <Tree
        selectable
        onSelect={onExpand}
      >
        {treeData.map((item) => {
          return (
            <TreeNode key={item.key} title={item.title}>
              {!!item.children.length &&
                item.children.map((v) => {
                  return <TreeNode path={v.path} key={v.key} title={v.title}/>
                })}
            </TreeNode>
          );
        })}
      </Tree>
      <Routes>
        {!!router &&
          router.map((item, index) => {
            return item.children.map((v,i)=>{
              return (
                <Route
                  key={`${index}-${i}`}
                  path={v.path}
                  element={<v.component />}
                  exact={v.exact}
                />
              );
            })
          })}
      </Routes>
    </>
  );
}

export default App;
