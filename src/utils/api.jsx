import toast from "react-hot-toast";
import {
  method_types,
  backend_api,
  headers,
  method_name,
  target_name,
  OC3,
  SCOPE,
  AUTH_API_BASE,
  LEAFSPACE_PASSAGE_ENDPOINT,
  BASE,
} from "../constants/contants";

export async function httpPost(path, payload) {
  const res = await apiClient(`${BASE}${path}`, {
    method: "POST",
    body: payload === undefined ? undefined : JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.text();
}

export const registerUser = async (userData) => {
  try {
    const res = await fetch(`${AUTH_API_BASE}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (res.ok) {
      return await res.json();
    } else {
      const errorData = await res.json();
      throw new Error(errorData.message || "Registration failed");
    }
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const res = await fetch(`${AUTH_API_BASE}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    if (res.ok) {
      return await res.json();
    } else {
      const errorData = await res.json();
      throw new Error(errorData.message || "Login failed");
    }
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem('refresh-token');
  if (!refreshToken) throw new Error("No refresh token available");

  try {
    const res = await fetch(`${AUTH_API_BASE}/auth/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh_token: refreshToken }),
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem('access-token', data.access_token);
      localStorage.setItem('refresh-token', data.refresh_token);
      return data.access_token;
    } else {
      throw new Error("Failed to refresh token");
    }
  } catch (error) {
    console.error("Token refresh error:", error);
    logoutUser();
    throw error;
  }
};

export const apiClient = async (url, options = {}) => {
  let accessToken = localStorage.getItem('access-token');

  const defaultHeaders = {
    "Content-Type": "application/json",
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  };

  const finalOptions = {
    ...options,
    headers: { ...defaultHeaders, ...options.headers },
  };

  let res = await fetch(url, finalOptions);

  if (res.status === 401) {
    // Attempt to refresh
    try {
      const newToken = await refreshAccessToken();
      // Retry original request with new token
      finalOptions.headers["Authorization"] = `Bearer ${newToken}`;
      res = await fetch(url, finalOptions);
    } catch (refreshError) {
      // Refresh failed, user logged out by refreshAccessToken
      // window.location.href = "/login";
      return Promise.reject(refreshError);
    }
  }

  return res;
};

export const logoutUser = () => {
  localStorage.removeItem('access-token');
  localStorage.removeItem('refresh-token');
  localStorage.removeItem('user');
  window.location.href = "/login";
};

export const getAllCommands = async () => {
  const res = await fetch(`${backend_api}/api`, {
    method: "POST",
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: method_name["GET_ALL_COMMANDS"],
      params: [target_name],
      id: 1234567890,
      keyword_params: { scope: "DEFAULT" }
    })
  });

  const data = await res.json();
  return data;
};

export const getTlmPacket = async ({ tlmName }) => {
  const res = await fetch(`${backend_api}/api`, {
    method: "POST",
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: method_name["SEND_COMMAND"],
      params: [target_name, tlmName],
      id: 1234567890,
      keyword_params: { scope: "DEFAULT" }
    })
  });

  const data = await res.json();
  return data;
}

export const sendEditedCommand = async (command) => {
  try {
    const res = await fetch(`${backend_api}/api`, {
      method: "POST",
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: method_name["COMMAND"],
        params: command,
        id: 9,
        keyword_params: {
          scope: "DEFAULT"
        }
      })
    });
    return await res.json();
  } catch (error) {
    console.error("Error sending command:", error);
    return error;
  }
};

export const storeEditedCommand = async (editedCommands) => {
  try {
    const res = await fetch('http://100.71.21.42:8004/edit-commands/', {
      method: "POST",
      body: JSON.stringify(editedCommands)
    });
    return await res.json();
  } catch (error) {
    console.error("Error storing edited command:", error);
    return error;
  }
}

export const getStoredEditedCommands = async () => {
  try {
    const res = await fetch('http://100.71.21.42:8004/edit-commands/', {
      method: "GET",
    });
    return await res.json();
  } catch (error) {
    console.error("Error fetching stored edited commands:", error);
    return error;
  }
};

export const fetchBeacon = async () => {
  const body = {
    jsonrpc: "2.0",
    method: OC3.METHOD,
    params: [OC3.TARGET, OC3.PACKET],
    id: 9,
    keyword_params: { scope: OC3.SCOPE },
  };
  const res = await fetch(OC3.ENDPOINT, {
    method: "POST",
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  const data = await res.json();
  const list = Array.isArray(data?.result) ? data.result : [];
  const out = {};
  for (let i = 0; i < list.length; i++) {
    const name = String(list[i]?.[0] ?? `field_${i}`);
    const value = list[i]?.[1];
    out[name] = value;
  }
  return out;
}

//script runner API calls

const q = encodeURIComponent;

export async function lockScript(filename) {
  const safe = encodeURIComponent(filename).replace(/%2F/g, "/");
  return httpPost(`/script-api/scripts/${safe}/lock?scope=${q(SCOPE)}`);
}
export async function unlockScript(filename) {
  const safe = encodeURIComponent(filename).replace(/%2F/g, "/");
  return httpPost(`/script-api/scripts/${safe}/unlock?scope=${q(SCOPE)}`);
}

export async function startScript(filename) {
  const safe = encodeURIComponent(filename).replace(/%2F/g, "/");
  return httpPost(`/script-api/scripts/${safe}/run?scope=${q(SCOPE)}`);
}
export async function stopRun(runId) {
  return httpPost(`/script-api/running-script/${runId}/stop?scope=${q(SCOPE)}`);
}
export async function goRun(runId) {
  return httpPost(`/script-api/running-script/${runId}/go?scope=${q(SCOPE)}`);
}
export async function retryRun(runId) {
  return httpPost(`/script-api/running-script/${runId}/retry?scope=${q(SCOPE)}`);
}
export async function pauseRun(runId) {
  return httpPost(`/script-api/running-script/${runId}/pause?scope=${q(SCOPE)}`);
}
export async function sendPromptResponse(runId, method, answer, prompt_id, multiple) {
  const payload = { method, answer, prompt_id, multiple: multiple || null };
  const url = `/script-api/running-script/${runId}/prompt?scope=${SCOPE}`;
  return httpPost(url, payload);
}

// Leafspace Passages

export const getAllPassages = async () => {
  try {
    const response = await fetch('http://localhost:8024/passages');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Passages from DB:", data);
    return data;
  } catch (error) {
    console.error("Could not fetch passages:", error);
    throw error; // Re-throw so the caller knows it failed
  }
};

export const getAllGroundstations = async () => {
  try {
    const response = await fetch('http://localhost:8024/groundstations');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const getAllSatellites = async () => {
  try {
    const response = await fetch('http://localhost:8024/satellites');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const bookPassages = async (payload) => {
  try {
    const response = await fetch('http://localhost:8024/passages/candidates/book?allow_overlap=false', {
      method: 'POST',
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    console.log("Booking Response:", data);
    return data;
  }
  catch (error) {
    console.log(error);
  }
};