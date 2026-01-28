export const scheduleFiles = [
  {
    id: 1,
    name: "schedulefile1.json",
  },
  {
    id: 2,
    name: "schedulefile2.json",
  },
  {
    id: 3,
    name: "schedulefile3.json",
  },
  {
    id: 4,
    name: "schedulefile4.json",
  },
];

export const scheduleFileDetails = [
  {
    id: 1,
    command: "212_EPS_TC_GET_DEV_HW_STATUS",
    sub_system: "OBS",
    delay: "15",
    timestamp: "2024-06-25T22:00:00Z",
  },
  {
    id: 2,
    command: "638_OBC_TC_GET_MCU_RESET_INFO",
    sub_system: "OBS",
    delay: "15",
    timestamp: "2024-06-25T22:00:00Z",
  },
  {
    id: 3,
    command: "581_OBC_TC_GET_CURRENT_TIME",
    sub_system: "OBS",
    delay: "15",
    timestamp: "2024-06-25T22:00:00Z",
  },
  {
    id: 4,
    command: "500_OBC_TC_GET_OBC_CPU_USAGE",
    sub_system: "EPS",
    delay: "15",
    timestamp: "2024-06-25T22:00:00Z",
  },
  {
    id: 5,
    command: "500_OBC_TC_GET_OBC_CPU_USAGE",
    sub_system: "OBS",
    delay: "15",
    timestamp: "2024-06-25T22:00:00Z",
  },
];

export const subSystemList = [
  {
    value: 1,
    label: "ALL",
    description: "All Commands",
  },
  {
    value: 2,
    label: "THRUSTER",
    description: "Thruster",
  },
  {
    value: 3,
    label: "OBC",
    description: "On-Board Computer",
  },
  {
    value: 4,
    label: "PS",
    description: "Payload / Edge Server",
  },

  {
    value: 5,
    label: "EPS",
    description: "Electrical Power System",
  },
  {
    value: 6,
    label: "COMMS",
    description: "Communications Systems",
  },
  {
    value: 7,
    label: "ADCS",
    description: "Attitude Determination and Control System",
  },
  {
    value: 8,
    label: "SCHEDULE",
    description: "Schedule Files",
  },
];
export const targetList = [
  {
    value: 1,
    label: "EMULATOR",
  },
];

export const logMessages = [
  {
    eventId: 1,
    message: "Schedule file uploaded successfully",
  },
  {
    eventId: 2,
    message: "Command executed Successfully",
  },
  {
    eventId: 3,
    message: "Status is changed now!",
  },
  {
    eventId: 4,
    message: "Schedule file uploaded successfully",
  },
  {
    eventId: 5,
    message: "Schedule file uploaded successfully",
  },
];

export const scheduleFileCommands = ["TC_CONOPS_LUT_RUN_CTRL", "TC_549"];

export const BeaconDataValues = [
  {
    id: 1,
    parameter: "Satellite Mode",
    value: "Nominal",
  },
  {
    id: 2,
    parameter: "Battery Voltage",
    value: "7.8 V",
  },
  {
    id: 3,
    parameter: "Battery Current",
    value: "1.2 A",
  },
  {
    id: 4,
    parameter: "Battery Temperature",
    value: "32 °C",
  },
  {
    id: 5,
    parameter: "Solar Panel Voltage",
    value: "18.4 V",
  },
  {
    id: 6,
    parameter: "Solar Panel Current",
    value: "2.1 A",
  },
  {
    id: 7,
    parameter: "OBC Status",
    value: "Active",
  },
  {
    id: 8,
    parameter: "ADCS Mode",
    value: "Sun Pointing",
  },
  {
    id: 9,
    parameter: "Gyro Status",
    value: "OK",
  },
  {
    id: 10,
    parameter: "Magnetometer Status",
    value: "OK",
  },
  {
    id: 11,
    parameter: "UHF Communication",
    value: "Healthy",
  },
  {
    id: 12,
    parameter: "S-Band Communication",
    value: "Standby",
  },
  {
    id: 13,
    parameter: "Last Contact",
    value: "2025-12-24 10:42 UTC",
  },
  {
    id: 14,
    parameter: "Uptime",
    value: "124 Days",
  },
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
  { id: "UK01-02", longitude: -0.858, latitude: 60.748, country: "UK" },

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

// TimeLine filter in transmission history page

export const TimeLineFilter = [
  {
    id: 1,
    label: "all",
  },
  {
    id: 2,
    label: "10 mins ago",
  },
  {
    id: 3,
    label: "20 mins ago",
  },
  {
    id: 4,
    label: "30 mins ago",
  },
  {
    id: 5,
    label: "1 hour ago",
  },
  {
    id: 6,
    label: "2 hours ago",
  },
];

export const TelemetryType = [
  {
    id: 1,
    label: 'Telemetry',
  },
  {
    id: 2,
    label: "Health"
  },
  {
    id: 3,
    label: 'Beacon'
  },
  {
    id: 4,
    label: 'File Upload'
  }
]

export const CommandsType = [
  {
    id: 1,
    label: 'Commands',
  },
  {
    id: 2,
    label: 'File Upload'
  }
]

export const FilterTypes = [
  {
    value: 1,
    label: "Time Range",
    status: 'both',
  },
  {
    value: 2,
    label: "Telemetry Type",
    status: 'tlm',
  },
  {
    value: 3,
    label: 'Commands Type',
    status: 'cmd'
  }
]

export const RoleTypes = [
  {
    value: 1,
    label: "ADMIN",
    status: 'admin',
  },
  {
    value: 2,
    label: "SUPER_ADMIN",
    status: 'super_admin'
  },
  {
    value: 3,
    label: "OPERATOR",
    status: 'operator'
  }
]

export const policyTypes = [
  {
    value: 1,
    label: "onDemand15min",
  },
  {
    value: 2,
    label: "onDemand48h",
  },
];