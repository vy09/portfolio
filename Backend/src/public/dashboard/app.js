const tokenInput = document.getElementById("tokenInput");
const saveTokenBtn = document.getElementById("saveTokenBtn");
const refreshBtn = document.getElementById("refreshBtn");
const statusPill = document.getElementById("statusPill");
const statusMessage = document.getElementById("statusMessage");
const statNodes = document.querySelectorAll("[data-stat]");

const STORAGE_KEY = "backend-dashboard-token";

function setStatus(label, message, tone = "idle") {
  statusPill.textContent = label;
  statusPill.dataset.tone = tone;
  statusMessage.textContent = message;
}

function getToken() {
  return localStorage.getItem(STORAGE_KEY) || "";
}

function setToken(token) {
  localStorage.setItem(STORAGE_KEY, token);
  tokenInput.value = token;
}

function renderStats(stats) {
  statNodes.forEach((node) => {
    const key = node.dataset.stat;
    node.textContent = typeof stats[key] === "number" ? stats[key] : "-";
  });
}

async function loadStats() {
  const token = tokenInput.value.trim();

  if (!token) {
    setStatus("Missing token", "Add an admin bearer token first.", "warning");
    return;
  }

  setStatus(
    "Loading",
    "Fetching the latest dashboard statistics...",
    "loading",
  );

  try {
    const response = await fetch("/api/dashboard/statistics", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const payload = await response.json();

    if (!response.ok) {
      throw new Error(
        payload?.message || "Unable to load dashboard statistics",
      );
    }

    renderStats(payload.data || {});
    setStatus(
      "Live",
      payload.message || "Dashboard statistics updated successfully.",
      "success",
    );
  } catch (error) {
    setStatus("Error", error.message, "error");
  }
}

saveTokenBtn.addEventListener("click", () => {
  const token = tokenInput.value.trim();

  if (!token) {
    setStatus("Missing token", "Paste a token before saving.", "warning");
    return;
  }

  setToken(token);
  setStatus("Saved", "Token stored in this browser session.", "success");
});

refreshBtn.addEventListener("click", loadStats);

tokenInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    loadStats();
  }
});

const savedToken = getToken();
if (savedToken) {
  tokenInput.value = savedToken;
  loadStats();
} else {
  setStatus(
    "Idle",
    "Add an admin token and refresh to load the latest statistics.",
    "idle",
  );
}
