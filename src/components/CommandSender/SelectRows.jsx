import Select from "react-select";
import commandSelectStyles from "../../customStyles/customStyle";

const SelectRows =({targetList, selectedTargetOption, setTargetValue, subSystemList, selectedSubSystemOption, setSubSystemValue, commandOptions, selectedOption, setSelectedIdx})=>{
    return(
                <div className="ce-select-row">
                  <div className="ce-top-wrapper">
                    <div className="ce-flex1">
                      <label>Target</label>
                      <div style={{ flex: 1 }}>
                        <Select
                          classNamePrefix="ce-command-select"
                          options={targetList}
                          value={selectedTargetOption}
                          onChange={(option) => setTargetValue(option?.label ?? "")}
                          isSearchable
                          styles={commandSelectStyles}
                        />
                      </div>
                    </div>
                    <div className="ce-flex1">
                      <label>Sub System</label>
                      <div style={{ flex: 1 }}>
                        <Select
                          classNamePrefix="ce-command-select"
                          options={subSystemList}
                          value={selectedSubSystemOption}
                          onChange={(option) => setSubSystemValue(option?.label ?? "")}
                          isSearchable 
                          styles={commandSelectStyles}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ce-flex">
                    <label>Command</label>
                    <div style={{ flex: 1 }}>
                      <Select
                        classNamePrefix="ce-command-select"
                        options={commandOptions}
                        value={selectedOption}
                        onChange={(option) => {
                          if (option) setSelectedIdx(option.value);
                        }}
                        isSearchable
                        placeholder="Select command..."
                        styles={commandSelectStyles}
                      />
                    </div>
                  </div>
                </div>
    )
};
export default SelectRows;