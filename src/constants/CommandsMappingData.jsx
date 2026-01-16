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
  {
    command: "EPS_211_TC_SET_DEVICE_STS",
    telemetry: "211_EPS_TM_SET_DEVICE_STS",
    states: [
      {
        parameter: "Channel_no",
        states: {
          1: "OBC",
          3: "PSBoard",
          7: "ADCS",
          9: "UHF",
          11: "S-Band",
          13: "X-Band-1",
          14: "X-Band-2",
          15: "Edge",
          17: "Thruster",
          19: "MSI",
          20: "SES-A",
          21: "SES-B",
          22: "SAS-A",
          23: "UHF-Burnwire",
          24: "SAS-B",
        },
      },
      {
        parameter: "Channel_state",
        states: {
          0: "OFF",
          1: "ON",
          2: "RESTART",
        },
      },
    ],
  },
  {
    command: "202_TC_SET_EPS_CONF_OPTION_1",
    telemetry: "OBC_545_TM_PLD_VM_PWR_ON",
    states: [
      {
        parameter: "WEEKDAY",
        states: {
          0: "MONDAY",
          1: "TUESDAY",
          2: "WEDNESDAY",
          3: "THRUSDAY",
          4: "FRIDAY",
          5: "SATURDAY",
          6: "SUNDAY",
        },
      },
    ],
  },
  {
    command: "PS_610_TC_PLD_UPGRADE_PLD_CMD",
    telemetry: "PS_610_TM_PLD_UPGRADE_PLD_CMD",
    states: [
      {
        parameter: "OPERATIONS",
        states: {
          0: "Upgrage_Run",
          1: "Upgrage_Docker_Image",
        },
      },
    ],
  },
  {
    command: "PS_611_TC_PLD_UPDATE_FACTORY_IMAGE_CMD",
    telemetry: "PS_611_TM_PLD_UPDATE_FACTORY_IMAGE_CMD",
    states: [
      {
        parameter: "OPERATIONS",
        states: {
          0: "Upgrage_Run",
          1: "Upgrage_Docker_Image",
        },
      },
    ],
  },
  {
    command: "PS_612_TC_PLD_RESTORE_FACTORY_IMAGE_CMD",
    telemetry: "PS_612_TM_PLD_RESTORE_FACTORY_IMAGE_CMD",
    states: [
      {
        parameter: "OPERATIONS",
        states: {
          0: "Upgrage_Run",
          1: "Upgrage_Docker_Image",
        },
      },
    ],
  },
  {
    command: "PS_615_TC_CHANGE_FTM_CONFIG_CMD",
    telemetry: "PS_615_TM_CHANGE_FTM_CONFIG_CMD",
    states: [
      {
        parameter: "Radio_ID",
        states: {
          5: "XBAND_1",
          6: "XBAND_2",
          148: 'SBAND'
        },
      },
    ],
  },
  {
    command: "OBC_599_TC_PS_ES_CONFIG_KEEP_ALIVE_RCVRY_TMOUT",
    telemetry: "OBC_599_TM_PS_ES_CONFIG_KEEP_ALIVE_RCVRY_TMOUT",
    states: [
      {
        parameter: "MODULE_ID",
        states: {
          0: "PS",
          1: "ES",
        },
      },
    ],
  },
  {
    command: "OBC_605_TC_GET_PS_ES_ACTIVE_INTF",
    telemetry: "OBC_605_TM_GET_PS_ES_ACTIVE_INTF",
    states: [
      {
        parameter: "INTERFACE_ID",
        states: {
          0: "GET_PS_PRIMARY_INTERFACE",
          1: "GET_ES_PRIMARY_INTERFACE",
        },
      },
    ],
  },
  {
    command: "OBC_650_TC_SET_XBAND_ROUT_PATH",
    telemetry: "OBC_650_TM_SET_XBAND_ROUT_PATH",
    states: [
      {
        parameter: "XBAND_IPCC_PATH",
        states: {
          24: "PS",
          25: "ES",
        },
      },
    ],
  },
  {
    command: "OBC_503_TC_OBC_MEM_DOWNLOAD",
    telemetry: "OBC_503_TM_OBC_MEM_DOWNLOAD",
    states: [
      {
        parameter: "MEMORY_TYPE",
        states: {
          0: "INTERNAL_RAM",
          1: "EXTERNAL_RAM",
          2: 'INTERNAL_FLASH',
          3: 'EXTERNAL_QSPI_FLASH',
          4: 'EXTERNAL_FMC_FLASH'
        },
      },
    ],
  },
  {
    command: "OBC_925_TC_GET_ON_BRD_TEMP",
    telemetry: "OBC_925_TM_GET_ON_BRD_TEMP",
    states: [
      {
        parameter: "SENSOR_ID",
        states: {
          0: "OBC",
          1: "PS",
          2: 'ES',
          3: 'NETWORK_INTERFACE_CONTROLLER',
          6: 'PS_SSD1',
          7: 'PS_SSD2',
          8: 'PS_SSD_3',
          9: 'PS_SSD4'

        },
      },
    ],
  },
  {
    command: "OBC_926_TC_GET_ON_BRD_PWR_INFO",
    telemetry: "OBC_926_TM_GET_ON_BRD_PWR_INFO",
    states: [
      {
        parameter: "SENSOR_ID",
        states: {
          20: "OBC_1",
          21: "OBC_2",
          22: "PS",
          23: "PS_1",
          24: "PS_2",
          25: "ES_1",
          26: "ES_2",
          27: "NIC",
          28: "PS_POWER_SWITCH",
          30: "PS_1_POWER_SWITCH",
          31: "PS_2_POWER_SWITCH",
          32: "ES_1_POWER_SWITCH",
          33: "ES_2_POWER_SWITCH",
          34: "NIC_POWER_SWITCH",
          35: "PS_SSD_1_HEAT_COIL_SWITCH",
          36: "PS_SSD_2_HEAT_COIL_SWITCH",
          37: "PS_SSD_3_HEAT_COIL_SWITCH",
          38: "PS_SSD_4_HEAT_COIL_SWITCH",
          39: "ES_SSD_1_HEAT_COIL_SWITCH",
          40: "ES_SSD_2_HEAT_COIL_SWITCH"
        },
      },
    ],
  },
];
