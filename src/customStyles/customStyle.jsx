const commandSelectStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 8,
    borderColor: state.isFocused ? "rgba(255,255,255,0.18)" : "#2d2928",
    minHeight: 32,
    boxShadow: "none",
    cursor: "pointer",
    "&:hover": {
      borderColor: "rgba(255, 255, 255, 0.4)",
    },
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "4px 8px",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#fff",
    fontSize: 13,
  }),
  input: (base) => ({
    ...base,
    color: "#fff",
    fontSize: 13,
  }),
  placeholder: (base) => ({
    ...base,
    color: "rgba(255, 255, 255, 10)",
    fontSize: 13,
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#2D2928",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    zIndex: 10,
  }),
  option: (base, state) => ({
    ...base,
    fontSize: 13,
    padding: "6px 8px",
    cursor: "pointer",
    backgroundColor: state.isSelected
      ? "rgba(255, 255, 255, 0.12)"
      : state.isFocused
        ? "#1c1c1c"
        : "transparent",
    color: "#fff",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    padding: 4,
  }),
};

export default commandSelectStyles;

export const timelineSelectStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 8,
    minHeight: 32,
    cursor: "pointer",
    boxShadow: "none",

    // React-select uses isFocused for hover + focus
    borderColor: state.isFocused ? "rgba(255, 255, 255, 0.4)" : "#2d2928",

    "&:hover": {
      borderColor: "rgba(255, 255, 255, 0.4)",
    },
  }),

  valueContainer: (base) => ({
    ...base,
    padding: "4px 8px",
  }),

  singleValue: (base) => ({
    ...base,
    color: "#ffffff",
    fontSize: 12,
  }),

  input: (base) => ({
    ...base,
    color: "#ffffff",
    fontSize: 12,
  }),

  placeholder: (base) => ({
    ...base,
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 12,
  }),

  menu: (base) => ({
    ...base,
    backgroundColor: "#000",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    zIndex: 91999,
    width: 180,
    position: "absolute",
    right: 2,
  }),

  menuList: (base) => ({
    ...base,
    padding: 4,
  }),

  option: (base, state) => ({
    ...base,
    fontSize: 13,
    padding: "6px 8px",
    cursor: "pointer",
    backgroundColor: state.isSelected
      ? "rgba(255, 255, 255, 0.12)"
      : state.isFocused
        ? "#000"
        : "#000",
    color: "#ffffff",

    "&:active": {
      backgroundColor: "rgba(255, 255, 255, 0.18)",
    },
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),

  dropdownIndicator: (base) => ({
    ...base,
    padding: 4,
    color: "#ffffff",

    "&:hover": {
      color: "#ffffff",
    },
  }),
};
