import React from "react";
import Table from "../components/Table";
import classNames from "classnames";
import SortableTable from "../components/SortableTable";

const TablePage = () => {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Banana", color: "bg-yellow-500", score: 4 },
    { name: "Apple", color: "bg-red-500", score: 10 },
    { name: "Lime", color: "bg-green-500", score: 2 },
  ];

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => (
        <div className={classNames(`p-3 m-2 ${fruit.color}`)}></div>
      ),
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
      {/* <Table data={data} config={config} keyFn={keyFn} /> */}
    </div>
  );
};

export default TablePage;
