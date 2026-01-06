export const commandTelemetryDrishti = [
    {
        id: 1,
        command: '1021_TC_EXOTRAIL_GET_SYS_INFO',
        telemetry: '1021_TM_EXOTRAIL_GET_SYS_INFO',
        target: 'DRISHTI'
    },
    {
        id: 2,
        command: '1022_TC_EXOTRAIL_GET_HEAT_ACTIVITY',
        telemetry: '1022_TM_EXOTRAIL_GET_HEAT_ACTIVITY',
        target: 'DRISHTI'
    },
    {
        id: 3,
        command: '1023_TC_EXOTRAIL_GET_HK_FLUIDIC_INFO',
        telemetry: '1023_TM_EXOTRAIL_GET_HK_FLUIDIC_INFO',
        target: 'DRISHTI'
    },
    {
        id: 4,
        command: '1024_TC_EXOTRAIL_GET_HK_FLUIDIC_INFO',
        telemetry: '1024_TM_EXOTRAIL_GET_HK_FLUIDIC_INFO',
        target: 'DRISHTI'
    },
    {
        id: 5,
        command: '1025_TC_EXOTRAIL_GET_HK_THERMIC_INFO',
        telemetry: '1025_TM_EXOTRAIL_GET_HK_THERMIC_INFO',
        target: 'DRISHTI'
    },
    {
        id: 6,
        command: '581_OBC_TC_GET_CURRENT_TIME',
        telemetry: 'TM_GET_CURRENT_TIME',
        target: 'DRISHTI'
    },
]

// export const commandTelemetryEmulator = [
//     {
//         id: 1,
//         command: 'THRUSTER_1021_TC_EXOTRAIL_GET_SYS_INFO',
//         telemetry: 'THRUSTER_1021_TM_EXOTRAIL_GET_SYS_INFO',
//         target: 'EMULATOR',
//         parameters: ['SOFTWARE_VERSION', 'EXOTRIAL_OBC_CURRENT_MODE', 'ID_SAFE', 'COMMISSIONING_RESULT']
//     },
//     {
//         id: 2,
//         command: '1022_TC_EXOTRAIL_GET_HEAT_ACTIVITY',
//         telemetry: '1022_TM_EXOTRAIL_GET_HEAT_ACTIVITY',
//         target: 'EMULATOR',
//         parameters: ['THRUSTER_HEATER_ACTIVITY']

//     },
//     {
//         id: 3,
//         command: '1023_TC_EXOTRAIL_GET_HK_FLUIDIC_INFO',
//         telemetry: '1023_TM_EXOTRAIL_GET_HK_FLUIDIC_INFO',
//         target: 'EMULATOR',
//         parameters: ['ANODE_PULSE_COUNT', 'CATHODE_PULSE_COUNT', 'TANK_PRESSURE']
//     },
//     {
//         id: 4,
//         command: '1024_TC_EXOTRAIL_GET_HK_FLUIDIC_INFO',
//         telemetry: '1024_TM_EXOTRAIL_GET_HK_FLUIDIC_INFO',
//         target: 'EMULATOR',
//         parameters: ['PPU_OUTPUT_TEMPERATURE', 'PPU_INPUT_VOLTAGE', 'PPU_INPUT_CURRENT', 'PPU_INPUT_TEMPERATURE']
//     },
//     {
//         id: 5,
//         command: '1025_TC_EXOTRAIL_GET_HK_THERMIC_INFO',
//         telemetry: '1025_TM_EXOTRAIL_GET_HK_THERMIC_INFO',
//         target: 'EMULATOR',
//         parameters: ['TEMPERATURE_OF_THD_SUPPORT_1',
//             'TEMPERATURE_OF_THD_RADIATOR_1',
//             'TEMPERATURE_OF_THD_RADIATOR_2',
//             'TEMPERATURE_OF_TCU_OBC_1',
//             'TEMPERATURE_OF_PMS_ANODE_1',
//             'TEMPERATURE_OF_PMS_ANODE_2',
//             'TEMPERATURE_OF_PMS_CATHODE_1',
//             'TEMPERATURE_OF_PMS_CATHODE_2',
//             'TEMPERATURE_OF_PMS_INTERFACE_2']
//     },
//     {
//         id: 6,
//         command: 'OBC_581_TC_GET_CUR_TIME',
//         telemetry: 'OBC_581_TM_GET_CUR_TIME',
//         target: 'EMULATOR',
//         parameters: ['YEAR', 'MONTH', 'DATE', 'HOURS', 'MINUTE', 'MILLISECONDS']
//     },
//     {
//         id: 7,
//         command: '1026_TC_EXOTRAIL_GET_HK_POWER_INFO',
//         telemetry: '1026_TM_EXOTRAIL_GET_HK_POWER_INFO',
//         target: 'EMULATOR',
//         parameters: ['PPU_OUTPUT_TEMPERATURE',
//             'PPU_INPUT_VOLTAGE',
//             'PPU_INPUT_CURRENT',
//             'PPU_INPUT_TEMPERATURE']
//     },
//     {
//         id: 8,
//         command: '1027_TC_EXOTRAIL_GET_SAFE_LIMIT',
//         telemetry: '1027_TM_EXOTRAIL_GET_HK_FLUIDIC_INFO',
//         target: 'EMULATOR',
//         parameters: ['Maximum_temperature_limit_for_Thruster_Head_Radiator_1',
//             'Minimum_temperature_limit_for_Thruster_Head_Radiator_1',
//             'Maximum_temperature_limit_for_Thruster_PMS_Anode_1',
//             'Minimum_temperature_limit_for_Thruster_PMS_Anode_1',
//             'Maximum_temperature_limit_for_Thruster_PMS_Cathode_1',
//             'Minimum_temperature_limit_for_Thruster_PMS_Cathode_1',
//             'Maximum_temperature_limit_for_Thruster_Head_Radiator_2',
//             'Minimum_temperature_limit_for_Thruster_Head_Radiator_2',
//             'Maximum_temperature_limit_for_Thruster_PMS_Anode_2',
//             'Minimum_temperature_limit_for_Thruster_PMS_Anode_2',
//             'Maximum_temperature_limit_for_Thruster_PMS_Cathode_2',
//             'Minimum_temperature_limit_for_Thruster_PMS_Cathode_2',
//             'Maximum_temperature_limit_for_Thruster_PMS_Pressure_1',
//             'Minimum_temperature_limit_for_Thruster_PMS_Pressure_1',
//             'Maximum_temperature_limit_for_Thruster_Thruster_Head_Supply_1',
//             'Minimum_temperature_limit_for_Thruster_Head_Supply_1',
//             'Maximum_temperature_limit_for_Thruster_TCU_OnBoard_Computer_1',
//             'Minimum_temperature_limit_for_Thruster_TCU_OnBoard_Computer_1',
//             'Maximum_temperature_for_PPU',
//             'Maximum_pressure_for_tank']
//     },
//     {
//         id: 9,
//         command: '1028_TC_EXOTRAIL_GET_FLUIDIC_VALVE_SEL',
//         telemetry: '1028_TM_EXOTRAIL_GET_FLUIDIC_VALVE_SEL',
//         target: 'EMULATOR',
//         parameters: ['FLUIDIC_VALVE_MODE']
//     },
//     {
//         id: 10,
//         command: '1029_TC_EXOTRAIL_GET_HEATER_CFG',
//         telemetry: '1029_TM_EXOTRAIL_GET_HEATER_CFG',
//         target: 'EMULATOR',
//         parameters: ['RADIATOR_LOW_TEMPERATURE',
//             'RADIATOR_HIGH_TEMPERATURE',
//             'RADIATOR_HEATING_DURATIONS_IN_MINUTES',
//             'RESERVED'
//         ]
//     },
//     {
//         id: 11,
//         command: '1030_TC_EXOTRAIL_SET_FIRING_OPERATING_POINT',
//         telemetry: '1030_TM_EXOTRAIL_SET_FIRING_OPERATING_POINT',
//         target: 'EMULATOR',
//         parameters: ['EXOTRAIL_MODE']
//     },
//     {
//         id: 12,
//         command: '1031_TC_EXOTRAIL_TEST_SET_OBC_MODE',
//         telemetry: '1031_TM_EXOTRAIL_TEST_SET_OBC_MODE',
//         target: 'EMULATOR',
//         parameters: ['EXOTRAIL_MODE']
//     },
//     {
//         id: 13,
//         command: '1033_TC_EXOTRAIL_SET_SAFE_LIMIT',
//         telemetry: '1033_TM_EXOTRAIL_SET_SAFE_LIMIT',
//         target: 'EMULATOR',
//         parameters: ['EXOTRAIL_MODE']
//     },
//     {
//         id: 14,
//         command: '1034_TC_EXOTRAIL_SET_FLUIDIC_VALVE_SEL',
//         telemetry: '1034_TM_EXOTRAIL_SET_FLUIDIC_VALVE_SEL',
//         target: 'EMULATOR',
//         parameters: ['EXOTRAIL_MODE']
//     },
//     {
//         id: 15,
//         command: '1036_TC_EXOTRAIL_SET_FIRING_DURATION',
//         telemetry: '1036_TM_EXOTRAIL_SET_FIRING_DURATION',
//         target: 'EMULATOR',
//         parameters: ['EXOTRAIL_MODE']
//     },
//     {
//         id: 16,
//         command: '1038_TC_OBC_EXOTRIAL_THRUSTER_TM_DECODE_DATA',
//         telemetry: '1038_TM_OBC_EXOTRIAL_THRUSTER_TM_DECODE_DATA',
//         target: 'EMULATOR',
//         parameters: ['SOFTWARE_VERSION',
//             'CURRENT_MODE_OF_OBC_IN_THRUSTER',
//             'SAFETY_IDENTIFIER',
//             'HEATER_ACTIVITY_STATUS',
//             'PULSE_COUNT_FOR_ANODE_VALUE',
//             'PULSE_COUNT_FOR_CATHODE_VALUE',
//             'COMMISSIONING_RESULT',
//             'PPU_OUTPUT_TEMP',
//             'INPUT_VOLTAGE_MEASUREMENT',
//             'INPUT_CURRENT_MEASUREMENT',
//             'PPU_INPUT_TEMPERATURE',
//             'TANK_PRESSURE',
//             'TEMPERATURE_OF_THRUSTER_HEAD_SUPPORT_1',
//             'TEMPERATURE_OF_THRUSTER_HEAD_RADIATOR_1',
//             'TEMPERATURE_OF_THRUSTER_HEAD_RADIATOR_2',
//             'TEMPERATURE_OF_TCU_ON_BOARD_CONTROLLER_1',
//             'TEMPERATURE_OF_TANK_1_PMS_1',
//             'TEMPERATURE_OF_TANK_2_PMS_1',
//             'TEMPERATURE_OF_TANK_2_PMS_2',
//             'TEMPERATURE_OF_TANK_2_PMS_3',
//             'TEMPERATURE_OF_PMS_ANODE_1',
//             'TEMPERATURE_OF_PMS_ANODE_2',
//             'TEMPERATURE_OF_PMS_CATHODE_1',
//             'TEMPERATURE_OF_PMS_CATHODE_2',
//             'TEMPERATURE_OF_PMS_PRESSURE_1',
//             'TEMPERATURE_OF_TANK_3_1_IN_PMS',
//             'TEMPERATURE_OF_TANK_3_2_IN_PMS',
//             'VOLTAGE_MEASUREMENT_AT_15V_INPUT',
//             'POWER_15V_VALVES_2_AND_4',
//             'REFERENCE_VOLTAGE_2V5',
//             'VOLTAGE_MEASUREMENT_5V_INPUT',
//             'VOLTAGE_MEASUREMENT_3V3_INPUT',
//             'THRUSTER_OBC_MODE',
//             'THERMAL_MEASUREMENT_FREQUENCY',
//             'DURATION_OF_FIRING_EVENT',
//             'LOWER_SETPOINT_RADIATOR_TEMP',
//             'UPPER_SETPOINT_RADIATOR_TEMP',
//             'RADIATOR_HEATING_DURATION',
//             'LOWER_SETPOINT_TANK1',
//             'UPPER_SETPOINT_TANK1',
//             'TANK1_HEATING_DURATION',
//             'LOWER_SETPOINT_TANK2',
//             'UPPER_SETPOINT_TANK2',
//             'TANK2_HEATING_DURATION',
//             'LOWER_SETPOINT_TANK3',
//             'UPPER_SETPOINT_TANK3',
//             'TANK3_HEATING_DURATION',
//             'FLUIDIC_VALVE_SELECTION',
//             'MAX_THR_HEAD_RAD1_THERM_LIMIT',
//             'MIN_THR_HEAD_RAD1_THERM_LIMIT',
//             'MAX_PMS_ANODE1_THERM_LIMIT',
//             'MIN_PMS_ANODE1_THERM_LIMIT',
//             'MAX_PMS_CATHODE1_THERM_LIMIT',
//             'MIN_PMS_CATHODE1_THERM_LIMIT',
//             'MAX_THR_HEAD_RAD2_THERM_LIMIT',
//             'MIN_THR_HEAD_RAD2_THERM_LIMIT',
//             'MAX_PMS_ANODE2_THERM_LIMIT',
//             'MIN_PMS_ANODE2_THERM_LIMIT',
//             'MAX_PMS_CATHODE2_THERM_LIMIT',
//             'MIN_PMS_CATHODE2_THERM_LIMIT',
//             'MAX_PMS_PRESSURE1_THERM_LIMIT',
//             'MIN_PMS_PRESSURE1_THERM_LIMIT',
//             'MAX_THR_HEAD_SUPERVISION1_LIMIT',
//             'MIN_THR_HEAD_SUPERVISION1_LIMIT',
//             'MAX_TCU_OBC1_LIMIT',
//             'MIN_TCU_OBC1_LIMIT',
//             'MAX_PPU_TEMP_LIMIT',
//             'MAX_TANK_PRESSURE',
//             'MAGIC_NUMBER_1',
//             'MAGIC_NUMBER_2',
//             'STRUCTURE_END_FLAG_1',
//             'STRUCTURE_END_FLAG_2']
//     },
//     {
//         id: 17,
//         command: '19_ADCS_TC_SET_CONTROL_ECEF_ATTITUDE_TARGET_REFERENCE',
//         telemetry: '',
//         target: 'EMULATOR',
//         parameters: ['ID', 'STATUS']
//     },
//     {
//         id: 18,
//         command: '19_ADCS_TC_SET_CONTROL_ECI_ATTITUDE_TARGET_REFERENCE',
//         telemetry: '',
//         target: 'EMULATOR',
//         parameters: []
//     },
//     {
//         id: 19,
//         command: '19_ADCS_TC_SET_CONTROL_FINE_SUN_TARGET_REFERENCE',
//         telemetry: '',
//         target: 'EMULATOR',
//         parameters: []
//     },
//     {
//         id: 20,
//         command: '19_ADCS_TC_SET_CONTROL_LLH_TARGET_REFERENCE',
//         telemetry: '',
//         target: 'EMULATOR',
//         parameters: []
//     },
//     {
//         id: 21,
//         command: '19_ADCS_TC_SET_CONTROL_LVLH_ATTITUDE_TARGET_REFERENCE',
//         telemetry: '',
//         target: 'EMULATOR',
//         parameters: []
//     },
//     {
//         id: 22,
//         command: '19_ADCS_TC_SET_CONTROL_LVLH_ATTITUDE_TARGET_REFERENCE',
//         telemetry: '',
//         target: 'EMULATOR',
//         parameters: []
//     },
//     {
//         id: 23,
//         command: '19_ADCS_TC_SET_CONTROL_MODE_DETUMBLING',
//         telemetry: '',
//         target: 'EMULATOR',
//         parameters: []
//     },
//     {
//         id: 24,
//         command: '19_ADCS_TC_SET_CONTROL_MODE_NADAR_POINTING',
//         telemetry: '',
//         target: 'EMULATOR',
//         parameters: []
//     },
//     {
//         id: 25,
//         command: '19_ADCS_TC_SET_CONTROL_MODE_NONE',
//         telemetry: '',
//         target: 'EMULATOR',
//         parameters: []
//     },
//     {
//         id: 26,
//         command: '19_ADCS_TC_SET_CONTROL_MODE_SUN_POINTING',
//         telemetry: '',
//         target: 'EMULATOR',
//         parameters: []
//     },
//     {
//         id: 27,
//         command: '19_ADCS_TC_SET_CONTROL_MODE_Y_SPIN_STABLISATION',
//         telemetry: '',
//         target: 'EMULATOR',
//         parameters: []
//     },
//     {
//         id: 28,
//         command: '19_ADCS_TC_SET_CONTROL_MODE_Z_SPIN_STABLISATION',
//         telemetry: '',
//         target: 'EMULATOR',
//         parameters: []
//     },
//     {
//         id: 29,
//         command: '200_EPS_TC_GET_SUB_SYS_INFO',
//         telemetry: '200_EPS_TM_SUB_SYS_INFO',
//         target: 'EMULATOR',
//         parameters: []
//     },
//     {
//         id: 30,
//         command: '201_EPS_TC_GET_CONF',
//         telemetry: '201_EPS_TM_CONF',
//         target: 'EMULATOR',
//         parameters: []
//     },
//     {
//         id: 31,
//         command: '211_EPS_TC_SET_EPS_CHANNEL_STATUS',
//         telemetry: '211_TM_SET_DEVICE_STS',
//         target: 'EMULATOR',
//         parameters: []
//     },
//     {
//         id: 32,
//         command: '212_EPS_TC_GET_DEV_HW_STATUS',
//         telemetry: '212_EPS_TM_GET_DEV_HW_STATUS',
//         target: 'EMULATOR',
//         parameters: []
//     },
//     {
//         id: 33,
//         command: '500_OBC_TC_GET_OBC_CPU_USAGE',
//         telemetry: '',
//         target: 'EMULATOR',
//         parameters: []
//     },
//     {
//         id: 34,
//         command: '501_OBC_TC_GET_MEMORY_UTILISATION',
//         telemetry: '',
//         target: 'EMULATOR',
//         parameters: []
//     },
//     {
//         id: 35,
//         command: '545_OBC_TC_VM_POWER_ON',
//         telemetry: '',
//         target: 'EMULATOR',
//         parameters: []
//     },
//     {
//         id: 36,
//         command: '546_OBC_TC_VM_POWER_OFF',
//         telemetry: '',
//         target: 'EMULATOR',
//         parameters: []
//     },
//     {
//         id: 37,
//         command: '550_OBC_TC_SET_CUR_TIME',
//         telemetry: '',
//         target: 'EMULATOR',
//         parameters: ['YEAR',
//             'MONTH',
//             'DATE',
//             'HOURS',
//             'MINUTE', 'MILLISECONDS']
//     },
//     {
//         id: 38,
//         command: '600_PAYLOAD_TC_SEQUENCE',
//         telemetry: '',
//         target: 'EMULATOR',
//         parameters: []
//     },
//     {
//         id: 39,
//         command: '610_OBC_TC_GET_PS_TEMP',
//         telemetry: '',
//         target: 'EMULATOR',
//         parameters: []
//     },
//     {
//         id: 40,
//         command: '611_OBC_TC_GET_PS_TIME',
//         telemetry: '',
//         target: 'EMULATOR',
//         parameters: []
//     },
//     {
//         id: 41,
//         command: '615_TC_FTM_START_CMD',
//         telemetry: '615_TM_FTM_START_CMD',
//         target: 'EMULATOR',
//         parameters: ['Status']
//     },
//     {
//         id: 42,
//         command: '616_TC_FTM_STOP_CMD',
//         telemetry: '616_TM_FTM_STOP_CMD',
//         target: 'EMULATOR',
//         parameters: []
//     },
//     {
//         id: 43,
//         command: '619_TC_GET_FILES_IN_DATABASE',
//         telemetry: '619_TM_GET_FILES_IN_DATABASE',
//         target: 'EMULATOR',
//         parameters: ['Application_Id1',
//             'File_Unique_id1',
//             'Priority1',
//             'State1',
//             'Application_Id2',
//             'File_Unique_id2',
//             'Priority2',
//             'State2',
//             'Application_Id3',
//             'File_Unique_id3',
//             'Priority3',
//             'State3']
//     },
//     {
//         id: 44,
//         command: '619_TM_SAMPLE_GET_FILES_IN_DATABASE',
//         telemetry: '',
//         target: 'EMULATOR',
//         parameters: []
//     },
//     {
//         id: 45,
//         command: '620_TC_MANAGE_FILE_STATE',
//         telemetry: '620_TM_MANAGE_FILE_STATE',
//         target: 'EMULATOR',
//         parameters: []
//     },
//     {
//         id: 46,
//         command: '638_OBC_TC_GET_MCU_RESET_INFO',
//         telemetry: '',
//         target: 'EMULATOR',
//         parameters: []
//     },
//     {
//         id: 47,
//         command: 'FTM_SEND_DATA_PCKTS',
//         telemetry: '',
//         target: 'EMULATOR',
//         parameters: []
//     },
//     {
//         id: 48,
//         command: 'TC_547',
//         telemetry: 'TM_547',
//         target: 'EMULATOR',
//         parameters: []
//     },
//     {
//         id: 49,
//         command: 'TC_549',
//         telemetry: '549_TM',
//         target: 'EMULATOR',
//         parameters: ['UL_STATUS_1',
//             'SEGMENTS_IN_LUT_1',
//             'EVENTS_IN_LUT_1',
//             'CURRENT_SEGMENT_ID_1',
//             'CURRENT_EVENT_COUNT_1',
//             'ID_OF_SEGMENTS_EXPECTED_1',
//             'ID_OF_SEGMENTS_RECEIVED_1',
//             'ID_OF_SEGMENTS_EXECUTED_1',
//             'RESERVED_1',
//             'UL_STATUS_2',
//             'TOTAL_SEGMENTS_IN_LUT_2',
//             'TOTAL_EVENTS_IN_LUT_2',
//             'CURRENT_SEGMENT_ID_2',
//             'CURRENT_EVENT_COUNT_2',
//             'ID_OF_SEGMENTS_EXPECTED_2',
//             'ID_OF_SEGMENTS_RECEIVED_2',
//             'ID_OF_SEGMENTS_EXECUTED_2',
//             'RESERVED_2']
//     },
//     {
//         id: 50,
//         command: 'TC_CONOPS_LUT_RUN_CTRL',
//         telemetry: 'TM_CONOPS_SCH_LUT_RUN_CTRL',
//         target: 'EMULATOR',
//         parameters: ['STATUS']
//     },
//     {
//         id: 51,
//         command: 'TC_DEFFERED_STRG_OPT',
//         telemetry: 'TM_DEFERRED_STORAGE',
//         target: 'EMULATOR',
//         parameters: []
//     },
//     {
//         id: 52,
//         command: 'TC_GET_HEALTH_METRICS',
//         telemetry: '',
//         target: 'EMULATOR',
//         parameters: []
//     },
//     {
//         id: 53,
//         command: 'TC_OBC_PLD_VM_PWR_OFF',
//         telemetry: 'TM_PLD_VM_PWR_OFF',
//         target: 'EMULATOR',
//         parameters: ['VALUE', 'BOOL']
//     },
//     {
//         id: 54,
//         command: 'OBC_500_TC_GET_PROC_UTIL_INFO',
//         telemetry: 'OBC_500_TM_GET_PROC_UTIL_INFO',
//         target: 'EMULATOR',
//         parameters: ['CPU_USAGE']
//     },
//     {
//         id: 54,
//         command: 'OBC_550_TC_SET_CUR_TIME',
//         telemetry: 'OBC_550_TM_SET_CUR_TIME',
//         target: 'EMULATOR',
//         parameters: ['']
//     },
// ]
export const commandTelemetryEmulator = [
    {
        id: 1,
        command: 'THRUSTER_1021_TC_EXOTRAIL_GET_SYS_INFO',
        telemetry: 'THRUSTER_1021_TM_EXOTRAIL_GET_SYS_INFO',
        target: 'EMULATOR',
        parameters: ['SOFTWARE_VERSION', 'EXOTRIAL_OBC_CURRENT_MODE', 'ID_SAFE', 'COMMISSIONING_RESULT']
    },
    {
        id: 2,
        command: 'THRUSTER_1022_TC_EXOTRAIL_GET_HEAT_ACTIVITY',
        telemetry: 'THRUSTER_1022_TM_EXOTRAIL_GET_HEAT_ACTIVITY',
        target: 'EMULATOR',
        parameters: ['THRUSTER_HEATER_ACTIVITY']

    },
    {
        id: 3,
        command: 'THRUSTER_1023_TC_EXOTRAIL_GET_HK_FLUIDIC_INFO',
        telemetry: 'THRUSTER_1023_TM_EXOTRAIL_GET_HK_FLUIDIC_INFO',
        target: 'EMULATOR',
        parameters: ['ANODE_PULSE_COUNT', 'CATHODE_PULSE_COUNT', 'TANK_PRESSURE']

    },
    {
        id: 4,
        command: 'THRUSTER_1024_TC_EXOTRAIL_GET_HK_FLUIDIC_INFO',
        telemetry: 'THRUSTER_1024_TM_EXOTRAIL_GET_HK_FLUIDIC_INFO',
        target: 'EMULATOR',
        parameters: ['PPU_OUTPUT_TEMPERATURE', 'PPU_INPUT_VOLTAGE', 'PPU_INPUT_CURRENT', 'PPU_INPUT_TEMPERATURE']

    },
    {
        id: 5,
        command: 'THRUSTER_1025_TC_EXOTRAIL_GET_HK_THERMIC_INFO',
        telemetry: 'THRUSTER_1025_TM_EXOTRAIL_GET_HK_THERMIC_INFO',
        target: 'EMULATOR',
        parameters: ['TEMPERATURE_OF_THD_SUPPORT_1',
            'TEMPERATURE_OF_THD_RADIATOR_1',
            'TEMPERATURE_OF_THD_RADIATOR_2',
            'TEMPERATURE_OF_TCU_OBC_1',
            'TEMPERATURE_OF_PMS_ANODE_1',
            'TEMPERATURE_OF_PMS_ANODE_2',
            'TEMPERATURE_OF_PMS_CATHODE_1',
            'TEMPERATURE_OF_PMS_CATHODE_2',
            'TEMPERATURE_OF_PMS_INTERFACE_2']
    },
    {
        id: 6,
        command: 'OBC_581_TC_GET_CUR_TIME',
        telemetry: 'OBC_581_TM_GET_CUR_TIME',
        target: 'EMULATOR',
        parameters: ['Year', 'Month', 'Date', 'Hours', 'Minute', 'Milliseconds', 'Responce']
    },
    {
        id: 7,
        command: 'THRUSTER_1026_TC_EXOTRAIL_GET_HK_POWER_INFO',
        telemetry: 'THRUSTER_1026_TM_EXOTRAIL_GET_HK_POWER_INFO',
        target: 'EMULATOR',
        parameters: ['Thruster_input_voltage_15v',
            'Thruster_2v5_ref_volt',
            'Thruster_input_volt_5v',
            'Thruster_input_volt_3v3']
    },
    {
        id: 8,
        command: 'THRUSTER_1027_TC_EXOTRAIL_GET_SAFE_LIMIT',
        telemetry: 'THRUSTER_1027_TM_EXOTRAIL_GET_HK_FLUIDIC_INFO',
        target: 'EMULATOR',
        parameters: ['Maximum_temperature_limit_for_Thruster_Head_Radiator_1',
            'Minimum_temperature_limit_for_Thruster_Head_Radiator_1',
            'Maximum_temperature_limit_for_Thruster_PMS_Anode_1',
            'Minimum_temperature_limit_for_Thruster_PMS_Anode_1',
            'Maximum_temperature_limit_for_Thruster_PMS_Cathode_1',
            'Minimum_temperature_limit_for_Thruster_PMS_Cathode_1',
            'Maximum_temperature_limit_for_Thruster_Head_Radiator_2',
            'Minimum_temperature_limit_for_Thruster_Head_Radiator_2',
            'Maximum_temperature_limit_for_Thruster_PMS_Anode_2',
            'Minimum_temperature_limit_for_Thruster_PMS_Anode_2',
            'Maximum_temperature_limit_for_Thruster_PMS_Cathode_2',
            'Minimum_temperature_limit_for_Thruster_PMS_Cathode_2',
            'Maximum_temperature_limit_for_Thruster_PMS_Pressure_1',
            'Minimum_temperature_limit_for_Thruster_PMS_Pressure_1',
            'Maximum_temperature_limit_for_Thruster_Thruster_Head_Supply_1',
            'Minimum_temperature_limit_for_Thruster_Head_Supply_1',
            'Maximum_temperature_limit_for_Thruster_TCU_OnBoard_Computer_1',
            'Minimum_temperature_limit_for_Thruster_TCU_OnBoard_Computer_1',
            'Maximum_temperature_for_PPU',
            'Maximum_pressure_for_tank']
    },
    {
        id: 9,
        command: 'THRUSTER_1028_TC_EXOTRAIL_GET_FLUIDIC_VALVE_SEL',
        telemetry: 'THRUSTER_1028_TM_EXOTRAIL_GET_FLUIDIC_VALVE_SEL',
        target: 'EMULATOR',
        parameters: ['FLUIDIC_VALVE_MODE']
    },
    {
        id: 10,
        command: 'THRUSTER_1029_TC_EXOTRAIL_GET_HEATER_CFG',
        telemetry: 'THRUSTER_1029_TM_EXOTRAIL_GET_HEATER_CFG',
        target: 'EMULATOR',
        parameters: ['RADIATOR_LOW_TEMPERATURE',
            'RADIATOR_HIGH_TEMPERATURE',
            'RADIATOR_HEATING_DURATIONS_IN_MINUTES',
        ]
    },
    {
        id: 11,
        command: 'THRUSTER_1030_TC_EXOTRAIL_SET_FIRING_OPERATING_POINT',
        telemetry: 'THRUSTER_1030_TM_EXOTRAIL_SET_FIRING_OPERATING_POINT',
        target: 'EMULATOR',
        parameters: ['EXOTRAIL_MODE']
    },
    {
        id: 12,
        command: 'THRUSTER_1031_TC_EXOTRAIL_TEST_SET_OBC_MODE',
        telemetry: 'THRUSTER_1031_TM_EXOTRAIL_TEST_SET_OBC_MODE',
        target: 'EMULATOR',
        parameters: ['EXOTRIAL_OBC_MODE']
    },
    {
        id: 13,
        command: 'THRUSTER_1033_TC_EXOTRAIL_SET_SAFE_LIMIT',
        telemetry: 'THRUSTER_1033_TM_EXOTRAIL_SET_SAFE_LIMIT',
        target: 'EMULATOR',
        parameters: ["EXOTRAIL_MODE"]
    },
    {
        id: 14,
        command: 'THRUSTER_1034_TC_EXOTRAIL_SET_FLUIDIC_VALVE_SEL',
        telemetry: 'THRUSTER_1034_TM_EXOTRAIL_SET_FLUIDIC_VALVE_SEL',
        target: 'EMULATOR',
        parameters: ['EXOTRAIL_MODE']
    },
    {
        id: 15,
        command: 'THRUSTER_1036_TC_EXOTRAIL_SET_FIRING_DURATION',
        telemetry: 'THRUSTER_1036_TM_EXOTRAIL_SET_FIRING_DURATION',
        target: 'EMULATOR',
        parameters: ['EXOTRAIL_MODE']
    },
    {
        id: 16,
        command: 'THRUSTER_1038_TC_OBC_EXOTRIAL_THRUSTER_TM_DECODE_DATA',
        telemetry: 'THRUSTER_1038_TM_OBC_EXOTRIAL_THRUSTER_TM_DECODE_DATA',
        target: 'EMULATOR',
        parameters: ['SOFTWARE_VERSION',
            'CURRENT_MODE_OF_OBC_IN_THRUSTER',
            'SAFETY_IDENTIFIER',
            'HEATER_ACTIVITY_STATUS',
            'PULSE_COUNT_FOR_ANODE_VALUE',
            'PULSE_COUNT_FOR_CATHODE_VALUE',
            'COMMISSIONING_RESULT',
            'PPU_OUTPUT_TEMP',
            'INPUT_VOLTAGE_MEASUREMENT',
            'INPUT_CURRENT_MEASUREMENT',
            'PPU_INPUT_TEMPERATURE',
            'TANK_PRESSURE',
            'TEMPERATURE_OF_THRUSTER_HEAD_SUPPORT_1',
            'TEMPERATURE_OF_THRUSTER_HEAD_RADIATOR_1',
            'TEMPERATURE_OF_THRUSTER_HEAD_RADIATOR_2',
            'TEMPERATURE_OF_TCU_ON_BOARD_CONTROLLER_1',
            'TEMPERATURE_OF_TANK_1_PMS_1',
            'TEMPERATURE_OF_TANK_2_PMS_1',
            'TEMPERATURE_OF_TANK_2_PMS_2',
            'TEMPERATURE_OF_TANK_2_PMS_3',
            'TEMPERATURE_OF_PMS_ANODE_1',
            'TEMPERATURE_OF_PMS_ANODE_2',
            'TEMPERATURE_OF_PMS_CATHODE_1',
            'TEMPERATURE_OF_PMS_CATHODE_2',
            'TEMPERATURE_OF_PMS_PRESSURE_1',
            'TEMPERATURE_OF_TANK_3_1_IN_PMS',
            'TEMPERATURE_OF_TANK_3_2_IN_PMS',
            'VOLTAGE_MEASUREMENT_AT_15V_INPUT',
            'POWER_15V_VALVES_2_AND_4',
            'REFERENCE_VOLTAGE_2V5',
            'VOLTAGE_MEASUREMENT_5V_INPUT',
            'VOLTAGE_MEASUREMENT_3V3_INPUT',
            'THRUSTER_OBC_MODE',
            'THERMAL_MEASUREMENT_FREQUENCY',
            'DURATION_OF_FIRING_EVENT',
            'LOWER_SETPOINT_RADIATOR_TEMP',
            'UPPER_SETPOINT_RADIATOR_TEMP',
            'RADIATOR_HEATING_DURATION',
            'LOWER_SETPOINT_TANK1',
            'UPPER_SETPOINT_TANK1',
            'TANK1_HEATING_DURATION',
            'LOWER_SETPOINT_TANK2',
            'UPPER_SETPOINT_TANK2',
            'TANK2_HEATING_DURATION',
            'LOWER_SETPOINT_TANK3',
            'UPPER_SETPOINT_TANK3',
            'TANK3_HEATING_DURATION',
            'FLUIDIC_VALVE_SELECTION',
            'MAX_THR_HEAD_RAD1_THERM_LIMIT',
            'MIN_THR_HEAD_RAD1_THERM_LIMIT',
            'MAX_PMS_ANODE1_THERM_LIMIT',
            'MIN_PMS_ANODE1_THERM_LIMIT',
            'MAX_PMS_CATHODE1_THERM_LIMIT',
            'MIN_PMS_CATHODE1_THERM_LIMIT',
            'MAX_THR_HEAD_RAD2_THERM_LIMIT',
            'MIN_THR_HEAD_RAD2_THERM_LIMIT',
            'MAX_PMS_ANODE2_THERM_LIMIT',
            'MIN_PMS_ANODE2_THERM_LIMIT',
            'MAX_PMS_CATHODE2_THERM_LIMIT',
            'MIN_PMS_CATHODE2_THERM_LIMIT',
            'MAX_PMS_PRESSURE1_THERM_LIMIT',
            'MIN_PMS_PRESSURE1_THERM_LIMIT',
            'MAX_THR_HEAD_SUPERVISION1_LIMIT',
            'MIN_THR_HEAD_SUPERVISION1_LIMIT',
            'MAX_TCU_OBC1_LIMIT',
            'MIN_TCU_OBC1_LIMIT',
            'MAX_PPU_TEMP_LIMIT',
            'MAX_TANK_PRESSURE',
            'MAGIC_NUMBER_1',
            'MAGIC_NUMBER_2',
            'STRUCTURE_END_FLAG_1',
            'STRUCTURE_END_FLAG_2'
        ]
    },
    {
        id: 17,
        command: 'OBC_500_TC_GET_PROC_UTIL_INFO',
        telemetry: 'OBC_500_TM_GET_PROC_UTIL_INFO',
        target: 'EMULATOR',
        parameters: ['CPU_USAGE']
    },
    {
        id: 18,
        command: 'OBC_550_TC_SET_CUR_TIME',
        telemetry: 'OBC_550_TM_SET_CUR_TIME',
        target: 'EMULATOR',
        parameters: ['Year', 'Month', 'Date', 'Hours', 'Minute', 'Milliseconds', 'Responce']

    },
    {
        id: 19,
        command: 'FTM_SEND_DATA_PCKTS',
        telemetry: '',
        target: 'EMULATOR',
        parameters: []
    },
    {
        id: 20,
        command: 'TC_547',
        telemetry: 'TM_547',
        target: 'EMULATOR',
        parameters: ['SEGMENT_ID', 'LUT_ID']
    },
    {
        id: 21,
        command: 'TC_549',
        telemetry: '549_TM',
        target: 'EMULATOR',
        parameters: ['Response_type', 'UL_STATUS_1',
            'TOTAL_SEGMENTS_IN_LUT_1',
            'TOTAL_EVENTS_IN_LUT_1',
            'CURRENT_SEGMENT_ID',
            'CURRENT_EVENT_COUNT',
            'ID_OF_SEGMENTS_EXPECTED',
            'ID_OF_SEGMENTS_EXPECTED_7',
            'ID_OF_SEGMENTS_EXPECTED_6',
            'ID_OF_SEGMENTS_EXPECTED_5',
            'ID_OF_SEGMENTS_EXPECTED_4',
            'ID_OF_SEGMENTS_EXPECTED_3',
            'ID_OF_SEGMENTS_EXPECTED_2',
            'ID_OF_SEGMENTS_EXPECTED_1',
            'ID_OF_SEGMENTS_EXPECTED_0',
            'ID_OF_SEGMENTS_RECEIVED',
            'ID_OF_SEGMENTS_RECEIVED_7',
            'ID_OF_SEGMENTS_RECEIVED_6',
            'ID_OF_SEGMENTS_RECEIVED_5',
            'ID_OF_SEGMENTS_RECEIVED_4',
            'ID_OF_SEGMENTS_RECEIVED_3',
            'ID_OF_SEGMENTS_RECEIVED_2',
            'ID_OF_SEGMENTS_RECEIVED_1',
            'ID_OF_SEGMENTS_RECEIVED_0',
            'ID_OF_SEGMENTS_EXECUTED',
            'ID_OF_SEGMENTS_EXECUTED_7',
            'ID_OF_SEGMENTS_EXECUTED_6',
            'ID_OF_SEGMENTS_EXECUTED_5',
            'ID_OF_SEGMENTS_EXECUTED_4',
            'ID_OF_SEGMENTS_EXECUTED_3',
            'ID_OF_SEGMENTS_EXECUTED_2',
            'ID_OF_SEGMENTS_EXECUTED_1',
            'ID_OF_SEGMENTS_EXECUTED_0',
            'RESERVED_1']
    },
    {
        id: 22,
        command: 'TC_CONOPS_LUT_RUN_CTRL',
        telemetry: 'TM_CONOPS_SCH_LUT_RUN_CTRL',
        target: 'EMULATOR',
        parameters: ['STATUS']
    },
    {
        id: 23,
        command: 'TC_DEFFERED_STRG_OPT',
        telemetry: 'TM_DEFERRED_STORAGE',
        target: 'EMULATOR',
        parameters: ['ADDRESS_OFFSET']
    },
    {
        id: 17,
        command: '19_ADCS_TC_SET_CONTROL_ECEF_ATTITUDE_TARGET_REFERENCE',
        telemetry: '',
        target: 'EMULATOR',
        parameters: ['ID', 'STATUS']
    },
    {
        id: 18,
        command: '19_ADCS_TC_SET_CONTROL_ECI_ATTITUDE_TARGET_REFERENCE',
        telemetry: '',
        target: 'EMULATOR',
        parameters: []
    },
    {
        id: 19,
        command: '19_ADCS_TC_SET_CONTROL_FINE_SUN_TARGET_REFERENCE',
        telemetry: '',
        target: 'EMULATOR',
        parameters: []
    },
    {
        id: 20,
        command: '19_ADCS_TC_SET_CONTROL_LLH_TARGET_REFERENCE',
        telemetry: '',
        target: 'EMULATOR',
        parameters: []
    },
    {
        id: 21,
        command: '19_ADCS_TC_SET_CONTROL_LVLH_ATTITUDE_TARGET_REFERENCE',
        telemetry: '',
        target: 'EMULATOR',
        parameters: []
    },
    {
        id: 22,
        command: '19_ADCS_TC_SET_CONTROL_LVLH_ATTITUDE_TARGET_REFERENCE',
        telemetry: '',
        target: 'EMULATOR',
        parameters: []
    },
    {
        id: 23,
        command: '19_ADCS_TC_SET_CONTROL_MODE_DETUMBLING',
        telemetry: '',
        target: 'EMULATOR',
        parameters: []
    },
    {
        id: 24,
        command: '19_ADCS_TC_SET_CONTROL_MODE_NADAR_POINTING',
        telemetry: '',
        target: 'EMULATOR',
        parameters: []
    },
    {
        id: 25,
        command: '19_ADCS_TC_SET_CONTROL_MODE_NONE',
        telemetry: '',
        target: 'EMULATOR',
        parameters: []
    },
    {
        id: 26,
        command: '19_ADCS_TC_SET_CONTROL_MODE_SUN_POINTING',
        telemetry: '',
        target: 'EMULATOR',
        parameters: []
    },
    {
        id: 27,
        command: '19_ADCS_TC_SET_CONTROL_MODE_Y_SPIN_STABLISATION',
        telemetry: '',
        target: 'EMULATOR',
        parameters: []
    },
    {
        id: 28,
        command: '19_ADCS_TC_SET_CONTROL_MODE_Z_SPIN_STABLISATION',
        telemetry: '',
        target: 'EMULATOR',
        parameters: []
    },
    {
        id: 29,
        command: '200_EPS_TC_GET_SUB_SYS_INFO',
        telemetry: '200_EPS_TM_SUB_SYS_INFO',
        target: 'EMULATOR',
        parameters: []
    },
    {
        id: 30,
        command: '201_EPS_TC_GET_CONF',
        telemetry: '201_EPS_TM_CONF',
        target: 'EMULATOR',
        parameters: []
    },
    {
        id: 31,
        command: '211_EPS_TC_SET_EPS_CHANNEL_STATUS',
        telemetry: '211_TM_SET_DEVICE_STS',
        target: 'EMULATOR',
        parameters: []
    },
    {
        id: 32,
        command: '212_EPS_TC_GET_DEV_HW_STATUS',
        telemetry: '212_EPS_TM_GET_DEV_HW_STATUS',
        target: 'EMULATOR',
        parameters: []
    },
    {
        id: 33,
        command: 'OBC_500_TC_GET_PROC_UTIL_INFO',
        telemetry: '',
        target: 'EMULATOR',
        parameters: ['CPU_USAGE']
    },
    {
        id: 34,
        command: '501_OBC_TC_GET_MEMORY_UTILISATION',
        telemetry: '',
        target: 'EMULATOR',
        parameters: []
    },
    {
        id: 35,
        command: '545_OBC_TC_VM_POWER_ON',
        telemetry: '',
        target: 'EMULATOR',
        parameters: []
    },
    {
        id: 36,
        command: '546_OBC_TC_VM_POWER_OFF',
        telemetry: '',
        target: 'EMULATOR',
        parameters: []
    },
    {
        id: 37,
        command: 'OBC_550_TC_SET_CUR_TIME',
        telemetry: '',
        target: 'EMULATOR',
        parameters: ['YEAR',
            'MONTH',
            'DATE',
            'HOURS',
            'MINUTE', 'MILLISECONDS']
    },
    {
        id: 38,
        command: '600_PAYLOAD_TC_SEQUENCE',
        telemetry: '',
        target: 'EMULATOR',
        parameters: []
    },
    {
        id: 39,
        command: '610_OBC_TC_GET_PS_TEMP',
        telemetry: '',
        target: 'EMULATOR',
        parameters: []
    },
    {
        id: 40,
        command: '611_OBC_TC_GET_PS_TIME',
        telemetry: '',
        target: 'EMULATOR',
        parameters: []
    },
    {
        id: 41,
        command: '615_TC_FTM_START_CMD',
        telemetry: '615_TM_FTM_START_CMD',
        target: 'EMULATOR',
        parameters: ['Status']
    },
    {
        id: 42,
        command: '616_TC_FTM_STOP_CMD',
        telemetry: '616_TM_FTM_STOP_CMD',
        target: 'EMULATOR',
        parameters: []
    },
    {
        id: 43,
        command: '619_TC_GET_FILES_IN_DATABASE',
        telemetry: '619_TM_GET_FILES_IN_DATABASE',
        target: 'EMULATOR',
        parameters: ['Application_Id1',
            'File_Unique_id1',
            'Priority1',
            'State1',
            'Application_Id2',
            'File_Unique_id2',
            'Priority2',
            'State2',
            'Application_Id3',
            'File_Unique_id3',
            'Priority3',
            'State3']
    },
    {
        id: 44,
        command: '619_TM_SAMPLE_GET_FILES_IN_DATABASE',
        telemetry: '',
        target: 'EMULATOR',
        parameters: []
    },
    {
        id: 45,
        command: '620_TC_MANAGE_FILE_STATE',
        telemetry: '620_TM_MANAGE_FILE_STATE',
        target: 'EMULATOR',
        parameters: []
    },
    {
        id: 46,
        command: '638_OBC_TC_GET_MCU_RESET_INFO',
        telemetry: '',
        target: 'EMULATOR',
        parameters: []
    },
    {
        id: 52,
        command: 'TC_GET_HEALTH_METRICS',
        telemetry: '',
        target: 'EMULATOR',
        parameters: []
    },
    {
        id: 53,
        command: 'TC_OBC_PLD_VM_PWR_OFF',
        telemetry: 'TM_PLD_VM_PWR_OFF',
        target: 'EMULATOR',
        parameters: ['VALUE', 'BOOL']
    },
    {
        id: 54,
        command: 'ADCS_129_TC_GET_ADCS_STATE_INFO',
        telemetry: 'ADCS_129_TM_GET_ADCS_STATE_INFO',
        target: 'EMULATOR',
        parameters: ['ATTITUDE_ESTIMATION_MODE', 'CONTROL_MODE']
    },
    {
        id: 56,
        command: 'ADCS_129_TC_GET_ADCS_STATE_INFO',
        telemetry: 'ADCS_129_TM_GET_ADCS_STATE_INFO',
        target: 'EMULATOR',
        parameters: ['ATTITUDE_ESTIMATION_MODE', 'CONTROL_MODE']
    },
    {
        id: 57,
        command: 'ADCS_129_TC_GET_ADCS_STATE_INFO',
        telemetry: 'ADCS_129_TM_GET_ADCS_STATE_INFO',
        target: 'EMULATOR',
        parameters: ['ATTITUDE_ESTIMATION_MODE', 'CONTROL_MODE']
    },
]

export const commandTelemetryMap = [
    {
        id: 1,
        command: '1021_TC_EXOTRAIL_GET_SYS_INFO',
        telemetry: 'DRISHTI 1021_SCREEN',
        target: 'DRISHTI'
    },
    {
        id: 2,
        command: '1022_TC_EXOTRAIL_GET_HEAT_ACTIVITY',
        telemetry: 'DRISHTI 1022_SCREEN',
        target: 'DRISHTI'
    },
    {
        id: 3,
        command: '1023_TC_EXOTRAIL_GET_HK_FLUIDIC_INFO',
        telemetry: 'DRISHTI 1023_SCREEN',
        target: 'DRISHTI'
    },
    {
        id: 4,
        command: '1024_TC_EXOTRAIL_GET_HK_FLUIDIC_INFO',
        telemetry: 'DRISHTI 1024_SCREEN',
        target: 'DRISHTI'
    },
    {
        id: 5,
        command: '1025_TC_EXOTRAIL_GET_HK_THERMIC_INFO',
        telemetry: 'DRISHTI 1025_SCREEN',
        target: 'DRISHTI'
    },
    {
        id: 6,
        command: '1026_TC_EXOTRAIL_GET_HK_POWER_INFO',
        telemetry: 'DRISHTI 1026_SCREEN',
        target: 'DRISHTI'
    },
    {
        id: 7,
        command: '1027_TC_EXOTRAIL_GET_SAFE_LIMIT',
        telemetry: 'DRISHTI 1027_SCREEN',
        target: 'DRISHTI'
    },
    {
        id: 8,
        command: '1028_TC_EXOTRAIL_GET_FLUIDIC_VALVE_SEL',
        telemetry: 'DRISHTI 1028_SCREEN',
        target: 'DRISHTI'
    },
    {
        id: 9,
        command: '1029_TC_EXOTRAIL_GET_HEATER_CFG',
        telemetry: 'DRISHTI 1029_SCREEN',
        target: 'DRISHTI'
    },
    {
        id: 10,
        command: '1030_TC_EXOTRAIL_SET_FIRING_OPERATING_POINT',
        telemetry: 'DRISHTI 1030_SCREEN',
        target: 'DRISHTI'
    },
    {
        id: 11,
        command: '1031_TC_EXOTRAIL_TEST_SET_OBC_MODE',
        telemetry: 'DRISHTI 1031_SCREEN',
        target: 'DRISHTI'
    },
    {
        id: 12,
        command: '1033_TC_EXOTRAIL_SET_SAFE_LIMIT',
        telemetry: 'DRISHTI 1033_SCREEN',
        target: 'DRISHTI'
    },
    {
        id: 13,
        command: '1034_TC_EXOTRAIL_SET_FLUIDIC_VALVE_SEL',
        telemetry: 'DRISHTI 1034_SCREEN',
        target: 'DRISHTI'
    },
    {
        id: 14,
        command: '1036_TC_EXOTRAIL_SET_FIRING_DURATION',
        telemetry: 'DRISHTI 1036_SCREEN',
        target: 'DRISHTI'
    },
    {
        id: 15,
        command: '1038_TC_OBC_EXOTRIAL_THRUSTER_TM_DECODE_DATA',
        telemetry: 'DRISHTI 1038_SCREEN',
        target: 'DRISHTI'
    },
    {
        id: 16,
        command: '19_ADCS_TC_SET_CONTROL_MODE_TARGET_TRACKING',
        telemetry: 'DRISHTI ADCS_CONTROL',
        target: 'DRISHTI'
    },
    {
        id: 17,
        command: '200_EPS_TC_GET_SUB_SYS_INFO',
        telemetry: 'DRISHTI PANEL_STATS',
        target: 'DRISHTI'
    },
    {
        id: 18,
        command: '201_EPS_TC_GET_CONF',
        telemetry: 'DRISHTI PANEL_STATS',
        target: 'DRISHTI'
    },
    {
        id: 19,
        command: '211_EPS_TC_SET_EPS_CHANNEL_STATUS',
        telemetry: '',
        target: 'DRISHTI'
    },
    {
        id: 20,
        command: '212_EPS_TC_GET_DEV_HW_STATUS',
        telemetry: '',
        target: 'DRISHTI'
    },
    {
        id: 21,
        command: '500_OBC_TC_GET_OBC_CPU_USAGE',
        telemetry: '',
        target: 'DRISHTI'
    },
    {
        id: 22,
        command: '501_OBC_TC_GET_MEMORY_UTILISATION',
        telemetry: '',
        target: 'DRISHTI'
    },
    {
        id: 23,
        command: '545_OBC_TC_VM_POWER_ON',
        telemetry: '',
        target: 'DRISHTI'
    },
    {
        id: 24,
        command: '546_OBC_TC_VM_POWER_OFF',
        telemetry: '',
        target: 'DRISHTI'
    },
    {
        id: 25,
        command: '550_OBC_TC_SET_CUR_TIME',
        telemetry: 'DRISHTI SET_CURRENT_TIME',
        target: 'DRISHTI'
    },
    {
        id: 26,
        command: '581_OBC_TC_GET_CURRENT_TIME',
        telemetry: 'DRISHTI GET_CURRENT_TIME',
        target: 'DRISHTI'
    },
    {
        id: 27,
        command: '610_OBC_TC_GET_PS_TEMP',
        telemetry: '',
        target: 'DRISHTI'
    },
    {
        id: 28,
        command: '611_OBC_TC_GET_PS_TIME',
        telemetry: '',
        target: 'DRISHTI'
    },
    {
        id: 29,
        command: '638_OBC_TC_GET_MCU_RESET_INFO',
        telemetry: '',
        target: 'DRISHTI'
    },
    {
        id: 30,
        command: 'TC_547',
        telemetry: '',
        target: 'DRISHTI'
    },
    {
        id: 31,
        command: 'TC_549',
        telemetry: 'DRISHTI SCHEDULE_549',
        target: 'DRISHTI'
    },
    {
        id: 32,
        command: 'TC_CONOPS_LUT_RUN_CTRL',
        telemetry: 'DRISHTI SCHEDULE_548',
        target: 'DRISHTI'
    },
    {
        id: 33,
        command: 'TC_DEFFERED_STRG_OPT',
        telemetry: '',
        target: 'DRISHTI'
    },
    {
        id: 34,
        command: 'TC_GET_HEALTH_METRICS',
        telemetry: '',
        target: 'DRISHTI'
    },
    {
        id: 35,
        command: 'TC_OBC_PLD_VM_PWR_OFF',
        telemetry: 'DRISHTI STATUS',
        target: 'DRISHTI'
    },
];

export const scheduleFiles = [
    {
        id: 1,
        name: 'schedulefile1.json'
    },
    {
        id: 2,
        name: 'schedulefile2.json'
    }, {
        id: 3,
        name: 'schedulefile3.json'
    }, {
        id: 4,
        name: 'schedulefile4.json'
    },
];

export const scheduleFileDetails = [
    {
        id: 1,
        command: '212_EPS_TC_GET_DEV_HW_STATUS',
        sub_system: 'OBS',
        delay: '15',
        timestamp: '2024-06-25T22:00:00Z',
    },
    {
        id: 2,
        command: '638_OBC_TC_GET_MCU_RESET_INFO',
        sub_system: 'OBS',
        delay: '15',
        timestamp: '2024-06-25T22:00:00Z',
    },
    {
        id: 3,
        command: '581_OBC_TC_GET_CURRENT_TIME',
        sub_system: 'OBS',
        delay: '15',
        timestamp: '2024-06-25T22:00:00Z',
    },
    {
        id: 4,
        command: '500_OBC_TC_GET_OBC_CPU_USAGE',
        sub_system: 'EPS',
        delay: '15',
        timestamp: '2024-06-25T22:00:00Z',
    },
    {
        id: 5,
        command: '500_OBC_TC_GET_OBC_CPU_USAGE',
        sub_system: 'OBS',
        delay: '15',
        timestamp: '2024-06-25T22:00:00Z',
    },
];

export const subSystemList = [
    {
        value: 1,
        label: 'ALL',
        description: 'All Commands'
    },
    {
        value: 2,
        label: 'THRUSTER',
        description: 'Thruster'
    },
    {
        value: 3,
        label: 'OBC',
        description: 'On-Board Computer'
    },
    {
        value: 4,
        label: 'PS',
        description: 'Payload / Edge Server'
    },

    {
        value: 5,
        label: 'EPS',
        description: 'Electrical Power System'
    },
    {
        value: 6,
        label: 'COMMS',
        description: 'Communications Systems'
    },
    {
        value: 7,
        label: 'ADCS',
        description: 'Attitude Determination and Control System'
    },
    {
        value: 8,
        label: 'SCHEDULE',
        description: 'Schedule Files'
    }
];
export const targetList = [
    {
        value: 1,
        label: 'EMULATOR'
    },
];

export const logMessages = [
    {
        eventId: 1,
        message: 'Schedule file uploaded successfully'
    },
    {
        eventId: 2,
        message: 'Command executed Successfully'
    },
    {
        eventId: 3,
        message: 'Status is changed now!'
    },
    {
        eventId: 4,
        message: 'Schedule file uploaded successfully'
    },
    {
        eventId: 5,
        message: 'Schedule file uploaded successfully'
    }
];

export const scheduleFileCommands = ["TC_CONOPS_LUT_RUN_CTRL", "TC_549"];

export const commandStateMapping = [
    {
        command: 'THRUSTER_1030_TC_EXOTRAIL_SET_FIRING_OPERATING_POINT',
        telemetry: 'THRUSTER_1030_TM_EXOTRAIL_SET_FIRING_OPERATING_POINT',
        states: [
            {
                parameter: 'FIRING_OPERATING_POINT',
                states: {
                    0: 'Operating_point_1(100W)',
                    1: 'Operating_point_2(125W)',
                    2: 'Operating_point_3(150W)',
                }
            }
        ]

    },
    {
        command: 'THRUSTER_1031_TC_EXOTRAIL_TEST_SET_OBC_MODE',
        telemetry: 'THRUSTER_1031_TM_EXOTRAIL_TEST_SET_OBC_MODE',
        states: [
            {
                parameter: 'EXOTRIAL_OBC_MODE',
                states: {
                    0: 'EXOTRAIL_STANDBY_MODE',
                    1: 'EXOTRAIL_THERMAL_CON_MODE',
                    2: 'EXOTRAIL_THRUST_MODE',
                    3: 'EXOTRAIL_THERMAL_CON_THN_THRUST_MODE',
                    4: 'EXOTRAIL_EOL_PASSIVATION',
                    5: 'EXOTRAIL_COMMISIONING',
                }
            }
        ]
    },
    {
        command: 'THRUSTER_1034_TC_EXOTRAIL_SET_FLUIDIC_VALVE_SEL',
        telemetry: 'THRUSTER_1034_TM_EXOTRAIL_SET_FLUIDIC_VALVE_SEL',
        states: [
            {
                parameter: 'FLUIDIC_VALVE_SELECTION',
                states: {
                    0: 'EXOTRAIL_V3_CATHODE_V1_ANODE',
                    1: 'EXOTRAIL_V3_CATHODE_V2_ANODE',
                    2: 'EXOTRAIL_V4_CATHODE_V1_ANODE',
                    3: 'EXOTRAIL_V4_CATHODE_V2_ANODE'
                }
            }
        ]
    },
    {
        command: 'TC_CONOPS_LUT_RUN_CTRL',
        telemetry: 'TM_CONOPS_SCH_LUT_RUN_CTRL',
        states: [
            {
                parameter: 'LUT_NUM',
                states: {
                    0: 'LUT_1',
                    1: 'LUT_2',
                }
            },
            {
                parameter: 'ACTION',
                states: {
                    1: 'Save_schedule_sequence_to_persistent_memory',
                    2: 'Start_Resume_execution_of_schedule_sequence',
                    3: 'Pause_schedule_sequence_execution',
                    4: 'Stop_schedule_execution_and_erase_LUT',
                    5: 'Erase_schedule_events'
                }
            }
        ]
    },
    {
        command: 'TC_549',
        telemetry: '549_TM',
        states: [
            {
                parameter: 'STATUS',
                states: {
                    1: 'Both_LUT_execution_status',
                    2: 'Execution_status_LUT_1',
                    3: 'Execution_status_LUT_2',
                }
            }
        ]
    },
]
export const BeaconDataValues = [
    {
        id: 1,
        parameter: 'Satellite Mode',
        value: 'Nominal'
    },
    {
        id: 2,
        parameter: 'Battery Voltage',
        value: '7.8 V'
    },
    {
        id: 3,
        parameter: 'Battery Current',
        value: '1.2 A'
    },
    {
        id: 4,
        parameter: 'Battery Temperature',
        value: '32 °C'
    },
    {
        id: 5,
        parameter: 'Solar Panel Voltage',
        value: '18.4 V'
    },
    {
        id: 6,
        parameter: 'Solar Panel Current',
        value: '2.1 A'
    },
    {
        id: 7,
        parameter: 'OBC Status',
        value: 'Active'
    },
    {
        id: 8,
        parameter: 'ADCS Mode',
        value: 'Sun Pointing'
    },
    {
        id: 9,
        parameter: 'Gyro Status',
        value: 'OK'
    },
    {
        id: 10,
        parameter: 'Magnetometer Status',
        value: 'OK'
    },
    {
        id: 11,
        parameter: 'UHF Communication',
        value: 'Healthy'
    },
    {
        id: 12,
        parameter: 'S-Band Communication',
        value: 'Standby'
    },
    {
        id: 13,
        parameter: 'Last Contact',
        value: '2025-12-24 10:42 UTC'
    },
    {
        id: 14,
        parameter: 'Uptime',
        value: '124 Days'
    }
];

// Chile, Iceland, Sri Lanka, New Zealand, UK, South Africa
export const GROUND_STATIONS = [
    // Chile (CL) - Punta Arenas region
    { id: "CL01-01", longitude: -70.8471, latitude: -53.0412, country: "CL" },
    { id: "CL01-02", longitude: -70.8471, latitude: -53.0412, country: "CL" },
    { id: "CL01-03", longitude: -70.8471, latitude: -53.0412, country: "CL" },
    { id: "CL02-03", longitude: -70.7727, latitude: -33.3646, country: "CL" },

    // Iceland (IS)
    { id: "IS01-01", longitude: -20.2461, latitude: 65.6474, country: "IS" },
    { id: "IS01-02", longitude: -20.2449, latitude: 65.6475, country: "IS" },
    { id: "IS01-03", longitude: -20.2382, latitude: 65.6483, country: "IS" },

    // Sri Lanka (LK)
    { id: "LK01-01", longitude: 80.7249, latitude: 7.2742, country: "LK" },

    // New Zealand (NZ) - Invercargill region
    { id: "NZ01-01", longitude: 168.3792, latitude: -46.5281, country: "NZ" },
    { id: "NZ01-02", longitude: 168.3847, latitude: -46.5328, country: "NZ" },
    { id: "NZ01-03", longitude: 168.3847, latitude: -46.5328, country: "NZ" },
    { id: "NZ01-04", longitude: 168.3847, latitude: -46.5328, country: "NZ" },

    // United Kingdom (UK) - Shetland Islands
    { id: "UK01-01", longitude: -0.8584, latitude: 60.7483, country: "UK" },
    { id: "UK01-02", longitude: -0.8580, latitude: 60.7480, country: "UK" },

    // South Africa (ZA) - Pretoria region
    { id: "ZA01-01", longitude: 28.4538, latitude: -25.8603, country: "ZA" },
    { id: "ZA01-02", longitude: 28.4538, latitude: -25.8603, country: "ZA" },
];

// Country colors for visual distinction
export const COUNTRY_COLORS = {
    CL: "#FF6B6B", // Chile - Red
    IS: "#FF6B6B", // Iceland - Teal
    LK: "#FF6B6B", // Sri Lanka - Yellow
    NZ: "#FF6B6B", // New Zealand - Mint
    UK: "#FF6B6B", // UK - Plum
    ZA: "#FF6B6B", // South Africa - Coral
};

