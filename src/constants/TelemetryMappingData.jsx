export const telemetryStateMapping = [
    {
        command: "THRUSTER_1038_TC_OBC_EXOTRIAL_THRUSTER_TM_DECODE_DATA",
        telemetry: "THRUSTER_1038_TM_OBC_EXOTRIAL_THRUSTER_TM_DECODE_DATA",
        states: [
            {
                parameter: "THRUSTER_OBC_MODE",
                states: {
                    0: "EXOTRAIL_STANDBY_MODE",
                    1: "EXOTRAIL_THERMAL_CON_MODE",
                    2: "EXOTRAIL_THRUST_MODE",
                    3: "EXOTRAIL_THERMAL_CON_THN_THRUST_MODE",
                    4: "EXOTRAIL_EOL_PASSIVATION",
                    5: "EXOTRAIL_COMMISIONING"
                },
            },
        ],
    },
    {
        command: "THRUSTER_1021_TC_EXOTRAIL_GET_SYS_INFO",
        telemetry: "THRUSTER_1021_TM_EXOTRAIL_GET_SYS_INFO",
        states: [
            {
                parameter: "EXOTRIAL_OBC_MODE",
                states: {
                    25: "EXOTRAIL_ID_SAFE_TEMP1_TANK3",
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
        command: "TC_CONOPS_LUT_RUN_CTRL",
        telemetry: "TM_CONOPS_SCH_LUT_RUN_CTRL",
        states: [
            {
                parameter: "STATUS",
                states: {
                    0: "Success",
                    1: "Failure",
                    3: "Ask_Sai"
                },
            },
        ],
    },
    {
        command: "TC_549",
        telemetry: "549_TM",
        states: [
            {
                parameter: "UL_STATUS_1",
                states: {
                    0: "No_Schedule",
                    1: "Completed_executing_all_events",
                    2: "Execution_stopped",
                    3: "Execution_paused",
                    4: "Execution_in_progress",
                    5: "Ready_to_start",
                    6: "Being_uploaded"
                },
            },
            {
                parameter: "ID_OF_SEGMENTS_EXPECTED_7",
                states: { 0: "Not_Received", 1: "Received" },
            },
            {
                parameter: "ID_OF_SEGMENTS_EXPECTED_6",
                states: { 0: "Not_Received", 1: "Received" },
            },
            {
                parameter: "ID_OF_SEGMENTS_EXPECTED_5",
                states: { 0: "Not_Received", 1: "Received" },
            },
            {
                parameter: "ID_OF_SEGMENTS_EXPECTED_4",
                states: { 0: "Not_Received", 1: "Received" },
            },
            {
                parameter: "ID_OF_SEGMENTS_EXPECTED_3",
                states: { 0: "Not_Received", 1: "Received" },
            },
            {
                parameter: "ID_OF_SEGMENTS_EXPECTED_2",
                states: { 0: "Not_Received", 1: "Received" },
            },
            {
                parameter: "ID_OF_SEGMENTS_EXPECTED_1",
                states: { 0: "Not_Received", 1: "Received" },
            },
            {
                parameter: "ID_OF_SEGMENTS_EXPECTED_0",
                states: { 0: "Not_Received", 1: "Received" },
            },
            {
                parameter: "ID_OF_SEGMENTS_RECEIVED_7",
                states: { 0: "Not_Received", 1: "Received" },
            },
            {
                parameter: "ID_OF_SEGMENTS_RECEIVED_6",
                states: { 0: "Not_Received", 1: "Received" },
            },
            {
                parameter: "ID_OF_SEGMENTS_RECEIVED_5",
                states: { 0: "Not_Received", 1: "Received" },
            },
            {
                parameter: "ID_OF_SEGMENTS_RECEIVED_4",
                states: { 0: "Not_Received", 1: "Received" },
            },
            {
                parameter: "ID_OF_SEGMENTS_RECEIVED_3",
                states: { 0: "Not_Received", 1: "Received" },
            },
            {
                parameter: "ID_OF_SEGMENTS_RECEIVED_2",
                states: { 0: "Not_Received", 1: "Received" },
            },
            {
                parameter: "ID_OF_SEGMENTS_RECEIVED_1",
                states: { 0: "Not_Received", 1: "Received" },
            },
            {
                parameter: "ID_OF_SEGMENTS_RECEIVED_0",
                states: { 0: "Not_Received", 1: "Received" },
            },
            {
                parameter: "ID_OF_SEGMENTS_EXECUTED_7",
                states: { 0: "Not_Received", 1: "Received" },
            },
            {
                parameter: "ID_OF_SEGMENTS_EXECUTED_6",
                states: { 0: "Not_Received", 1: "Received" },
            },
            {
                parameter: "ID_OF_SEGMENTS_EXECUTED_5",
                states: { 0: "Not_Received", 1: "Received" },
            },
            {
                parameter: "ID_OF_SEGMENTS_EXECUTED_4",
                states: { 0: "Not_Received", 1: "Received" },
            },
            {
                parameter: "ID_OF_SEGMENTS_EXECUTED_3",
                states: { 0: "Not_Received", 1: "Received" },
            },
            {
                parameter: "ID_OF_SEGMENTS_EXECUTED_2",
                states: { 0: "Not_Received", 1: "Received" },
            },
            {
                parameter: "ID_OF_SEGMENTS_EXECUTED_1",
                states: { 0: "Not_Received", 1: "Received" },
            },
            {
                parameter: "ID_OF_SEGMENTS_EXECUTED_0",
                states: { 0: "Not_Received", 1: "Received" },
            },
        ],
    },
    {
        command: "OBC_581_TC_GET_CUR_TIME",
        telemetry: "OBC_581_TM_GET_CUR_TIME",
        states: [
            {
                parameter: "Status",
                states: {
                    0: "SUCCESS",
                    255: "FAILURE"
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
                    2: "EDGE_COMPUTER_NODE"
                },
            },
        ],
    },

    {
        command: "OBC_550_TC_SET_CUR_TIME",
        telemetry: "OBC_550_TM_SET_CUR_TIME",
        states: [
            {
                parameter: "Status",
                states: {
                    0: "SUCCESS",
                    255: "FAILURE"
                },
            },
        ],
    },
    {
        command: "OBC_545_TC_PLD_VM_PWR_ON",
        telemetry: "OBC_545_TM_PLD_VM_PWR_ON",
        states: [
            {
                parameter: "STATUS",
                states: {
                    0: "SUCCESS",
                    1: "FAILURE"
                },
            },
        ],
    },
    {
        command: "OBC_546_TC_PLD_VM_PWR_OFF",
        telemetry: "OBC_546_TM_PLD_VM_PWR_OFF",
        states: [
            {
                parameter: "STATUS",
                states: {
                    0: "SUCCESS",
                    1: "FAILURE"
                },
            },
        ],
    },
    {
        command: "OBC_508_TC_CONFIG_AUTO_LEOP_TRIGGER_TMR",
        telemetry: "OBC_508_TM_CONFIG_AUTO_LEOP_TRIGGER_TMR",
        states: [
            {
                parameter: "Response_Status",
                states: {
                    0: "TIMER_CONFIGURATION_SUCCESS",
                    1: "TIMER_CONFIGURATION_FAILED"
                },
            },
        ],
    },
    {
        command: "OBC_602_TC_TRIGGER_HINGE_PROCESS",
        telemetry: "OBC_602_TM_TRIGGER_HINGE_PROCESS",
        states: [
            {
                parameter: "Response",
                states: {
                    0: "Hinge_Trigger_Failed",
                    1: "Hinge_Trigger_Success",
                    9: "Hinge_Release_Failed"
                },
            },
        ],
    },
    {
        command: "OBC_505_TC_GET_AUTO_LEOPS_STATE",
        telemetry: "OBC_505_TM_GET_AUTO_LEOPS_STATE",
        states: [
            {
                parameter: "Satellite_Body_Axis",
                states: {
                    0: "Satellite_body_axis_not_updated",
                    1: "Satellite_body_position_positive_X_axis",
                    2: "Satellite_body_position_positive_Y_axis",
                    3: "Satellite_body_position_positive_Z_axis",
                    4: "Satellite_body_position_negative_X_axis",
                    5: "Satellite_body_position_negative_Y_axis",
                    6: "Satellite_body_position_negative_Z_axis"
                },
            },
        ],
    },
    {
        command: "OBC_638_TC_GET_MCU_RST_INFO",
        telemetry: "OBC_638_TM_GET_MCU_RST_INFO",
        states: [
            {
                parameter: "RESET_REASON_1",
                states: {
                    0: "UNKNOWN_RESET",
                    1: "LOW_POWER_RESET",
                    2: "WINDOW_WATCHDOG_RESET",
                    3: "INDEPENDENT_WATCHDOG_RESET",
                    4: "SOFTWARE_RESET",
                    5: "POWER_ON_POWER_DOWN_RESET",
                    6: "EXTERNAL_RESET_PIN_RESET",
                    7: "BROWNOUT_RESET",
                    8: "WARM_RESET"
                },
            },
            {
                parameter: "RESET_REASON_2",
                states: {
                    0: "UNKNOWN_RESET",
                    1: "LOW_POWER_RESET",
                    2: "WINDOW_WATCHDOG_RESET",
                    3: "INDEPENDENT_WATCHDOG_RESET",
                    4: "SOFTWARE_RESET",
                    5: "POWER_ON_POWER_DOWN_RESET",
                    6: "EXTERNAL_RESET_PIN_RESET",
                    7: "BROWNOUT_RESET",
                    8: "WARM_RESET"
                },
            },
            {
                parameter: "RESET_REASON_3",
                states: {
                    0: "UNKNOWN_RESET",
                    1: "LOW_POWER_RESET",
                    2: "WINDOW_WATCHDOG_RESET",
                    3: "INDEPENDENT_WATCHDOG_RESET",
                    4: "SOFTWARE_RESET",
                    5: "POWER_ON_POWER_DOWN_RESET",
                    6: "EXTERNAL_RESET_PIN_RESET",
                    7: "BROWNOUT_RESET",
                    8: "WARM_RESET"
                },
            },
            {
                parameter: "RESET_REASON_4",
                states: {
                    0: "UNKNOWN_RESET",
                    1: "LOW_POWER_RESET",
                    2: "WINDOW_WATCHDOG_RESET",
                    3: "INDEPENDENT_WATCHDOG_RESET",
                    4: "SOFTWARE_RESET",
                    5: "POWER_ON_POWER_DOWN_RESET",
                    6: "EXTERNAL_RESET_PIN_RESET",
                    7: "BROWNOUT_RESET",
                    8: "WARM_RESET"
                },
            },
            {
                parameter: "RESET_REASON_5",
                states: {
                    0: "UNKNOWN_RESET",
                    1: "LOW_POWER_RESET",
                    2: "WINDOW_WATCHDOG_RESET",
                    3: "INDEPENDENT_WATCHDOG_RESET",
                    4: "SOFTWARE_RESET",
                    5: "POWER_ON_POWER_DOWN_RESET",
                    6: "EXTERNAL_RESET_PIN_RESET",
                    7: "BROWNOUT_RESET",
                    8: "WARM_RESET"
                },
            },
            {
                parameter: "RESET_REASON_6",
                states: {
                    0: "UNKNOWN_RESET",
                    1: "LOW_POWER_RESET",
                    2: "WINDOW_WATCHDOG_RESET",
                    3: "INDEPENDENT_WATCHDOG_RESET",
                    4: "SOFTWARE_RESET",
                    5: "POWER_ON_POWER_DOWN_RESET",
                    6: "EXTERNAL_RESET_PIN_RESET",
                    7: "BROWNOUT_RESET",
                    8: "WARM_RESET"
                },
            },
            {
                parameter: "RESET_REASON_7",
                states: {
                    0: "UNKNOWN_RESET",
                    1: "LOW_POWER_RESET",
                    2: "WINDOW_WATCHDOG_RESET",
                    3: "INDEPENDENT_WATCHDOG_RESET",
                    4: "SOFTWARE_RESET",
                    5: "POWER_ON_POWER_DOWN_RESET",
                    6: "EXTERNAL_RESET_PIN_RESET",
                    7: "BROWNOUT_RESET",
                    8: "WARM_RESET"
                },
            },
            {
                parameter: "RESET_REASON_8",
                states: {
                    0: "UNKNOWN_RESET",
                    1: "LOW_POWER_RESET",
                    2: "WINDOW_WATCHDOG_RESET",
                    3: "INDEPENDENT_WATCHDOG_RESET",
                    4: "SOFTWARE_RESET",
                    5: "POWER_ON_POWER_DOWN_RESET",
                    6: "EXTERNAL_RESET_PIN_RESET",
                    7: "BROWNOUT_RESET",
                    8: "WARM_RESET"
                },
            },
            {
                parameter: "RESET_REASON_9",
                states: {
                    0: "UNKNOWN_RESET",
                    1: "LOW_POWER_RESET",
                    2: "WINDOW_WATCHDOG_RESET",
                    3: "INDEPENDENT_WATCHDOG_RESET",
                    4: "SOFTWARE_RESET",
                    5: "POWER_ON_POWER_DOWN_RESET",
                    6: "EXTERNAL_RESET_PIN_RESET",
                    7: "BROWNOUT_RESET",
                    8: "WARM_RESET"
                },
            },
            {
                parameter: "RESET_REASON_10",
                states: {
                    0: "UNKNOWN_RESET",
                    1: "LOW_POWER_RESET",
                    2: "WINDOW_WATCHDOG_RESET",
                    3: "INDEPENDENT_WATCHDOG_RESET",
                    4: "SOFTWARE_RESET",
                    5: "POWER_ON_POWER_DOWN_RESET",
                    6: "EXTERNAL_RESET_PIN_RESET",
                    7: "BROWNOUT_RESET",
                    8: "WARM_RESET"
                },
            },
            {
                parameter: "RESET_REASON_11",
                states: {
                    0: "UNKNOWN_RESET",
                    1: "LOW_POWER_RESET",
                    2: "WINDOW_WATCHDOG_RESET",
                    3: "INDEPENDENT_WATCHDOG_RESET",
                    4: "SOFTWARE_RESET",
                    5: "POWER_ON_POWER_DOWN_RESET",
                    6: "EXTERNAL_RESET_PIN_RESET",
                    7: "BROWNOUT_RESET",
                    8: "WARM_RESET"
                },
            },
            {
                parameter: "RESET_REASON_12",
                states: {
                    0: "UNKNOWN_RESET",
                    1: "LOW_POWER_RESET",
                    2: "WINDOW_WATCHDOG_RESET",
                    3: "INDEPENDENT_WATCHDOG_RESET",
                    4: "SOFTWARE_RESET",
                    5: "POWER_ON_POWER_DOWN_RESET",
                    6: "EXTERNAL_RESET_PIN_RESET",
                    7: "BROWNOUT_RESET",
                    8: "WARM_RESET"
                },
            },
            {
                parameter: "RESET_REASON_13",
                states: {
                    0: "UNKNOWN_RESET",
                    1: "LOW_POWER_RESET",
                    2: "WINDOW_WATCHDOG_RESET",
                    3: "INDEPENDENT_WATCHDOG_RESET",
                    4: "SOFTWARE_RESET",
                    5: "POWER_ON_POWER_DOWN_RESET",
                    6: "EXTERNAL_RESET_PIN_RESET",
                    7: "BROWNOUT_RESET",
                    8: "WARM_RESET"
                },
            },
            {
                parameter: "RESET_REASON_14",
                states: {
                    0: "UNKNOWN_RESET",
                    1: "LOW_POWER_RESET",
                    2: "WINDOW_WATCHDOG_RESET",
                    3: "INDEPENDENT_WATCHDOG_RESET",
                    4: "SOFTWARE_RESET",
                    5: "POWER_ON_POWER_DOWN_RESET",
                    6: "EXTERNAL_RESET_PIN_RESET",
                    7: "BROWNOUT_RESET",
                    8: "WARM_RESET"
                },
            },
            {
                parameter: "RESET_REASON_15",
                states: {
                    0: "UNKNOWN_RESET",
                    1: "LOW_POWER_RESET",
                    2: "WINDOW_WATCHDOG_RESET",
                    3: "INDEPENDENT_WATCHDOG_RESET",
                    4: "SOFTWARE_RESET",
                    5: "POWER_ON_POWER_DOWN_RESET",
                    6: "EXTERNAL_RESET_PIN_RESET",
                    7: "BROWNOUT_RESET",
                    8: "WARM_RESET"
                },
            },
            {
                parameter: "RESET_REASON_16",
                states: {
                    0: "UNKNOWN_RESET",
                    1: "LOW_POWER_RESET",
                    2: "WINDOW_WATCHDOG_RESET",
                    3: "INDEPENDENT_WATCHDOG_RESET",
                    4: "SOFTWARE_RESET",
                    5: "POWER_ON_POWER_DOWN_RESET",
                    6: "EXTERNAL_RESET_PIN_RESET",
                    7: "BROWNOUT_RESET",
                    8: "WARM_RESET"
                },
            },
            {
                parameter: "RESET_REASON_17",
                states: {
                    0: "UNKNOWN_RESET",
                    1: "LOW_POWER_RESET",
                    2: "WINDOW_WATCHDOG_RESET",
                    3: "INDEPENDENT_WATCHDOG_RESET",
                    4: "SOFTWARE_RESET",
                    5: "POWER_ON_POWER_DOWN_RESET",
                    6: "EXTERNAL_RESET_PIN_RESET",
                    7: "BROWNOUT_RESET",
                    8: "WARM_RESET"
                },
            },
            {
                parameter: "RESET_REASON_18",
                states: {
                    0: "UNKNOWN_RESET",
                    1: "LOW_POWER_RESET",
                    2: "WINDOW_WATCHDOG_RESET",
                    3: "INDEPENDENT_WATCHDOG_RESET",
                    4: "SOFTWARE_RESET",
                    5: "POWER_ON_POWER_DOWN_RESET",
                    6: "EXTERNAL_RESET_PIN_RESET",
                    7: "BROWNOUT_RESET",
                    8: "WARM_RESET"
                },
            },
            {
                parameter: "RESET_REASON_19",
                states: {
                    0: "UNKNOWN_RESET",
                    1: "LOW_POWER_RESET",
                    2: "WINDOW_WATCHDOG_RESET",
                    3: "INDEPENDENT_WATCHDOG_RESET",
                    4: "SOFTWARE_RESET",
                    5: "POWER_ON_POWER_DOWN_RESET",
                    6: "EXTERNAL_RESET_PIN_RESET",
                    7: "BROWNOUT_RESET",
                    8: "WARM_RESET"
                },
            },
            {
                parameter: "RESET_REASON_20",
                states: {
                    0: "UNKNOWN_RESET",
                    1: "LOW_POWER_RESET",
                    2: "WINDOW_WATCHDOG_RESET",
                    3: "INDEPENDENT_WATCHDOG_RESET",
                    4: "SOFTWARE_RESET",
                    5: "POWER_ON_POWER_DOWN_RESET",
                    6: "EXTERNAL_RESET_PIN_RESET",
                    7: "BROWNOUT_RESET",
                    8: "WARM_RESET"
                },
            },
        ],
    },
    {
        command: "OBC_598_TC_CONFIG_OBC_SELF_RST_TMR",
        telemetry: "OBC_598_TM_CONFIG_OBC_SELF_RST_TMR",
        states: [
            {
                parameter: "Response",
                states: {
                    0: "SUCCESS",
                    1: "FAILURE"
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
                    1: "ES"
                },
            },
            {
                parameter: "RESPONSE_STATUS",
                states: {
                    0: "SUCCESS",
                    255: "FAILURE"
                },
            },
        ],
    },
    {
        command: "OBC_605_TC_GET_PS_ES_ACTIVE_INTF",
        telemetry: "OBC_605_TM_GET_PS_ES_ACTIVE_INTF",
        states: [
            {
                parameter: "MODULE_ID",
                states: {
                    0: "PS",
                    1: "ES"
                },
            },
            {
                parameter: "ACTIVE_INTERFACE",
                states: {
                    0: "PS_ETHERNET / ES_ETHERNET",
                    0: "ES_ETHERNET",
                    1: "PS_USB",
                    1: "ES_VIA_PS_ETH_USB"
                },
            },
        ],
    },
    {
        command: "OBC_604_TC_GET_HINGE_STATUS",
        telemetry: "OBC_604_TM_GET_HINGE_STATUS",
        states: [
            {
                parameter: "STATUS",
                states: {
                    0: "DETUMBLING_IN_PROGRESS",
                    1: "DETUMBLING_COMPLETED",
                    2: "SUN_POINTING_IN_PROGRESS",
                    3: "SUN_POINTING_COMPLETED",
                    4: "SUN_POINTING_FAILED",
                    5: "POWER_MONITORING_PROGRESS",
                    6: "HDRM_RELEASE_PROGRESS",
                    7: "LEOPS_SUCCESS",
                    8: "LEOPS_ABORT",
                    9: "HDRM_RELEASE_FAIL",
                    11: "HDRM_RELEASE_FAILED",
                    12: "HINGE_RESPONSE_NOT_RECEIVED_IN_TIME_LIMIT"
                },
            },
            {
                parameter: "HINGE_QUERY_STATUS",
                states: {
                    0: "FAILURE",
                    1: "SUCCESS"
                },
            },
            {
                parameter: "HINGE_STATUS_1",
                states: { 0: "FAILURE", 1: "SUCCESS" },
            },
            {
                parameter: "HINGE_STATUS_2",
                states: { 0: "FAILURE", 1: "SUCCESS" },
            },
            {
                parameter: "HINGE_STATUS_3",
                states: { 0: "FAILURE", 1: "SUCCESS" },
            },
            {
                parameter: "HINGE_STATUS_4",
                states: { 0: "FAILURE", 1: "SUCCESS" },
            },
            {
                parameter: "HINGE_STATUS_5",
                states: { 0: "FAILURE", 1: "SUCCESS" },
            },
            {
                parameter: "HINGE_STATUS_6",
                states: { 0: "FAILURE", 1: "SUCCESS" },
            },
            {
                parameter: "HINGE_STATUS_7",
                states: { 0: "FAILURE", 1: "SUCCESS" },
            },
            {
                parameter: "HINGE_STATUS_8",
                states: { 0: "FAILURE", 1: "SUCCESS" },
            },
        ],
    },
    {
        command: "OBC_640_TC_CONFIG_HINGE_RLS_TIMEOUT_TMR",
        telemetry: "OBC_640_TM_CONFIG_HINGE_RLS_TIMEOUT_TMR",
        states: [
            {
                parameter: "STATUS",
                states: {
                    0: "SUCCESS",
                    1: "FAILURE"
                },
            },
        ],
    },
    {
        command: "OBC_650_TC_SET_XBAND_ROUT_PATH",
        telemetry: "OBC_650_TM_SET_XBAND_ROUT_PATH",
        states: [
            {
                parameter: "STATUS",
                states: {
                    0: "SUCCESS",
                    1: "FAILURE"
                },
            },
        ],
    },
    {
        command: "EPS_211_TC_SET_DEVICE_STS",
        telemetry: "211_EPS_TM_SET_DEVICE_STS",
        states: [
            {
                parameter: "POWER_STATE",
                states: {
                    0: "OFF",
                    1: "ON",
                    2: "RESTART",
                },
            },
        ],
    },
    {
        command: "EPS_200_TC_GET_SUB_SYS_INFO",
        telemetry: "200_EPS_TM_GET_SUB_SYS_INFO",
        states: [
            {
                parameter: "FIRMWARE_VERSION",
                states: {
                    0: "SUCCESS",
                    1: "RESPONSE_TIMEOUT_FAILURE",
                    2: "INVALID_PARAMETER_PASSED_TO_EPS_COMMAND",
                    3: "HARDWARE_FAULT_DETECTED_IN_EPS_SYSTEM",
                    4: "EPS_CONTROLLER_ERROR",
                    5: "BATTERY_RELATED_ISSUE",
                    6: "EPS_CONTROL_OPERATION_CURRENTLY_IN_PROGRESS",
                    7: "EPS_MCU_FIRMWARE_MISMATCH_ERROR",
                    8: "POWER_SUPPLY_CHANNEL_OVVERCURRENT_ERROR",
                    9: "INVALID_POWER_SUPPLY_CHANNEL_NUMBER"
                },
            },
            { parameter: "SAS_B", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "BURN_WIRE_2", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "AVIONICS", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "RESERVED_SS_1", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "RESERVED_SS_2", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "RESERVED_SS_3", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "RESERVED_SS_4", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "RESERVED_SS_5", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "SECONDARY_EDGE_SERVER", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "PRIMARY_THRUSTER", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "RESERVED_SS_6", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "MSI", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "SES_A", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "SES_B", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "SAS_A", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "BURN_WIRE_1", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "RESERVED", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "PRIMARY_UHF", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "RESERVED_SS_7", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "PRIMARY_S_BAND", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "RESERVED_SS_8", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "PRIMARY_X_BAND", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "SECONDARY_X_BAND", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "PRIMARY_EDGE_SERVER", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "HOLD_AND_RELEASE_MODULE", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "PRIMARY_OBC", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "SECONDARY_OBC", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "PRIMARY_PAYLOAD_SERVER", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "SECONDARY_PAYLOAD_SERVER", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "PRIMARY_GPS", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "SECONDARY_GPS", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "PRIMARY_ADCS", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            {
                parameter: "HRM",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART_IN_PROGRESS", 3: "BOOTING_IN_PROGRESS",
                    4: "SHUTTING_DOWN_IN_PROGRESS", 5: "IDLE_STATE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE",
                    7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "OBC",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART_IN_PROGRESS", 3: "BOOTING_IN_PROGRESS",
                    4: "SHUTTING_DOWN_IN_PROGRESS", 5: "IDLE_STATE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE",
                    7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "OBC_2",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART_IN_PROGRESS", 3: "BOOTING_IN_PROGRESS",
                    4: "SHUTTING_DOWN_IN_PROGRESS", 5: "IDLE_STATE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE",
                    7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "PL_SERVER",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART_IN_PROGRESS", 3: "BOOTING_IN_PROGRESS",
                    4: "SHUTTING_DOWN_IN_PROGRESS", 5: "IDLE_STATE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE",
                    7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "PL_SERVER_2",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART_IN_PROGRESS", 3: "BOOTING_IN_PROGRESS",
                    4: "SHUTTING_DOWN_IN_PROGRESS", 5: "IDLE_STATE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE",
                    7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "GPS",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART_IN_PROGRESS", 3: "BOOTING_IN_PROGRESS",
                    4: "SHUTTING_DOWN_IN_PROGRESS", 5: "IDLE_STATE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE",
                    7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "GPS_2",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART_IN_PROGRESS", 3: "BOOTING_IN_PROGRESS",
                    4: "SHUTTING_DOWN_IN_PROGRESS", 5: "IDLE_STATE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE",
                    7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "ADCS",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART_IN_PROGRESS", 3: "BOOTING_IN_PROGRESS",
                    4: "SHUTTING_DOWN_IN_PROGRESS", 5: "IDLE_STATE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE",
                    7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "UHF",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART_IN_PROGRESS", 3: "BOOTING_IN_PROGRESS",
                    4: "SHUTTING_DOWN_IN_PROGRESS", 5: "IDLE_STATE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE",
                    7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "S_BAND",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART_IN_PROGRESS", 3: "BOOTING_IN_PROGRESS",
                    4: "SHUTTING_DOWN_IN_PROGRESS", 5: "IDLE_STATE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE",
                    7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "X_BAND",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART_IN_PROGRESS", 3: "BOOTING_IN_PROGRESS",
                    4: "SHUTTING_DOWN_IN_PROGRESS", 5: "IDLE_STATE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE",
                    7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "X_BAND_2",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART_IN_PROGRESS", 3: "BOOTING_IN_PROGRESS",
                    4: "SHUTTING_DOWN_IN_PROGRESS", 5: "IDLE_STATE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE",
                    7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "EDGE",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART_IN_PROGRESS", 3: "BOOTING_IN_PROGRESS",
                    4: "SHUTTING_DOWN_IN_PROGRESS", 5: "IDLE_STATE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE",
                    7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "EDGE_2",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART_IN_PROGRESS", 3: "BOOTING_IN_PROGRESS",
                    4: "SHUTTING_DOWN_IN_PROGRESS", 5: "IDLE_STATE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE",
                    7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "THRUSTER",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART_IN_PROGRESS", 3: "BOOTING_IN_PROGRESS",
                    4: "SHUTTING_DOWN_IN_PROGRESS", 5: "IDLE_STATE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE",
                    7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "MSI_SS",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART_IN_PROGRESS", 3: "BOOTING_IN_PROGRESS",
                    4: "SHUTTING_DOWN_IN_PROGRESS", 5: "IDLE_STATE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE",
                    7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "SES_A_SS",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART_IN_PROGRESS", 3: "BOOTING_IN_PROGRESS",
                    4: "SHUTTING_DOWN_IN_PROGRESS", 5: "IDLE_STATE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE",
                    7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "SES_B_SS",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART_IN_PROGRESS", 3: "BOOTING_IN_PROGRESS",
                    4: "SHUTTING_DOWN_IN_PROGRESS", 5: "IDLE_STATE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE",
                    7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "SAS_A_SS",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART_IN_PROGRESS", 3: "BOOTING_IN_PROGRESS",
                    4: "SHUTTING_DOWN_IN_PROGRESS", 5: "IDLE_STATE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE",
                    7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "UHF_BURN_WIRE",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART_IN_PROGRESS", 3: "BOOTING_IN_PROGRESS",
                    4: "SHUTTING_DOWN_IN_PROGRESS", 5: "IDLE_STATE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE",
                    7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "SAS_B_SS",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART_IN_PROGRESS", 3: "BOOTING_IN_PROGRESS",
                    4: "SHUTTING_DOWN_IN_PROGRESS", 5: "IDLE_STATE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE",
                    7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "AVIONICS_SS",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART_IN_PROGRESS", 3: "BOOTING_IN_PROGRESS",
                    4: "SHUTTING_DOWN_IN_PROGRESS", 5: "IDLE_STATE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE",
                    7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            { parameter: "OBC_PRI", states: { 0: "OFF", 1: "ON" } },
            { parameter: "OBC_2", states: { 0: "OFF", 1: "ON" } },
            { parameter: "PL_8_PRI_PORT", states: { 0: "OFF", 1: "ON" } },
            { parameter: "ADCS_PRI_PORT", states: { 0: "OFF", 1: "ON" } },
            { parameter: "THRUSTER_PRI_PORT", states: { 0: "OFF", 1: "ON" } },
            { parameter: "THRUSTER_PRI_PORT_2", states: { 0: "OFF", 1: "ON" } },
            { parameter: "THRUSTER_HTR_PORT", states: { 0: "OFF", 1: "ON" } },
            { parameter: "UHF_PRI_PORT", states: { 0: "OFF", 1: "ON" } },
            { parameter: "S_BAND_PRI_PORT", states: { 0: "OFF", 1: "ON" } },
            { parameter: "X_BAND_2_PRI_PORT", states: { 0: "OFF", 1: "ON" } },
            { parameter: "X_BAND_PRI_PORT", states: { 0: "OFF", 1: "ON" } },
            { parameter: "PL_1_PRI_PORT_11", states: { 0: "OFF", 1: "ON" } },
            { parameter: "PL_2_PRI_PORT_AND_PL_3_HTR_PORT", states: { 0: "OFF", 1: "ON" } },
            { parameter: "PL_2_PRI_PORT_13", states: { 0: "OFF", 1: "ON" } },
            { parameter: "PL_3_PRI_PORT_14", states: { 0: "OFF", 1: "ON" } },
            { parameter: "HRM_PRI_PORT_15", states: { 0: "OFF", 1: "ON" } },
            { parameter: "HRM_PRI_PORT_16", states: { 0: "OFF", 1: "ON" } },
            { parameter: "HRM_PRI_PORT_17", states: { 0: "OFF", 1: "ON" } },
            { parameter: "HRM_PRI_PORT_18", states: { 0: "OFF", 1: "ON" } },
            { parameter: "HRM_PRI_PORT_19", states: { 0: "OFF", 1: "ON" } },
            { parameter: "HRM_PRI_PORT_20", states: { 0: "OFF", 1: "ON" } },
            { parameter: "HRM_PRI_PORT_21", states: { 0: "OFF", 1: "ON" } },
            { parameter: "HRM_PRI_PORT_22", states: { 0: "OFF", 1: "ON" } },
            { parameter: "PL_4_PRI_PORT_23", states: { 0: "OFF", 1: "ON" } },
            { parameter: "PL_4_HTR_PORT_24", states: { 0: "OFF", 1: "ON" } },
            { parameter: "PL_4_PRI_PORT_25", states: { 0: "OFF", 1: "ON" } },
            { parameter: "OBC_RED_PORT_26", states: { 0: "OFF", 1: "ON" } },
            { parameter: "OBC_2_RED_PORT_27", states: { 0: "OFF", 1: "ON" } },
            { parameter: "PL_8_RED_PORT_28", states: { 0: "OFF", 1: "ON" } },
            { parameter: "ADCS-RED_PORT_29", states: { 0: "OFF", 1: "ON" } },
            { parameter: "THRUSTER_RED_PORT_30", states: { 0: "OFF", 1: "ON" } },
            { parameter: "THRUSTER_RED_PORT_31", states: { 0: "OFF", 1: "ON" } },
            { parameter: "THRUSTER_HTR_RD_PORT_32", states: { 0: "OFF", 1: "ON" } },
            { parameter: "UHF_RED_PORT_33", states: { 0: "OFF", 1: "ON" } },
            { parameter: "S_BAND_RED_PORT_34", states: { 0: "OFF", 1: "ON" } },
            { parameter: "X_BAND_2_RED_PORT_35", states: { 0: "OFF", 1: "ON" } },
            { parameter: "X_BAND_RED_PORT_36", states: { 0: "OFF", 1: "ON" } },
            { parameter: "PL_1_RED_PORT_37", states: { 0: "OFF", 1: "ON" } },
            { parameter: "PL_2_HTR_RD_AND_PL_3_HTR_RD_PORT_38", states: { 0: "OFF", 1: "ON" } },
            { parameter: "PL_2_RED_PORT_39", states: { 0: "OFF", 1: "ON" } },
            { parameter: "PL_3_RED_PORT_40", states: { 0: "OFF", 1: "ON" } },
            { parameter: "HRM_RED_PORT_41", states: { 0: "OFF", 1: "ON" } },
            { parameter: "HRM_RED_PORT_42", states: { 0: "OFF", 1: "ON" } },
            { parameter: "HRM_RED_PORT_43", states: { 0: "OFF", 1: "ON" } },
            { parameter: "HRM_RED_PORT_44", states: { 0: "OFF", 1: "ON" } },
            { parameter: "HRM_RED_PORT_45", states: { 0: "OFF", 1: "ON" } },
            { parameter: "HRM_RED_PORT_46", states: { 0: "OFF", 1: "ON" } },
            { parameter: "HRM_RED_PORT_47", states: { 0: "OFF", 1: "ON" } },
            { parameter: "HRM_RED_PORT_48", states: { 0: "OFF", 1: "ON" } },
            { parameter: "PL_6_PRI_PORT_49", states: { 0: "OFF", 1: "ON" } },
            { parameter: "PL_6_HTR_PORT_50", states: { 0: "OFF", 1: "ON" } },
            { parameter: "PL_5_RED_PORT_51", states: { 0: "OFF", 1: "ON" } },
            { parameter: "CURRENT_STATUS_OBC", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_OBC_2", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_PL_8_PRI_PORT", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_ADCS_PRI_PORT", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_THRUSTER_PRI_PORT", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_THRUSTER_PRI_PORT_2", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_THRUSTER_HTR_PORT", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_UHF_PRI_PORT", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_S_BAND_PRI_PORT", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_X_BAND_2_PRI_PORT", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_X_BAND_PRI_PORT", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_PL_1_PRI_PORT_11", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_PL_2_PRI_PORT_AND_PL_3_HTR_PORT", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_PL_2_PRI_PORT_13", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_PL_3_PRI_PORT_14", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_HRM_PRI_PORT_15", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_HRM_PRI_PORT_16", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_HRM_PRI_PORT_17", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_HRM_PRI_PORT_18", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_HRM_PRI_PORT_19", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_HRM_PRI_PORT_20", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_HRM_PRI_PORT_21", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_HRM_PRI_PORT_22", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_PL_4_PRI_PORT_23", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_PL_4_HTR_PORT_24", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_PL_4_PRI_PORT_25", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_OBC_RED_PORT_26", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_OBC_2_RED_PORT_27", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_PL_8_RED_PORT_28", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_ADCS_RED_PORT_29", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_THRUSTER_RED_PORT_30", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_THRUSTER_RED_PORT_31", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_THRUSTER_HTR_RD_PORT_32", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_UHF_RED_PORT_33", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_S_BAND_RED_PORT_34", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_X_BAND_2_RED_PORT_35", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_X_BAND_RED_PORT_36", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_PL_1_RED_PORT_37", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_PL_2_HTR_RD_AND_PL_3_HTR_RD_PORT_38", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_PL_2_RED_PORT_39", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_PL_3_RED_PORT_40", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_HRM_RED_PORT_41", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_HRM_RED_PORT_42", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_HRM_RED_PORT_43", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_HRM_RED_PORT_44", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_HRM_RED_PORT_45", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_HRM_RED_PORT_46", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_HRM_RED_PORT_47", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_HRM_RED_PORT_48", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_PL_6_PRI_PORT_49", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_PL_6_HTR_PORT_50", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "CURRENT_STATUS_PL_5_RED_PORT_51", states: { 0: "NO_OVERCURRENT_OCCURED", 1: "OVERCURRENT_DETECTED" } },
            { parameter: "UHF_ANTENNA_RELEASE_STATUS", states: { 0: "NOT_RELEASED", 1: "RELEASED" } },
            { parameter: "SECONDARY_HDRM_RELEASE_STATUS", states: { 0: "NOT_RELEASED", 1: "RELEASED" } },
            { parameter: "PRIMARY_HDRM_RELEASE_STATUS", states: { 0: "NOT_RELEASED", 1: "RELEASED" } },
            {
                parameter: "BATTERY_MODE",
                states: {
                    0: "OFF",
                    1: "CRITICAL",
                    2: "SAFE",
                    3: "NORMAL",
                    4: "FULL"
                },
            },
            { parameter: "RBF_STATUS", states: { 0: "NOT_CONNECTED", 1: "CONNECTED" } },
        ],
    },
    {
        command: "EPS_212_TC_GET_DEVICE_STS",
        telemetry: "212_EPS_TM_GET_DEVICE_STS",
        states: [
            // STATUS
            { parameter: "STATUS", states: { 0: "FAILURE", 1: "SUCCESS" } },

            // 1-bit Active/Inactive Flags (32 params)
            { parameter: "SAS_B", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "BURN_WIRE_2", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "AVIONICS", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "RESERVED_SS_1", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "RESERVED_SS_2", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "RESERVED_SS_3", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "RESERVED_SS_4", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "RESERVED_SS_5", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "SECONDARY_EDGE_SERVER", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "PRIMARY_THRUSTER", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "RESERVED_SS_6", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "MSI", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "SES_A", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "SES_B", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "SAS_A", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "BURN_WIRE_1", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "RESERVED", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "PRIMARY_UHF", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "RESERVED_SS_7", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "PRIMARY_S_BAND", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "RESERVED_SS_8", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "PRIMARY_X_BAND", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "SECONDARY_X_BAND", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "PRIMARY_EDGE_SERVER", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "HOLD_AND_RELEASE_MODULE", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "PRIMARY_OBC", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "SECONDARY_OBC", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "PRIMARY_PAYLOAD_SERVER", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "SECONDARY_PAYLOAD_SERVER", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "PRIMARY_GPS", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "SECONDARY_GPS", states: { 0: "INACTIVE", 1: "ACTIVE" } },
            { parameter: "PRIMARY_ADCS", states: { 0: "INACTIVE", 1: "ACTIVE" } },

            {
                parameter: "HOLD_AND_RELEASE_MODULE_SS",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART", 3: "BOOTING", 4: "SHUTTING_DOWN",
                    5: "IDLE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE", 7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "PRIMARY_ON_BOARD_CONTROLLER",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART", 3: "BOOTING", 4: "SHUTTING_DOWN",
                    5: "IDLE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE", 7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "SECONDARY_ON_BOARD_CONTROLLER",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART", 3: "BOOTING", 4: "SHUTTING_DOWN",
                    5: "IDLE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE", 7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "PRIMARY_PAYLOAD_SERVER_SS",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART", 3: "BOOTING", 4: "SHUTTING_DOWN",
                    5: "IDLE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE", 7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "SECONDARY_PAYLOAD_SERVER_SS",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART", 3: "BOOTING", 4: "SHUTTING_DOWN",
                    5: "IDLE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE", 7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "PRIMARY_GPS_SS",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART", 3: "BOOTING", 4: "SHUTTING_DOWN",
                    5: "IDLE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE", 7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "SECONDARY_GPS_SS",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART", 3: "BOOTING", 4: "SHUTTING_DOWN",
                    5: "IDLE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE", 7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "PRIMARY_ADCS_SS",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART", 3: "BOOTING", 4: "SHUTTING_DOWN",
                    5: "IDLE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE", 7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "RESERVED_1",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART", 3: "BOOTING", 4: "SHUTTING_DOWN",
                    5: "IDLE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE", 7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "PRIMARY_UHF_SS",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART", 3: "BOOTING", 4: "SHUTTING_DOWN",
                    5: "IDLE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE", 7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "RESERVED_2",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART", 3: "BOOTING", 4: "SHUTTING_DOWN",
                    5: "IDLE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE", 7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "PRIMARY_S_BAND_SS",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART", 3: "BOOTING", 4: "SHUTTING_DOWN",
                    5: "IDLE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE", 7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "RESERVED_3",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART", 3: "BOOTING", 4: "SHUTTING_DOWN",
                    5: "IDLE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE", 7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "PRIMARY_X_BAND_SS",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART", 3: "BOOTING", 4: "SHUTTING_DOWN",
                    5: "IDLE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE", 7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "SECONDARY_X_BAND_SS",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART", 3: "BOOTING", 4: "SHUTTING_DOWN",
                    5: "IDLE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE", 7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "PRIMARY_EDGE_SERVER_SS",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART", 3: "BOOTING", 4: "SHUTTING_DOWN",
                    5: "IDLE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE", 7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "SECONDARY_EDGE_SERVER_SS",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART", 3: "BOOTING", 4: "SHUTTING_DOWN",
                    5: "IDLE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE", 7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "PRIMARY_THRUSTER_SS",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART", 3: "BOOTING", 4: "SHUTTING_DOWN",
                    5: "IDLE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE", 7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "RESERVED_4",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART", 3: "BOOTING", 4: "SHUTTING_DOWN",
                    5: "IDLE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE", 7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "PL_1_MSI",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART", 3: "BOOTING", 4: "SHUTTING_DOWN",
                    5: "IDLE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE", 7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "PL_2_SES_A",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART", 3: "BOOTING", 4: "SHUTTING_DOWN",
                    5: "IDLE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE", 7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "PL_3_SES_B",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART", 3: "BOOTING", 4: "SHUTTING_DOWN",
                    5: "IDLE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE", 7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "PL_4_SAS_A",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART", 3: "BOOTING", 4: "SHUTTING_DOWN",
                    5: "IDLE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE", 7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "PL_5_BURN_WIRE",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART", 3: "BOOTING", 4: "SHUTTING_DOWN",
                    5: "IDLE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE", 7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "PL_6_SAS_B",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART", 3: "BOOTING", 4: "SHUTTING_DOWN",
                    5: "IDLE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE", 7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "RESERVED_5",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART", 3: "BOOTING", 4: "SHUTTING_DOWN",
                    5: "IDLE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE", 7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "PL_8_AVIONICS",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART", 3: "BOOTING", 4: "SHUTTING_DOWN",
                    5: "IDLE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE", 7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "RESERVED_6",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART", 3: "BOOTING", 4: "SHUTTING_DOWN",
                    5: "IDLE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE", 7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
            {
                parameter: "RESERVED_7",
                states: {
                    0: "OFF", 1: "ON", 2: "RESTART", 3: "BOOTING", 4: "SHUTTING_DOWN",
                    5: "IDLE", 6: "ERROR_IN_PROCEEDING_TO_ON_STATE", 7: "ERROR_IN_PROCEEDING_TO_OFF_STATE", 8: "OVERCURRENT_ERROR"
                },
            },
        ],
    },
    {
        command: "ADCS_19_TC_SET_ADCS_CTRL_MODE_CONF",
        telemetry: "ADCS_19_TM_SET_ADCS_CTRL_MODE_CONF",
        states: [
            {
                parameter: "STATUS",
                states: {
                    0: "SUCCESS"
                },
            },
        ],
    },
    {
        command: "ADCS_129_TC_GET_ADCS_STATE_INFO",
        telemetry: "ADCS_129_TM_GET_ADCS_STATE_INFO",
        states: [
            {
                parameter: "ATTITUDE_ESTIMATION_MODE",
                states: {
                    1: "ESTIMATION_MODE_RAW",
                    2: "ESTIMATION_MODE_FIXED_GAIN_WITHOUT_IMU_BIAS",
                    3: "ESTIMATION_MODE_FIXED_GAIN",
                    4: "ESTIMATION_MODE_KALMAN",
                    5: "ESTIMATION_MODE_KALMAN_BASIC"
                },
            },
            {
                parameter: "CONTROL_MODE",
                states: {
                    4: "3_AXIS_STABALISATION_MODE",
                    5: "SUN_POINTING_CONTROL_MODE",
                    6: "NADIR_POINTING",
                    7: "ADCS_19_TC_TARGET_TRACKING_CONTROL_MODE",
                    8: "FINE_SUN_POINTING"
                },
            },
        ],
    },
    {
        command: "ADCS_253_TC_ADCS_STATE_CFG",
        telemetry: "ADCS_253_TM_ADCS_STATE_CFG",
        states: [
            {
                parameter: "Auto_commissioning_flag",
                states: {
                    0: "DISABLE",
                    1: "ENABLE"
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
                    4: "Reaction_Wheel_4"
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
                    4: "Reaction_Wheel_4"
                },
            },
        ],
    },
    {
        command: "ADCS_142_TC_GET_ADCS_RW_MAGMTR",
        telemetry: "ADCS_142_TM_GET_ADCS_RW_MAGMTR",
        states: [
            {
                parameter: "Reaction_wheel_instance_ID",
                states: {
                    0: "ALL_Magnetometer",
                    1: "Magnetometer_1",
                    2: "Magnetometer_2",
                    3: "Magnetometer_3",
                    4: "Magnetometer_4"
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
                    12: "CSS_12"
                },
            },
        ],
    },
    {
        command: "ADCS_111_TC_GET_ADCS_ERR_VALID_METRICS",
        telemetry: "ADCS_111_TM_GET_ADCS_ERR_VALID_METRICS",
        states: [
            {
                parameter: "Safe_mode_Sun_Pointing_State",
                states: {
                    0: "Sun_pointing_state",
                    1: "Fine_Reference_Pointing_State",
                    2: "Initializing_Sun_Search",
                    3: "Sun_Searching",
                    4: "Waiting_for_Sun",
                    5: "Converging_towards_Sun",
                    6: "On_SUN",
                    7: "Safe_mode_Sun_Pointing_Not_Active"
                },
            },
            {
                parameter: "ATTITUDE_VALIDITY",
                states: {
                    0: "INVALID",
                    1: "VALID"
                },
            },
            {
                parameter: "REFERENCE_VALIDITY",
                states: {
                    0: "INVALID",
                    1: "VALID"
                },
            },
            {
                parameter: "TIME_VALIDITY",
                states: {
                    0: "INVALID",
                    1: "VALID"
                },
            },
            {
                parameter: "TRACKER_ATTITUDE_STATUS_1",
                states: {
                    0: "Attitude_status_OK",
                    1: "Attitude_status_Pending",
                    2: "Attitude_status_BAD",
                    3: "Too_few_stars_to_compute_Attitude"
                },
            },
            {
                parameter: "TRACKER_ATTITUDE_STATUS_2",
                states: {
                    0: "Attitude_status_OK",
                    1: "Attitude_status_Pending",
                    2: "Attitude_status_BAD",
                    3: "Too_few_stars_to_compute_Attitude"
                },
            },
        ],
    },
    {
        command: "ADCS_6_TC_SET_ADCS_MOI_CONF",
        telemetry: "ADCS_6_TM_SET_ADCS_MOI_CONF",
        states: [
            {
                parameter: "STATUS",
                states: {
                    0: "SUCCESS"
                },
            },
        ],
    },
    {
        command: "ADCS_8_TC_SET_ADCS_MAGMTR_SLCT",
        telemetry: "ADCS_8_TM_SET_ADCS_MAGMTR_SLCT",
        states: [
            {
                parameter: "STATUS",
                states: {
                    0: "SUCCESS"
                },
            },
        ],
    },
    {
        command: "COMMS_350_TC_GET_SBAND_TX_CFG",
        telemetry: "COMMS_350_TM_GET_SBAND_TX_CFG",
        states: [
            {
                parameter: "Enable_Reed_Solomon",
                states: {
                    0: "Disabled",
                    1: "Enabled"
                },
            },
            {
                parameter: "Enable_randomization",
                states: {
                    0: "Disabled",
                    1: "Enabled"
                },
            },
        ],
    },
    {
        command: "COMMS_369_TC_GET_SBAND_RX_CFG",
        telemetry: "COMMS_369_TM_GET_SBAND_RX_CFG",
        states: [
            {
                parameter: "Enable_convolutional_coding",
                states: {
                    0: "Disabled",
                    1: "Enabled"
                },
            },
            {
                parameter: "Enable_randomization",
                states: {
                    0: "Disabled",
                    1: "Enabled"
                },
            },
        ],
    },
    {
        command: "COMMS_420_TC_SBAND_GET_RX_SEL_CFG",
        telemetry: "COMMS_420_TM_SBAND_GET_RX_SEL_CFG",
        states: [
            {
                parameter: "RECEIVER_PORT_SELECTION",
                states: {
                    0: "Receiver_0",
                    1: "Receiver_1",
                    3: "Failure"
                },
            },
        ],
    },
    {
        command: "COMMS_465_TC_SBAND_GET_COMMS_TM_INFO",
        telemetry: "COMMS_465_TM_SBAND_GET_COMMS_TM_INFO",
        states: [
            {
                parameter: "Rcv0_HW_Active",
                states: { 0: "OFF", 1: "ON" },
            },
            {
                parameter: "Rcv0_SYNC",
                states: { 0: "NOSYNC", 1: "SYNC" },
            },
            {
                parameter: "Rcv1_HW_Active",
                states: { 0: "OFF", 1: "ON" },
            },
            {
                parameter: "Rcv1_SYNC",
                states: { 0: "NOSYNC", 1: "SYNC" },
            },
            {
                parameter: "Xmt0_HW_Active",
                states: { 0: "OFF", 1: "ON" },
            },
            {
                parameter: "Xmt0_Modulation",
                states: {
                    0: "NoMod",
                    1: "BPSK",
                    2: "QPSK",
                    3: "PSK8",
                    4: "PSK16",
                    5: "PSK32",
                    6: "PSK64"
                },
            },
            {
                parameter: "Xmt1_HW_Active",
                states: { 0: "OFF", 1: "ON" },
            },
            {
                parameter: "Xmt1_Modulation",
                states: {
                    0: "NoMod",
                    1: "BPSK",
                    2: "QPSK",
                    3: "PSK8",
                    4: "PSK16",
                    5: "PSK32",
                    6: "PSK64"
                },
            },
        ],
    },
    {
        command: "PS_604_TC_PLD_HEALTH_STATUS_CMD",
        telemetry: "PS_604_TM_PLD_HEALTH_STATUS_CMD",
        states: [
            {
                parameter: "Application_State",
                states: {
                    0: "PAYLOAD_DISCONNECTED",
                    1: "PAYLOAD_VM_OFF",
                    2: "PAYLOAD_NOT_REGISTERED",
                    3: "PAYLOAD_CONNECTED"
                },
            },
        ],
    },
    {
        command: "PS_606_TC_PLD_UPDATE_DB_CMD",
        telemetry: "PS_606_TM_PLD_UPDATE_DB_CMD",
        states: [
            {
                parameter: "RESPONSE",
                states: {
                    0: "SUCCESS",
                    1: "FAILURE"
                },
            },
        ],
    },
    {
        command: "PS_607_TC_PLD_GET_DB_CMD",
        telemetry: "PS_607_TM_PLD_GET_DB_CMD",
        states: [
            {
                parameter: "RESPONSE",
                states: {
                    0: "SUCCESS",
                    1: "FAILURE"
                },
            },
        ],
    },
    {
        command: "PS_608_TC_PLD_RESTORE_FACTORY_DATABASE_CMD",
        telemetry: "PS_608_TM_PLD_RESTORE_FACTORY_DATABASE_CMD",
        states: [
            {
                parameter: "RESPONSE",
                states: {
                    0: "SUCCESS",
                    1: "FAILURE"
                },
            },
        ],
    },
    {
        command: "PS_610_TC_PLD_UPGRADE_PLD_CMD",
        telemetry: "PS_610_TM_PLD_UPGRADE_PLD_CMD",
        states: [
            {
                parameter: "RESPONSE",
                states: {
                    0: "SUCCESS",
                    1: "FAILURE"
                },
            },
        ],
    },
    {
        command: "PS_611_TC_PLD_UPDATE_FACTORY_IMAGE_CMD",
        telemetry: "PS_611_TM_PLD_UPDATE_FACTORY_IMAGE_CMD",
        states: [
            {
                parameter: "RESPONSE",
                states: {
                    0: "SUCCESS",
                    1: "FAILURE"
                },
            },
        ],
    },
    {
        command: "PS_612_TC_PLD_UPDATE_FACTORY_IMAGE_CMD",
        telemetry: "PS_612_TM_PLD_UPDATE_FACTORY_IMAGE_CMD",
        states: [
            {
                parameter: "RESPONSE",
                states: {
                    0: "SUCCESS",
                    1: "FAILURE"
                },
            },
        ],
    },
    {
        command: "PS_613_TC_PC_UPDATE_IMAGE_CMD",
        telemetry: "PS_613_TM_PC_UPDATE_IMAGE_CMD",
        states: [
            {
                parameter: "RESPONSE",
                states: {
                    0: "SUCCESS",
                    1: "FAILURE"
                },
            },
        ],
    },
    {
        command: "PS_615_TC_CHANGE_FTM_CONFIG_CMD",
        telemetry: "PS_615_TM_CHANGE_FTM_CONFIG_CMD",
        states: [
            {
                parameter: "RESPONSE",
                states: {
                    0: "SUCCESS",
                    1: "FAILURE"
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
                    2: "ES"
                },
            },
        ],
    },
    {
        command: "OBC_503_TC_OBC_MEM_DOWNLOAD",
        telemetry: "OBC_503_TM_OBC_MEM_DOWNLOAD",
        states: [
            {
                parameter: "MEMORY_DOWNLOAD_STATUS",
                states: {
                    0: "MEMORY_DOWNLOAD_INITIATTED",
                    1: "OBC_MEMORY_DOWNLOAD_FAILED_INVALID_MEMORY_TYPE",
                    2: "OBC_MEMORY_DOWNLOAD_FAILED_INVALID_MEMORY_ADDRESS_OR_MEMORY_RANGE"
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
                    8: "PS_SSD_3",
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
    {
        command: "COMMS_334_TC_COMMS_SBAND_BEACON_START",
        telemetry: "COMMS_334_TM_COMMS_SBAND_BEACON_START",
        states: [
            {
                parameter: "Status",
                states: {
                    0: "SUCCESS",
                    1: "FAILURE",
                },
            },
        ],
    },
    {
        command: "COMMS_335_TC_COMMS_SBAND_BEACON_STOP",
        telemetry: "COMMS_335_TM_COMMS_SBAND_BEACON_STOP",
        states: [
            {

                parameter: "Status",
                states: {
                    0: "SUCCESS",
                    1: "FAILURE",
                },

            },
        ],
    },
    {
        command: "COMMS_803_TC_UHF_GET_TX_CFG",
        telemetry: "COMMS_803_TM_UHF_GET_TX_CFG",
        states: [
            {
                parameter: "Modulation_Type",
                states: {
                    0: "2FSK",
                    1: "GFSK"
                }
            },
            {
                parameter: "Enable_DC_filter",
                states: {
                    0: "DISABLE",
                    1: "ENABLE"
                }
            },
            {
                parameter: "FEC_enable",
                states: {
                    0: "DISABLE",
                    1: "ENABLE"
                }
            },
            {
                parameter: "Manchester_Enable",
                states: {
                    0: "DISABLE",
                    1: "ENABLE"
                }
            }
        ],
    },
    {
        command: "COMMS_805_TC_UHF_GET_RX_CFG",
        telemetry: "COMMS_805_TM_UHF_GET_RX_CFG",
        states: [
            {
                parameter: "Modulation_Type",
                states: {
                    0: "2FSK",
                    1: "GFSK"
                }
            },
            {
                parameter: "Enable_DC_filter",
                states: {
                    0: "DISABLE",
                    1: "ENABLE"
                }
            },
            {
                parameter: "FEC_enable",
                states: {
                    0: "DISABLE",
                    1: "ENABLE"
                }
            },
            {
                parameter: "Manchester_Enable",
                states: {
                    0: "DISABLE",
                    1: "ENABLE"
                }
            }
        ],
    },
    {
        command: "COMMS_807_TC_UHF_GET_TX_PKT_CFG",
        telemetry: "COMMS_807_TM_UHF_GET_TX_PKT_CFG",
        states: [
            {
                parameter: "Whitening_Enable",
                states: {
                    0: "DISABLE",
                    1: "ENABLE"
                }
            },
            {
                parameter: "CRC_Enable",
                states: {
                    0: "DISABLE",
                    1: "ENABLE"
                }
            }
        ],
    },
    {
        command: "COMMS_809_TC_UHF_GET_RX_PKT_CFG",
        telemetry: "COMMS_809_TM_UHF_GET_RX_PKT_CFG",
        states: [
            {
                parameter: "Whitening_Enable",
                states: {
                    0: "DISABLE",
                    1: "ENABLE"
                }
            },
            {
                parameter: "CRC_Enable",
                states: {
                    0: "DISABLE",
                    1: "ENABLE"
                }
            }
        ],
    },
    {
        command: "COMMS_811_TC_UHF_GET_RX_PKT_CFG",
        telemetry: "COMMS_811_TM_UHF_GET_RX_PKT_CFG",
        states: [
            {
                parameter: "LNA_Sel",
                states: {
                    0: "DISABLE",
                    1: "ENABLE"
                }
            },
            {
                parameter: "Filter_Len",
                states: {
                    0: "DISABLE",
                    1: "ENABLE"
                }
            }
        ],
    },
    {
        command: "COMMS_813_TC_UHF_BEACON_TX_ST",
        telemetry: "COMMS_813_TM_UHF_BEACON_TX_ST",
        states: [
            {
                parameter: "Status",
                states: {
                    0: "SUCCESS",
                    1: "FAILURE",
                },
            },
        ],
    },
    {
        command: "COMMS_814_TC_UHF_BEACON_TX_STOP",
        telemetry: "COMMS_814_TM_UHF_BEACON_TX_STOP",
        states: [
            {
                parameter: "Status",
                states: {
                    0: "SUCCESS",
                    1: "FAILURE",
                },
            },
        ],
    },
];
