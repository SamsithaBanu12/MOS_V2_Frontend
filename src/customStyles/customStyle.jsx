const commandSelectStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 8,
    borderColor: state.isFocused
      ? "rgba(255,255,255,0.18)"
      : "#2d2928",
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
    fontSize: 14,
  }),
  input: (base) => ({
    ...base,
    color: "#fff",
    fontSize: 14,
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