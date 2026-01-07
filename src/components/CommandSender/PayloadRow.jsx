import Select from "react-select";
import commandSelectStyles from "../../customStyles/customStyle";
import { normalizeToHex, displayValue, getStatesInfo } from "../../utils/utils";

function PayloadRow({ item, value, onHexChange, onStateLabelChange, isHex }) {
  const statesInfo = item.states ? getStatesInfo(item) : null;

  const uiValue = displayValue(value, isHex);

  const handleChange = (e) => {
    const hex = normalizeToHex(e.target.value);
    onHexChange(item.name, hex);
  };

  const handleBlur = (e) => {
    const hex = normalizeToHex(e.target.value);
    onHexChange(item.name, hex);
  };

  const stateOptions = statesInfo
    ? statesInfo.options.map((opt) => ({
        value: opt.label,
        label: opt.label,
      }))
    : [];

  const selectedStateOption =
    stateOptions.find((o) => o.value === value) || null;

  return (
    <div className="ce-item-row">
      <div className="ce-item-name">
        <div className="ce-mono">{item.name}</div>
      </div>

      <div className="ce-item-value">
        {statesInfo ? (
          <Select
            classNamePrefix="ce-command-select"
            options={stateOptions}
            value={selectedStateOption}
            onChange={(option) =>
              onStateLabelChange(item.name, option?.value ?? "")
            }
            isSearchable
            styles={{
              ...commandSelectStyles,
              menu: (base, state) => ({
                ...commandSelectStyles.menu(base, state), // ✅ keep your menu colors
                zIndex: 99999,
              }),
              menuPortal: (base) => ({
                ...base,
                zIndex: 99999,
              }),
            }}
            menuPortalTarget={document.body}
            menuPosition="fixed"
          />
        ) : (
          <input
            className="ce-row-input"
            value={uiValue}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        )}
      </div>
    </div>
  );
}

export default PayloadRow;
