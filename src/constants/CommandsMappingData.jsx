export const commandStateMapping = [
  {
    command: "THRUSTER_1030_TC_EXOTRAIL_SET_FIRING_OPERATING_POINT",
    telemetry: "THRUSTER_1030_TM_EXOTRAIL_SET_FIRING_OPERATING_POINT",
    states: [
      {
        parameter: "FIRING_OPERATING_POINT",
        states: {
          0: "Operating_point_1(100W)",
          1: "Operating_point_2(125W)",
          2: "Operating_point_3(150W)",
        },
      },
    ],
  },
  {
    command: "THRUSTER_1031_TC_EXOTRAIL_TEST_SET_OBC_MODE",
    telemetry: "THRUSTER_1031_TM_EXOTRAIL_TEST_SET_OBC_MODE",
    states: [
      {
        parameter: "EXOTRIAL_OBC_MODE",
        states: {
          0: "EXOTRAIL_STANDBY_MODE",
          1: "EXOTRAIL_THERMAL_CON_MODE",
          2: "EXOTRAIL_THRUST_MODE",
          3: "EXOTRAIL_THERMAL_CON_THN_THRUST_MODE",
          4: "EXOTRAIL_EOL_PASSIVATION",
          5: "EXOTRAIL_COMMISIONING",
        },
      },
    ],
  },
  {
    command: "THRUSTER_1034_TC_EXOTRAIL_SET_FLUIDIC_VALVE_SEL",
    telemetry: "THRUSTER_1034_TM_EXOTRAIL_SET_FLUIDIC_VALVE_SEL",
    states: [
      {
        parameter: "FLUIDIC_VALVE_SELECTION",
        states: {
          0: "EXOTRAIL_V3_CATHODE_V1_ANODE",
          1: "EXOTRAIL_V3_CATHODE_V2_ANODE",
          2: "EXOTRAIL_V4_CATHODE_V1_ANODE",
          3: "EXOTRAIL_V4_CATHODE_V2_ANODE",
        },
      },
    ],
  },
  {
    command: "TC_CONOPS_LUT_RUN_CTRL",
    telemetry: "TM_CONOPS_SCH_LUT_RUN_CTRL",
    states: [
      {
        parameter: "LUT_NUM",
        states: {
          0: "LUT_1",
          1: "LUT_2",
        },
      },
      {
        parameter: "ACTION",
        states: {
          1: "Save_schedule_sequence_to_persistent_memory",
          2: "Start_Resume_execution_of_schedule_sequence",
          3: "Pause_schedule_sequence_execution",
          4: "Stop_schedule_execution_and_erase_LUT",
          5: "Erase_schedule_events",
        },
      },
    ],
  },
  {
    command: "TC_549",
    telemetry: "549_TM",
    states: [
      {
        parameter: "STATUS",
        states: {
          1: "Both_LUT_execution_status",
          2: "Execution_status_LUT_1",
          3: "Execution_status_LUT_2",
        },
      },
    ],
  },
  {
    command: "ADCS_19_TC_FINE_SUN_POINTING",
    telemetry: "ADCS_19_TM_SET_ADCS_CTRL_MODE_CONF",
    states: [
      {
        parameter: "AXIS_SELECTION",
        states: {
          1: "POSITIVE_X",
          2: "POSITIVE_Y",
          3: "POSITIVE_Z",
          4: "NEGATIVE_X",
          5: "NEGATIVE_Y",
          6: "NEGATIVE_Z",
        },
      },
    ],
  },
  {
    command: "ADCS_19_TC_TARGET_TRACKING_CONTROL_MODE_ECEF_TARGET_REFERENCE",
    telemetry: "ADCS_19_TM_SET_ADCS_CTRL_MODE_CONF",
    states: [
      {
        parameter: "REFERENCE_FRAME_X_DESIRED_DIRECTION",
        states: {
          0: "ECIX",
          1: "ECIY",
          2: "ECIZ",
          3: "SUN",
          4: "MAG",
          5: "MOON",
          6: "POSITION",
          7: "VELOCITY",
          8: "TARGET_IN_J2000_VECTOR",
          9: "ECEF_COORDINATIES",
          10: "BEARING",
          11: "HEADING",
          12: "ORBIT_NORMAL",
          13: "GEOCENTRIC_NADIR",
          14: "GEODETIC_NADIR",
          20: "ECEF_NORMAL",
          21: "LATCHED_MOM",
          22: "LVLH_COORDINATES",
          23: "ECI_COORDIANTES",
          24: "CHEBY_J2000",
        },
      },
      {
        parameter: "BODY_FIXED_COMMAND_FRAME_Z_DIRECTION",
        states: {
          1: "POSITIVE_X",
          2: "POSITIVE_Y",
          3: "POSITIVE_Z",
          4: "NEGATIVE_X",
          5: "NEGATIVE_Y",
          6: "NEGATIVE_Z",
        },
      },
      {
        parameter: "BODY_FIXED_COMMAND_FRAME_X_DIRECTION",
        states: {
          1: "POSITIVE_X",
          2: "POSITIVE_Y",
          3: "POSITIVE_Z",
          4: "NEGATIVE_X",
          5: "NEGATIVE_Y",
          6: "NEGATIVE_Z",
        },
      },
    ],
  },
  {
    command: "ADCS_19_TC_TARGET_TRACKING_CONTROL_MODE_WITH_ADDITIONAL_CONTROL",
    telemetry: "ADCS_19_TM_SET_ADCS_CTRL_MODE_CONF",
    states: [
      {
        parameter: "REFERENCE_FRAME_Z_DESIRED_DIRECTION",
        states: {
          0: "ECIX",
          1: "ECIY",
          2: "ECIZ",
          3: "SUN",
          4: "MAG",
          5: "MOON",
          6: "POSITION",
          7: "VELOCITY",
          8: "TARGET_IN_J2000_VECTOR",
          9: "ECEF_COORDINATIES",
          10: "BEARING",
          11: "HEADING",
          12: "ORBIT_NORMAL",
          13: "GEOCENTRIC_NADIR",
          14: "GEODETIC_NADIR",
          20: "ECEF_NORMAL",
          21: "LATCHED_MOM",
          22: "LVLH_COORDINATES",
          23: "ECI_COORDIANTES",
          24: "CHEBY_J2000",
        },
      },
      {
        parameter: "REFERENCE_FRAME_X_DESIRED_DIRECTION",
        states: {
          0: "ECIX",
          1: "ECIY",
          2: "ECIZ",
          3: "SUN",
          4: "MAG",
          5: "MOON",
          6: "POSITION",
          7: "VELOCITY",
          8: "TARGET_IN_J2000_VECTOR",
          9: "ECEF_COORDINATIES",
          10: "BEARING",
          11: "HEADING",
          12: "ORBIT_NORMAL",
          13: "GEOCENTRIC_NADIR",
          14: "GEODETIC_NADIR",
          20: "ECEF_NORMAL",
          21: "LATCHED_MOM",
          22: "LVLH_COORDINATES",
          23: "ECI_COORDIANTES",
          24: "CHEBY_J2000",
        },
      },
      {
        parameter: "BODY_FIXED_COMMAND_FRAME_Z_DIRECTION",
        states: {
          1: "POSITIVE_X",
          2: "POSITIVE_Y",
          3: "POSITIVE_Z",
          4: "NEGATIVE_X",
          5: "NEGATIVE_Y",
          6: "NEGATIVE_Z",
        },
      },
      {
        parameter: "BODY_FIXED_COMMAND_FRAME_X_DIRECTION",
        states: {
          1: "POSITIVE_X",
          2: "POSITIVE_Y",
          3: "POSITIVE_Z",
          4: "NEGATIVE_X",
          5: "NEGATIVE_Y",
          6: "NEGATIVE_Z",
        },
      },
      {
        parameter: "ATTITUDE_INTERPRETATION",
        states: {
          0: "Quaternion",
          1: "RPY",
        },
      },
      {
        parameter: "RATE_INTERPRETATION",
        states: {
          0: "DISABLE",
          1: "ENABLE",
        },
      },
    ],
  },
  {
    command: "ADCS_195_TC_GET_ADCS_RW_SPEED_DATA",
    telemetry: "ADCS_195_TM_GET_ADCS_RW_SPEED_DATA",
    states: [
      {
        parameter: "Reaction_wheel_instance_ID",
        states: {
          0: "ALL_Reaction_Wheel",
          1: "Reaction_Wheel_1",
          2: "Reaction_Wheel_2",
          3: "Reaction_Wheel_3",
          4: "Reaction_Wheel_4",
        },
      },
    ],
  },
  {
    command: "ADCS_196_TC_GET_ADCS_RW_SPEED_MEASURE",
    telemetry: "ADCS_196_TM_GET_ADCS_RW_SPEED_MEASURE",
    states: [
      {
        parameter: "Reaction_wheel_instance_ID",
        states: {
          0: "ALL_Reaction_Wheel",
          1: "Reaction_Wheel_1",
          2: "Reaction_Wheel_2",
          3: "Reaction_Wheel_3",
          4: "Reaction_Wheel_4",
        },
      },
    ],
  },
  {
    command: "ADCS_142_TC_GET_ADCS_RW_MAGMTR",
    telemetry: "ADCS_142_TC_GET_ADCS_RW_MAGMTR",
    states: [
      {
        parameter: "Magnetometer_instance_ID",
        states: {
          0: "ALL_Magnetometer",
          1: "Magnetometer_1",
          2: "Magnetometer_2",
          3: "Magnetometer_3",
          4: "Magnetometer_4",
        },
      },
    ],
  },
  {
    command: "ADCS_248_TC_GET_ADCS_RAW_CSS",
    telemetry: "ADCS_248_TM_GET_ADCS_RAW_CSS",
    states: [
      {
        parameter: "CSS_ID",
        states: {
          0: "ALL_CSS",
          1: "CSS_1",
          2: "CSS_2",
          3: "CSS_3",
          4: "CSS_4",
          5: "CSS_5",
          6: "CSS_6",
          7: "CSS_7",
          8: "CSS_8",
          9: "CSS_9",
          10: "CSS_10",
          11: "CSS_11",
          12: "CSS_12",
        },
      },
    ],
  },
  {
    command: "ADCS_196_TC_GET_ADCS_RW_SPEED_MEASURE",
    telemetry: "ADCS_196_TM_GET_ADCS_RW_SPEED_MEASURE",
    states: [
      {
        parameter: "Reaction_wheel_instance_ID",
        states: {
          0: "ALL_Reaction_Wheel",
          1: "Reaction_Wheel_1",
          2: "Reaction_Wheel_2",
          3: "Reaction_Wheel_3",
          4: "Reaction_Wheel_4",
        },
      },
    ],
  },
  {
    command: "OBC_610_TC_GET_TEMP",
    telemetry: "OBC_610_TM_GET_TEMP",
    states: [
      {
        parameter: "DEVICE_ID",
        states: {
          0: "OBC",
          1: "PS",
          2: "ES",
        },
      },
    ],
  },
  {
    command: "OBC_611_TC_GET_TIME",
    telemetry: "OBC_611_TM_GET_TIME",
    states: [
      {
        parameter: "DEVICE_ID",
        states: {
          0: "OBC",
          1: "PAYLOAD_CONTROLLER",
          2: "EDGE_COMPUTER_NODE",
        },
      },
    ],
  },
  {
    command: "OBC_545_TC_PLD_VM_PWR_ON",
    telemetry: "OBC_545_TM_PLD_VM_PWR_ON",
    states: [
      {
        parameter: "VIRTUAL_MACHINE_ID",
        states: {
          136: "MSI",
          137: "SAR",
          138: "SELFIE_CAM",
        },
      },
    ],
  },
  {
    command: "OBC_546_TC_PLD_VM_PWR_OFF",
    telemetry: "OBC_546_TM_PLD_VM_PWR_OFF",
    states: [
      {
        parameter: "VIRTUAL_MACHINE_ID",
        states: {
          136: "MSI",
          137: "SAR",
          138: "SELFIE_CAM",
        },
      },
      {
        parameter: "SHUTDOWN_PURPOSE",
        states: {
          0: "ICM_SP_SYS_SHUT",
          1: "ICM_SP_LOW_BTRY",
          2: "ICM_SP_RST_RCVRY",
          3: "ICM_SP_OVR_TEMP",
          4: "ICM_SP_INVALID",
        },
      },
    ],
  },
];
