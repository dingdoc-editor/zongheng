import React, { useMemo } from 'react';
import { Dropdown, Menu } from 'antd';

export const SelectCellEditor = (props: any) => {
  const {
    workbook,
    rowIndex,
    colIndex,
    onChange,
    onBlur,
    position,
    isEditing,
  } = props;
  const cell = useMemo(() => {
    return workbook.controller.queryCell(rowIndex, colIndex);
  }, [workbook, rowIndex, colIndex]);

  const options = useMemo(() => {
    if (!cell?.select?.options) {
      return [];
    }
    return cell.select.options.map((o) => {
      return (
        <Menu.Item key={o.value}>
          {o.value}
        </Menu.Item>
      );
    });
  }, [cell]);

  if (!isEditing) {
    return null;
  }

  return (
    <Dropdown
      overlay={
        <Menu
          mode="inline"
          onSelect={({ key }) => {
            onChange(key);
            onBlur();
          }}
        >
          {options}
        </Menu>
      }
      visible
      placement="bottomLeft"
    >
      <div style={{ width: position?.width, height: position?.height }} />
    </Dropdown>
  );
};
