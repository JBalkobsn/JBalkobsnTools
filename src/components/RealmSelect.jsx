import React from "react";
import Select, { createFilter } from "react-select";
import chroma from "chroma-js";
import { CustomOption } from "../components";
import { Realms } from "../constants/index";

const RealmSelect = ({ setRealm }) => {
  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma("blue");
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? color.alpha(0.1).css()
          : isFocused
          ? color.alpha(0.1).css()
          : undefined,
        color: data.color,
      };
    },
    singleValue: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
  };

  return (
    <div>
      <Select
        filterOption={createFilter({ ignoreAccents: false })}
        className="basic-single custom-select"
        classNamePrefix="custom-select"
        isDisabled={false}
        isLoading={false}
        isClearable={true}
        isRtl={false}
        isSearchable={true}
        name="Realms"
        options={Realms}
        styles={colourStyles}
        onChange={(choice) => setRealm(choice)}
        components={{ Option: CustomOption }}
      />
    </div>
  );
};

export default RealmSelect;
