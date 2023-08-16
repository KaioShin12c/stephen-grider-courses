import React, { useState } from "react";
import Table from "./Table";
import useSort from "../hooks/use-sort";

const SortableTable = ({ ...props }) => {
  const { config, data } = props;

  const { sortedData, setSortColumn } = useSort(data, config);

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th onClick={() => setSortColumn(column.label)}>
          {column.label} is sortable
        </th>
      ),
    };
  });

  return <Table {...props} data={sortedData} config={updatedConfig} />;
};

export default SortableTable;
