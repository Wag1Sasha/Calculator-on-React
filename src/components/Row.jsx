import React from "react";
import Button from "./Button";

export default function Row({ row }) {
  return (
    <div className="row">
      {row.map((v) => (
        <Button name={v.name} className={v.className} type={v.type}/>
      ))}
    </div>
  );
}
