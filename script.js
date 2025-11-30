// --- DỮ LIỆU KHỞI TẠO ---
const rawData = [

  // Dữ liệu MỚI NHẤT (Ngày 30/11/2025)
  { time: "15:12 - 30/11/2025", item: "Găng Thần Linh", map: "Cánh đồng tuyết" },
  { time: "13:11 - 30/11/2025", item: "Găng Thần Xayda", map: "Rừng tuyết" },
  { time: "09:58 - 30/11/2025", item: "Giầy Thần Linh", map: "Hang băng" },
  { time: "09:58 - 30/11/2025", item: "Giầy Thần Linh", map: "Hang băng" },
  { time: "07:59 - 30/11/2025", item: "Áo Thần Xayda", map: "Núi tuyết" },
  { time: "07:58 - 30/11/2025", item: "Nhẫn Thần Linh", map: "Cánh đồng tuyết" },
  { time: "05:58 - 30/11/2025", item: "Giầy Thần Linh", map: "Cánh đồng tuyết" },
  { time: "02:27 - 30/11/2025", item: "Găng Thần Xayda", map: "Núi tuyết" },
  { time: "00:27 - 30/11/2025", item: "Giầy Thần Linh", map: "Cánh đồng tuyết" },
  // Dữ liệu MỚI NHẤT (Ngày 29/11/2025)
  { time: "20:44 - 29/11/2025", item: "Quần Thần Xayda", map: "Dòng sông băng" },
  { time: "17:57 - 29/11/2025", item: "Áo Thần Linh", map: "Rừng tuyết" },
  { time: "15:57 - 29/11/2025", item: "Giầy Thần Linh", map: "Dòng sông băng" },
  { time: "13:57 - 29/11/2025", item: "Áo Thần Linh", map: "Hang băng" },
  { time: "11:57 - 29/11/2025", item: "Áo Thần Namec", map: "Núi tuyết" },
  { time: "09:56 - 29/11/2025", item: "Áo Thần Namec", map: "Núi tuyết" },
  { time: "07:50 - 29/11/2025", item: "Giầy Thần Xayda", map: "Rừng tuyết" },
  { time: "02:05 - 29/11/2025", item: "Quần Thần Namec", map: "Dòng sông băng" },
  { time: "00:05 - 29/11/2025", item: "Giầy Thần Xayda", map: "Núi tuyết" },
  // Dữ liệu MỚI NHẤT (Ngày 28/11/2025)
  { time: "22:05 - 28/11/2025", item: "Áo Thần Namếc", map: "Rừng tuyết" },
  { time: "20:05 - 28/11/2025", item: "Găng Thần Namếc", map: "Rừng tuyết" },
  { time: "18:05 - 28/11/2025", item: "Áo Thần Namếc", map: "Núi tuyết" },
  { time: "18:05 - 28/11/2025", item: "Găng Thần Namếc", map: "Rừng tuyết" },
  { time: "14:12 - 28/11/2025", item: "Áo Thần Namếc", map: "Cánh đồng tuyết" },
  { time: "09:56 - 28/11/2025", item: "Giầy Thần Linh", map: "Cánh đồng tuyết" },
  { time: "07:56 - 28/11/2025", item: "Găng Thần Linh", map: "Núi tuyết" },
  { time: "05:56 - 28/11/2025", item: "Quần Thần Xayda", map: "Rừng tuyết" },
  { time: "03:24 - 28/11/2025", item: "Áo Thần Linh", map: "Rừng băng" },
  { time: "01:24 - 28/11/2025", item: "Giầy Thần Namec", map: "Núi tuyết" },
  // Dữ liệu MỚI NHẤT (Ngày 27/11/2025)
  { time: "23:24 - 27/11/2025", item: "Áo Thần Namec", map: "Núi tuyết" },
  { time: "21:24 - 27/11/2025", item: "Áo Thần Linh", map: "Dòng sông băng" },
  { time: "19:24 - 27/11/2025", item: "Áo Thần Xayda", map: "Núi tuyết" },
  { time: "17:24 - 27/11/2025", item: "Giầy Thần Namếc", map: "Hang băng" },
  { time: "15:24 - 27/11/2025", item: "Giầy Thần Namếc", map: "Dòng sông băng" },
  { time: "09:54 - 27/11/2025", item: "Quần Thần Xayda", map: "Rừng băng" },
  { time: "07:54 - 27/11/2025", item: "Áo Thần Namếc", map: "Hang băng" },
  { time: "05:54 - 27/11/2025", item: "Quần Thần Xayda", map: "Núi tuyết" },
  { time: "01:54 - 27/11/2025", item: "Giầy Thần Linh", map: "Rừng tuyết" },
  // Dữ liệu MỚI NHẤT (Ngày 26/11/2025)
  { time: "23:54 - 26/11/2025", item: "Nhẫn Thần Linh", map: "Rừng băng" },
  { time: "21:54 - 26/11/2025", item: "Quần Thần namếc", map: "Hang băng" },
  { time: "19:54 - 26/11/2025", item: "Nhẫn Thần Linh", map: "Dòng sông băng" },
  { time: "17:54 - 26/11/2025", item: "Nhẫn Thần Linh", map: "Rừng băng" },
  { time: "15:54 - 26/11/2025", item: "Găng Thần Xayda", map: "Núi tuyết" },
  { time: "13:54 - 26/11/2025", item: "Áo Thần Linh", map: "Núi tuyết" },
  { time: "11:54 - 26/11/2025", item: "Nhẫn Thần Linh", map: "Hang băng" },
  { time: "09:54 - 26/11/2025", item: "Áo Thần Xayda", map: "Rừng tuyết" },
  { time: "07:54 - 26/11/2025", item: "Nhẫn Thần Linh", map: "Rừng băng" },
  { time: "05:54 - 26/11/2025", item: "Quần Thần Xayda", map: "Hang băng" },
  { time: "01:53 - 26/11/2025", item: "Giầy Thần Xayda", map: "Dòng sông băng" },
  // Dữ liệu MỚI NHẤT (Ngày 25/11/2025)
  { time: "23:53 - 25/11/2025", item: "Nhẫn Thần Linh", map: "Rừng băng" },
  { time: "21:53 - 25/11/2025", item: "Nhẫn Thần Linh", map: "Rừng tuyết" },
  { time: "19:55 - 25/11/2025", item: "Quần Thần Linh", map: "Rừng băng" },
  { time: "17:53 - 25/11/2025", item: "Giầy Thần Xayda", map: "Rừng tuyết" },
  { time: "15:53 - 25/11/2025", item: "Nhẫn Thần Linh", map: "Rừng băng" },
  { time: "13:53 - 25/11/2025", item: "Giầy Thần Namec", map: "Hang băng" },
  { time: "11:53 - 25/11/2025", item: "Găng Thần Namec", map: "Rừng tuyết" },
  { time: "09:53 - 25/11/2025", item: "Giầy Thần Namec", map: "Rừng băng" },
  { time: "07:53 - 25/11/2025", item: "Giầy Thần Linh", map: "Hang băng" },
  { time: "05:53 - 25/11/2025", item: "Nhẫn Thần Linh", map: "Hang băng" },
  { time: "02:02 - 25/11/2025", item: "Găng Thần Namếc", map: "Rừng băng" },
  { time: "00:05 - 25/11/2025", item: "Quần Thần Xayda", map: "Hang băng" },

  // Dữ liệu MỚI NHẤT (Ngày 24/11/2025)
  { time: "22:02 - 24/11/2025", item: "Nhẫn Thần Linh", map: "Rừng băng" },
  { time: "20:02 - 24/11/2025", item: "Áo Thần Xayda", map: "Hang băng" },
  { time: "18:02 - 24/11/2025", item: "Áo Thần Xayda", map: "Rừng tuyết" },
  { time: "16:02 - 24/11/2025", item: "Áo thần linh", map: "Núi tuyết" },
  { time: "14:02 - 24/11/2025", item: "Quần thần xayda", map: "Rừng băng" },
  { time: "12:02 - 24/11/2025", item: "Áo thần xayda", map: "Hang băng" },
  { time: "10:02 - 24/11/2025", item: "Áo thần linh", map: "Dòng sông băng" },
  { time: "08:02 - 24/11/2025", item: "Quần Thần Xayda", map: "Dòng sông băng" },
  { time: "06:02 - 24/11/2025", item: "Áo Thần Xayda", map: "Rừng tuyết" },
  { time: "03:04 - 24/11/2025", item: "Áo Thần Linh", map: "Dòng sông băng" },
  { time: "02:26 - 24/11/2025", item: "Giầy Thần Namếc", map: "Hang băng" },
  { time: "01:37 - 24/11/2025", item: "Giầy Thần Linh", map: "Hang băng" },

  // Dữ liệu MỚI (Ngày 23/11)
  { time: "21:03 - 23/11/2025", item: "Áo Thần Linh", map: "Rừng băng" },
  { time: "18:07 - 23/11/2025", item: "Găng Thần Linh", map: "Rừng băng" },
  { time: "16:56 - 23/11/2025", item: "Găng Thần Xayda", map: "Rừng tuyết" },
  { time: "12:01 - 23/11/2025", item: "Quần Thần Linh", map: "Núi tuyết" },
  { time: "10:03 - 23/11/2025", item: "Quần Thần Xayda", map: "Dòng sông băng" },
  { time: "08:04 - 23/11/2025", item: "Giầy Thần Xayda", map: "Hang băng" },
  { time: "06:02 - 23/11/2025", item: "Giầy Thần Namếc", map: "Rừng băng" },
  { time: "01:58 - 23/11/2025", item: "Găng Thần Namếc", map: "Rừng băng" },

  // Dữ liệu CŨ (Ngày 22/11)
  { time: "23:58 - 22/11/2025", item: "Áo Thần Xayda", map: "Núi tuyết" },
  { time: "21:58 - 22/11/2025", item: "Áo Thần Xayda", map: "Hang băng" },
  { time: "19:58 - 22/11/2025", item: "Quần Thần Linh", map: "Hang băng" },
  { time: "17:58 - 22/11/2025", item: "Quần Thần Linh", map: "Rừng tuyết" },
  { time: "15:58 - 22/11/2025", item: "Áo Thần Xayda", map: "Núi tuyết" },
  { time: "13:58 - 22/11/2025", item: "Áo Thần Xayda", map: "Hang băng" },
  { time: "11:58 - 22/11/2025", item: "Quần Thần namếc", map: "Rừng băng" },
  { time: "09:58 - 22/11/2025", item: "Quần Thần Linh", map: "Rừng tuyết" },
  { time: "07:58 - 22/11/2025", item: "Áo Thần Namếc", map: "Dòng sông băng" },
  { time: "05:58 - 22/11/2025", item: "Áo Thần Xayda", map: "Hang băng" },
];

// Xử lý dữ liệu ban đầu
rawData.forEach((item) => {
  const parts = item.time.split(" - ");
  item.onlyTime = parts[0];
  item.dateStr = parts[1];
  const t = parts[0].split(":");
  const d = parts[1].split("/");
  item.timestamp = new Date(d[2], d[1] - 1, d[0], t[0], t[1]).getTime();
});

// --- CẤU HÌNH ÂM THANH ---
let soundEnabled = false;
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// --- CÁC HÀM XỬ LÝ NGÀY GIỜ ---
function getUniqueDates() {
  const dates = [...new Set(rawData.map((item) => item.dateStr))];
  return dates.sort((a, b) => {
    const da = a.split("/");
    const db = b.split("/");
    return (
      new Date(db[2], db[1] - 1, db[0]) - new Date(da[2], da[1] - 1, da[0])
    );
  });
}

function populateDateSelect() {
  const dateSelect = document.getElementById("dateFilter");
  if (!dateSelect) return;
  dateSelect.innerHTML = "";
  const dates = getUniqueDates();
  dates.forEach((date) => {
    const option = document.createElement("option");
    option.value = date;
    option.text = date;
    dateSelect.appendChild(option);
  });
  if (dates.length > 0) dateSelect.value = dates[0];
}

function getPreviousDateStr(currentDateStr) {
  if (!currentDateStr) return "";
  const d = currentDateStr.split("/");
  const dateObj = new Date(d[2], d[1] - 1, d[0]);
  dateObj.setDate(dateObj.getDate() - 1);
  const dd = String(dateObj.getDate()).padStart(2, "0");
  const mm = String(dateObj.getMonth() + 1).padStart(2, "0");
  const yyyy = dateObj.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

function addMinutesToTime(timeStr, minutesToAdd) {
  const parts = timeStr.split(":");
  let h = parseInt(parts[0]);
  let m = parseInt(parts[1]);
  let totalMins = h * 60 + m + minutesToAdd;
  totalMins = totalMins % 1440;
  if (totalMins < 0) totalMins += 1440;
  let newH = Math.floor(totalMins / 60);
  let newM = totalMins % 60;
  return `${String(newH).padStart(2, "0")}:${String(newM).padStart(2, "0")}`;
}

function timeStringToMinutes(timeStr) {
  const parts = timeStr.split(":");
  return parseInt(parts[0]) * 60 + parseInt(parts[1]);
}

function getTimeDifference(currTime, prevTime) {
  const currMins = timeStringToMinutes(currTime);
  const prevMins = timeStringToMinutes(prevTime);
  let diff = currMins - prevMins;
  if (diff < -720) diff += 1440;
  if (diff > 720) diff -= 1440;
  return diff;
}

function normalizeStr(str) {
  return str ? str.trim().toLowerCase().replace(/\s+/g, " ") : "";
}

// --- CORE LOGIC: PHÂN TÍCH CHU KỲ (GHÉP CẶP THEO THỜI GIAN) ---
function analyzeCycle(currentItems, prevItems, selectedDate) {
  const sortedCurrent = [...currentItems].sort((a, b) => {
    return timeStringToMinutes(a.onlyTime) - timeStringToMinutes(b.onlyTime);
  });

  const sortedPrev = [...prevItems].sort((a, b) => {
    return timeStringToMinutes(a.onlyTime) - timeStringToMinutes(b.onlyTime);
  });

  let finalDisplayList = sortedCurrent.map((item) => ({
    ...item,
    isPrediction: false,
  }));

  const timeShifts = new Map();
  const matchedPrevIndices = new Set();

  sortedCurrent.forEach((curr) => {
    let bestMatchIndex = -1;
    let minAbsDiff = Infinity;
    let realDiff = 0;

    // Ưu tiên 1: Tìm dữ liệu TRƯỚC thời gian hiện tại (trong khoảng 60 phút)
    sortedPrev.forEach((prev, pIndex) => {
      if (!matchedPrevIndices.has(pIndex)) {
        const diff = getTimeDifference(curr.onlyTime, prev.onlyTime);
        const absDiff = Math.abs(diff);
        if (diff > 0 && absDiff <= 60 && absDiff < minAbsDiff) {
          minAbsDiff = absDiff;
          realDiff = diff;
          bestMatchIndex = pIndex;
        }
      }
    });

    // Ưu tiên 2: Tìm dữ liệu SAU
    if (bestMatchIndex === -1) {
      sortedPrev.forEach((prev, pIndex) => {
        if (!matchedPrevIndices.has(pIndex)) {
          const diff = getTimeDifference(curr.onlyTime, prev.onlyTime);
          const absDiff = Math.abs(diff);
          if (diff < 0 && absDiff <= 60 && absDiff < minAbsDiff) {
            minAbsDiff = absDiff;
            realDiff = diff;
            bestMatchIndex = pIndex;
          }
        }
      });
    }

    if (bestMatchIndex !== -1) {
      matchedPrevIndices.add(bestMatchIndex);
      const match = sortedPrev[bestMatchIndex];
      const currTimeMins = timeStringToMinutes(curr.onlyTime);
      timeShifts.set(currTimeMins, realDiff);

      let text = "";
      let cssClass = "";
      let icon = "";
      if (realDiff === 0) {
        text = "Chuẩn giờ";
        cssClass = "text-exact";
        icon = "⚡";
      } else if (realDiff < 0) {
        const absDiff = Math.abs(realDiff);
        const displayTime =
          absDiff >= 60
            ? `${Math.floor(absDiff / 60)}h${String(absDiff % 60).padStart(
                2,
                "0"
              )}p`
            : `${absDiff}p`;
        text = `Sớm ${displayTime}`;
        cssClass = "text-early";
        icon = "📉";
      } else {
        const absDiff = Math.abs(realDiff);
        const displayTime =
          absDiff >= 60
            ? `${Math.floor(absDiff / 60)}h${String(absDiff % 60).padStart(
                2,
                "0"
              )}p`
            : `${absDiff}p`;
        text = `Trễ ${displayTime}`;
        cssClass = "text-late";
        icon = "📈";
      }

      curr.analysis = { text, css: cssClass, icon, prevTime: match.onlyTime };
    } else {
      curr.analysis = null;
    }
  });

  sortedPrev.forEach((prev, prevIndex) => {
    if (!matchedPrevIndices.has(prevIndex)) {
      const prevTimeMins = timeStringToMinutes(prev.onlyTime);
      let shiftToApply = 0;

      for (let i = sortedCurrent.length - 1; i >= 0; i--) {
        const currTimeMins = timeStringToMinutes(sortedCurrent[i].onlyTime);
        if (currTimeMins <= prevTimeMins && timeShifts.has(currTimeMins)) {
          shiftToApply = timeShifts.get(currTimeMins);
          break;
        }
      }

      if (shiftToApply === 0 && timeShifts.size > 0) {
        const shifts = Array.from(timeShifts.entries()).sort(
          (a, b) => b[0] - a[0]
        );
        if (shifts.length > 0) {
          shiftToApply = shifts[0][1];
        }
      }

      const predictedTime = addMinutesToTime(prev.onlyTime, shiftToApply);

      let trendText = "";
      if (shiftToApply === 0) trendText = "(Dự kiến)";
      else if (shiftToApply < 0)
        trendText = `(Dự kiến - Sớm ${Math.abs(shiftToApply)}p)`;
      else trendText = `(Dự kiến - Trễ ${shiftToApply}p)`;

      const ghostItem = {
        time: `${predictedTime} - ${selectedDate}`,
        onlyTime: predictedTime,
        dateStr: selectedDate,
        map: prev.map,
        item: prev.item,
        timestamp: 9999999999999,
        isPrediction: true,
        analysis: {
          text: trendText,
          css: "text-predict",
          icon: "⏳",
          prevTime: prev.onlyTime,
        },
      };
      finalDisplayList.push(ghostItem);
    }
  });

  return finalDisplayList;
}

// --- UI HELPERS ---
function toggleSound() {
  soundEnabled = !soundEnabled;
  const btn = document.getElementById("btn-sound");
  if (soundEnabled) {
    btn.classList.add("active");
    btn.innerHTML = '<i class="fas fa-volume-up"></i>';
    playAudio("hover");
  } else {
    btn.classList.remove("active");
    btn.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
}

function playAudio(type) {
  if (!soundEnabled) return;
  if (audioCtx.state === "suspended") audioCtx.resume();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  if (type === "hover") {
    osc.frequency.setValueAtTime(600, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.02, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.05);
  } else if (type === "success") {
    osc.frequency.setValueAtTime(800, audioCtx.currentTime);
    osc.frequency.linearRampToValueAtTime(1200, audioCtx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.2);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.2);
  }
}

function getItemClass(name) {
  const n = name.toLowerCase();
  if (n.includes("xayda")) return "glow-xayda";
  if (n.includes("namếc") || n.includes("namec")) return "glow-namec";
  if (n.includes("linh")) return "glow-linh";
  return "text-white";
}

function getPlanetTag(name) {
  const n = name.toLowerCase();
  if (n.includes("xayda"))
    return `<span class="badge-planet tag-xayda">XAYDA</span>`;
  if (n.includes("namếc") || n.includes("namec"))
    return `<span class="badge-planet tag-namec">NAMEC</span>`;
  if (n.includes("linh"))
    return `<span class="badge-planet tag-td">TRÁI ĐẤT</span>`;
  return "";
}

function getItemIcon(name) {
  const n = name.toLowerCase();
  if (n.includes("áo")) return `<i class="fas fa-tshirt item-icon"></i>`;
  if (n.includes("quần"))
    return `<i class="fas fa-user-astronaut item-icon"></i>`;
  if (n.includes("găng")) return `<i class="fas fa-mitten item-icon"></i>`;
  if (n.includes("giày")) return `<i class="fas fa-boot item-icon"></i>`;
  if (n.includes("nhẫn")) return `<i class="far fa-life-ring item-icon"></i>`;
  return `<i class="fas fa-box item-icon"></i>`;
}

function addToLog(message, type = "info") {
  const consoleDiv = document.getElementById("system-log-console");
  if (!consoleDiv) return;
  const now = new Date();
  const timeStr = `${now.getHours().toString().padStart(2, "0")}:${now
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;
  const div = document.createElement("div");
  div.className = `log-line ${type}`;
  div.innerHTML = `<span class="time">[${timeStr}]</span> ${message}`;
  consoleDiv.prepend(div);
  if (consoleDiv.children.length > 20) consoleDiv.lastElementChild.remove();
}

function quickSearch(field, value) {
  playAudio("hover");
  document.getElementById("filterMap").value = "";
  document.getElementById("filterItem").value = "";
  if (field === "map") {
    document.getElementById("filterMap").value = value;
    addToLog(`Filter: MAP = ${value}`, "success");
  } else if (field === "item") {
    document.getElementById("filterItem").value = value;
    addToLog(`Filter: ITEM = ${value}`, "success");
  }
  filterData();
}

function renderQuickMaps() {
  const container = document.getElementById("quick-maps-list");
  if (!container) return;
  const mapCounts = {};
  rawData.forEach((row) => {
    const m = row.map.trim();
    mapCounts[m] = (mapCounts[m] || 0) + 1;
  });
  const sortedMaps = Object.keys(mapCounts).sort(
    (a, b) => mapCounts[b] - mapCounts[a]
  );
  const topMaps = sortedMaps.slice(0, 5);
  container.innerHTML = "";
  topMaps.forEach((mapName) => {
    const btn = document.createElement("button");
    btn.className = "quick-btn";
    btn.textContent = mapName;
    btn.onclick = () => quickSearch("map", mapName);
    container.appendChild(btn);
  });
}

function calculateStats(data) {
  if (data.length === 0) {
    const elMap = document.getElementById("stat-map");
    const elItem = document.getElementById("stat-item");
    const elTotal = document.getElementById("stat-total");
    if (elMap) elMap.innerText = "--";
    if (elItem) elItem.innerText = "--";
    if (elTotal) elTotal.innerText = 0;
    return;
  }
  const mapCounts = {};
  data.forEach((r) => (mapCounts[r.map] = (mapCounts[r.map] || 0) + 1));
  const topMap = Object.keys(mapCounts).reduce((a, b) =>
    mapCounts[a] > mapCounts[b] ? a : b
  );
  const itemCounts = {};
  data.forEach((r) => (itemCounts[r.item] = (itemCounts[r.item] || 0) + 1));
  const topItem = Object.keys(itemCounts).reduce((a, b) =>
    itemCounts[a] > itemCounts[b] ? a : b
  );
  const elMap = document.getElementById("stat-map");
  const elItem = document.getElementById("stat-item");
  const elTotal = document.getElementById("stat-total");
  if (elMap) elMap.innerText = topMap;
  if (elItem) elItem.innerText = topItem;
  if (elTotal) elTotal.innerText = data.length;
}

function switchTab(tabName) {
  playAudio("hover");
  document
    .querySelectorAll(".tab-btn")
    .forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");
  document
    .querySelectorAll(".chart-view")
    .forEach((view) => view.classList.remove("active"));
  document.getElementById(`chart-view-${tabName}`).classList.add("active");
}

function renderChart(data) {
  if (data.length === 0) return;
  const mapCounts = {};
  data.forEach((r) => (mapCounts[r.map] = (mapCounts[r.map] || 0) + 1));
  const sortedMaps = Object.entries(mapCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  const maxMap = sortedMaps.length > 0 ? sortedMaps[0][1] : 1;
  const mapDiv = document.getElementById("chart-view-maps");
  if (mapDiv) {
    mapDiv.innerHTML = "";
    sortedMaps.forEach(([map, count]) => {
      const percent = (count / maxMap) * 100;
      mapDiv.innerHTML += `<div class="chart-row"><div class="chart-label" title="${map}">${map}</div><div class="chart-bar-bg"><div class="chart-bar-fill fill-map" style="width: ${percent}%"></div></div><div class="chart-count">${count}</div></div>`;
    });
  }
  const itemCounts = {};
  data.forEach((r) => (itemCounts[r.item] = (itemCounts[r.item] || 0) + 1));
  const sortedItems = Object.entries(itemCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  const maxItem = sortedItems.length > 0 ? sortedItems[0][1] : 1;
  const itemDiv = document.getElementById("chart-view-items");
  if (itemDiv) {
    itemDiv.innerHTML = "";
    sortedItems.forEach(([item, count]) => {
      const percent = (count / maxItem) * 100;
      let barClass = "fill-map";
      const n = item.toLowerCase();
      if (n.includes("xayda")) barClass = "fill-xayda";
      if (n.includes("namếc") || n.includes("namec")) barClass = "fill-namec";
      if (n.includes("linh")) barClass = "fill-linh";
      itemDiv.innerHTML += `<div class="chart-row"><div class="chart-label" title="${item}">${item}</div><div class="chart-bar-bg"><div class="chart-bar-fill ${barClass}" style="width: ${percent}%"></div></div><div class="chart-count">${count}</div></div>`;
    });
  }
  
  // Xử lý biểu đồ thời gian (24h) - NEW STRUCTURE
  const hours = Array(24).fill(0);
  data.forEach((row) => {
    const h = parseInt(row.onlyTime.split(":")[0]);
    if (!isNaN(h)) hours[h]++;
  });

  const maxHour = Math.max(...hours);
  const timeDiv = document.getElementById("time-bars");
  
  if (timeDiv) {
    timeDiv.innerHTML = "";
    // Grid lines
    timeDiv.innerHTML += `<div class="chart-grid-line" style="bottom: 25%"></div>`;
    timeDiv.innerHTML += `<div class="chart-grid-line" style="bottom: 50%"></div>`;
    timeDiv.innerHTML += `<div class="chart-grid-line" style="bottom: 75%"></div>`;

    hours.forEach((count, h) => {
      const height = maxHour > 0 ? (count / maxHour) * 100 : 2; 
      const showLabel = (h % 4 === 0) ? h + 'h' : ''; 
      const activeClass = count > 0 ? "has-data" : "";

      timeDiv.innerHTML += `
        <div class="time-col-wrapper" data-info="${h}h: ${count} món">
            <div class="time-col ${activeClass}" style="height: ${height}%"></div>
            <div class="time-label">${showLabel}</div>
        </div>`;
    });
  }
}

function exportToCSV() {
  playAudio("success");
  addToLog("Exporting CSV...", "warn");
  let csv = "Time,Date,Map,Item,Analysis\n";
  rawData.forEach((r) => {
    let analysis = r.analysis ? r.analysis.text : "N/A";
    csv += `${r.onlyTime},${r.dateStr},${r.map},${r.item},${analysis}\n`;
  });
  const link = document.createElement("a");
  link.href = encodeURI("data:text/csv;charset=utf-8," + csv);
  link.download = "drop_data.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => addToLog("Export complete.", "success"), 1000);
}

function updateClock() {
  const clock = document.getElementById("live-clock");
  if (clock) clock.innerText = new Date().toLocaleTimeString("vi-VN");
}
setInterval(updateClock, 1000);

function copyToClipboard(text) {
  playAudio("success");
  navigator.clipboard.writeText(text).then(() => {
    const toast = document.getElementById("cyber-toast");
    if (toast) {
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 1500);
    }
    addToLog(`Copied: ${text.substring(0, 20)}...`, "success");
  });
}

function typeWriterEffect() {
  const text =
    ":: SYSTEM SCANNING... SECURE CONNECTION ESTABLISHED :: AUDIT LOG ACTIVE ::";
  const element = document.getElementById("terminal-text");
  if (!element) return;
  let i = 0;
  element.innerHTML = "";
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 50);
    } else {
      setTimeout(() => {
        i = 0;
        element.innerHTML = "";
        type();
      }, 5000);
    }
  }
  type();
}

window.onscroll = function () {
  const btn = document.getElementById("btn-back-to-top");
  if (!btn) return;
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  playAudio("hover");
}

function resetFilters() {
  document.getElementById("filterMap").value = "";
  document.getElementById("filterItem").value = "";
  filterData();
  playAudio("success");
}

function filterData() {
  const dateFilter = document.getElementById("dateFilter");
  if (!dateFilter) return;
  const selectedDate = dateFilter.value;
  const prevDate = getPreviousDateStr(selectedDate);
  const mapVal = document.getElementById("filterMap").value.toLowerCase();
  const itemVal = document.getElementById("filterItem").value.toLowerCase();

  let currentDayData = rawData.filter((row) => row.dateStr === selectedDate);
  let prevDayData = rawData
    .filter((row) => row.dateStr === prevDate)
    .sort((a, b) => a.timestamp - b.timestamp);

  let displayList = analyzeCycle(currentDayData, prevDayData, selectedDate);

  const filtered = displayList.filter((row) => {
    const matchMap = row.map.toLowerCase().includes(mapVal);
    const matchItem = row.item.toLowerCase().includes(itemVal);
    return matchMap && matchItem;
  });

  filtered.sort((a, b) => {
    const timeA = timeStringToMinutes(a.onlyTime);
    const timeB = timeStringToMinutes(b.onlyTime);
    return timeA - timeB;
  });

  renderTable(filtered);
}

function getCurrentTimeInMinutes() {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes();
}

function renderTable(data) {
  const container = document.getElementById("tableBody");
  if (!container) return;
  container.innerHTML = "";
  calculateStats(data);
  renderChart(data);
  if (data.length === 0) {
    container.innerHTML = `<div class="text-center py-5 text-muted" style="font-family:var(--font-head); letter-spacing:2px;">NO DATA FOR THIS DATE</div>`;
    return;
  }

  // Lấy thời gian hiện tại
  const currentTimeMins = getCurrentTimeInMinutes();

  const groupedData = {};
  data.forEach((row) => {
    if (!groupedData[row.onlyTime]) groupedData[row.onlyTime] = [];
    groupedData[row.onlyTime].push(row);
  });
  const sortedKeys = Object.keys(groupedData).sort((a, b) => {
    const [h1, m1] = a.split(":").map(Number);
    const [h2, m2] = b.split(":").map(Number);
    return h1 * 60 + m1 - (h2 * 60 + m2);
  });
  sortedKeys.forEach((timeKey) => {
    const items = groupedData[timeKey];
    items.forEach((row) => {
      const itemClass = getItemClass(row.item);
      const planetTag = getPlanetTag(row.item);
      const icon = getItemIcon(row.item);
      let analysisHTML = "";
      let rowClass = "t-row";
      if (row.isPrediction) {
        rowClass += " prediction";

        // Kiểm tra nếu dự kiến đã quá thời gian hiện tại
        const predictedTimeMins = timeStringToMinutes(row.onlyTime);
        if (predictedTimeMins < currentTimeMins) {
          rowClass += " expired-prediction";
        }
      }
      if (row.analysis) {
        analysisHTML = `
                  <div class="analysis-tag ${row.analysis.css}">
                      ${row.analysis.icon} ${row.analysis.text} 
                      <span style="font-weight:400; color:#889; font-size:0.7rem; margin-left:5px;">(Hôm qua: ${row.analysis.prevTime})</span>
                  </div>`;
      }
      const div = document.createElement("div");
      div.className = rowClass;
      div.onclick = () =>
        copyToClipboard(`[${timeKey}] ${row.map} - ${row.item}`);
      div.onmouseenter = () => playAudio("hover");
      div.innerHTML = `
              <div class="t-time">${timeKey}</div>
              <div class="t-content">
                  <div class="map-group">
                      <div class="map-badge">${row.map}</div>
                      ${analysisHTML}
                  </div>
                  <div class="item-text ${itemClass}">${icon} ${row.item} ${planetTag}</div>
              </div>
          `;
      container.appendChild(div);
    });
  });
}

// --- AUTO ANALYSIS & HUNTING SCHEDULE ---

function analyzeAndRenderSchedule() {
  // 1. Tổng hợp dữ liệu theo giờ và map
  const hourMapCounts = {}; 
  const mapTotalCounts = {}; 
  const hourTotalCounts = {}; 

  rawData.forEach(item => {
    // Lấy giờ (0-23)
    const hour = parseInt(item.onlyTime.split(':')[0]);
    const map = item.map.trim();

    // Đếm tổng map
    mapTotalCounts[map] = (mapTotalCounts[map] || 0) + 1;

    // Đếm tổng giờ
    hourTotalCounts[hour] = (hourTotalCounts[hour] || 0) + 1;

    // Đếm map theo giờ
    if (!hourMapCounts[hour]) hourMapCounts[hour] = {};
    hourMapCounts[hour][map] = (hourMapCounts[hour][map] || 0) + 1;
  });

  // 2. Render Lịch Săn Đồ (Hunting Schedule)
  const scheduleContainer = document.getElementById('hunting-schedule-list');
  if (scheduleContainer) {
    scheduleContainer.innerHTML = "";
    
    // Sắp xếp các giờ có dữ liệu
    const sortedHours = Object.keys(hourMapCounts).sort((a, b) => parseInt(a) - parseInt(b));

    sortedHours.forEach(hour => {
      const mapsInHour = hourMapCounts[hour];
      // Tìm map rớt nhiều nhất trong giờ này
      const topMapInHour = Object.keys(mapsInHour).reduce((a, b) => mapsInHour[a] > mapsInHour[b] ? a : b);
      const count = mapsInHour[topMapInHour];
      
      const timeRange = `${String(hour).padStart(2, '0')}:00 - ${String(parseInt(hour)+1).padStart(2, '0')}:00`;

      const row = document.createElement('div');
      row.className = 'schedule-row';
      row.innerHTML = `
        <div class="sch-time">${timeRange}</div>
        <div class="sch-map text-warning">${topMapInHour}</div>
        <div class="sch-rate text-secondary" style="font-size: 0.75rem;">(Rate: ${count} lần)</div>
      `;
      scheduleContainer.appendChild(row);
    });
  }

  // 3. Render Giờ Hoàng Đạo (Top 4 khung giờ rớt nhiều nhất)
  const goldenList = document.getElementById('golden-hours-list');
  if (goldenList) {
    goldenList.innerHTML = "";
    const topHours = Object.entries(hourTotalCounts)
      .sort((a, b) => b[1] - a[1]) 
      .slice(0, 4); 

    topHours.forEach(([hour, count]) => {
      const badge = document.createElement('div');
      badge.className = 'golden-badge';
      badge.innerHTML = `${hour}h <span class="badge-count-mini">${count}</span>`;
      goldenList.appendChild(badge);
    });
  }

  // 4. Render Top Map Analysis
  const topMapDiv = document.getElementById('top-map-analysis');
  if (topMapDiv) {
    topMapDiv.innerHTML = "";
    const sortedMaps = Object.entries(mapTotalCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5); // Top 5 map

    const maxVal = sortedMaps[0][1];

    sortedMaps.forEach(([map, count]) => {
      const barWidth = (count / maxVal) * 100;
      
      topMapDiv.innerHTML += `
        <div class="mb-2">
          <div class="d-flex justify-content-between mb-1">
            <span class="text-white">${map}</span>
            <span class="text-success fw-bold">${count}</span>
          </div>
          <div class="progress" style="height: 4px; background: rgba(255,255,255,0.1);">
            <div class="progress-bar bg-success" role="progressbar" style="width: ${barWidth}%"></div>
          </div>
        </div>
      `;
    });
  }
}

// --- ECONOMY CALCULATOR FUNCTIONS ---

// Chuyển tab con (Vàng / Ngọc)
function switchSubTab(type) {
  playAudio('hover');
  
  // Reset active class cho buttons
  document.querySelectorAll('.sub-tab-btn').forEach(btn => btn.classList.remove('active'));
  
  // Hide all views
  document.querySelectorAll('.sub-view').forEach(view => view.style.display = 'none');
  
  if (type === 'gold') {
      document.getElementById('btnSubGold').classList.add('active');
      document.getElementById('sub-view-gold').style.display = 'block';
  } else {
      document.getElementById('btnSubGem').classList.add('active');
      document.getElementById('sub-view-gem').style.display = 'block';
  }
}

const TV_PRICE = 37000000; // 1 Thỏi = 37tr Vàng

// Hàm tiện ích: Format số có dấu chấm
function formatNumber(num) {
    if (!num && num !== 0) return "";
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Hàm tiện ích: Lấy giá trị số từ input (loại bỏ dấu chấm)
function getRawValue(id) {
    const el = document.getElementById(id);
    if (!el) return 0;
    let val = el.value.replace(/\D/g, ''); // Xóa hết chữ, chỉ lấy số
    return val === '' ? 0 : parseInt(val);
}

// Hàm tiện ích: Gán giá trị đã format lại vào input
function setInputValue(id, num) {
    const el = document.getElementById(id);
    if (el) el.value = formatNumber(num);
}

/* === CỘT TRÁI: VÀNG <-> THỎI === */

function calcLeft_GoldChange() {
    const gold = getRawValue('leftInputGold');
    setInputValue('leftInputGold', gold); // Format lại ô đang nhập

    if (gold > 0) {
        const ingots = Math.floor(gold / TV_PRICE);
        const remainder = gold % TV_PRICE;
        
        setInputValue('leftInputIngot', ingots);
        document.getElementById('leftResRemainder').innerText = formatNumber(remainder);
    } else {
        setInputValue('leftInputIngot', '');
        document.getElementById('leftResRemainder').innerText = "0";
    }
}

function calcLeft_IngotChange() {
    const ingots = getRawValue('leftInputIngot');
    setInputValue('leftInputIngot', ingots); // Format lại ô đang nhập

    if (ingots > 0) {
        const gold = ingots * TV_PRICE;
        setInputValue('leftInputGold', gold);
        document.getElementById('leftResRemainder').innerText = "0"; 
    } else {
        setInputValue('leftInputGold', '');
    }
}


/* === CỘT PHẢI: TIỀN (VNĐ) <-> VÀNG === */

function getRate() {
    const el = document.getElementById('rightInputRate');
    let val = parseFloat(el.value);
    return (isNaN(val) || val <= 0) ? 0 : val;
}

function calcRight_MoneyChange() {
    const moneyVND = getRawValue('rightInputMoney');
    setInputValue('rightInputMoney', moneyVND); 
    
    const rate = getRate();
    if (moneyVND > 0 && rate > 0) {
        const gold = Math.round(moneyVND * rate * 1000);
        setInputValue('rightInputGold', gold);
    } else {
        setInputValue('rightInputGold', '');
    }
}

function calcRight_GoldChange() {
    const gold = getRawValue('rightInputGold');
    setInputValue('rightInputGold', gold); 
    
    const rate = getRate();
    if (gold > 0 && rate > 0) {
        const moneyVND = Math.round(gold / (rate * 1000));
        setInputValue('rightInputMoney', moneyVND);
    } else {
        setInputValue('rightInputMoney', '');
    }
}

function calcRight_RateChange() {
    const moneyVal = document.getElementById('rightInputMoney').value;
    if (moneyVal && moneyVal !== "") {
        calcRight_MoneyChange();
    } else {
        calcRight_GoldChange();
    }
}

/* === TÍNH NGỌC (GEM) === */
function calcGem() {
  const moneyVND = getRawValue('gemMoneyInput');
  setInputValue('gemMoneyInput', moneyVND);

  const rateInput = document.getElementById('gemRateInput');
  let rate = parseFloat(rateInput.value);
  if (isNaN(rate) || rate <= 0) rate = 0;

  const elTotal = document.getElementById('resGemTotal');
  const elReal = document.getElementById('resGemReal');

  if (moneyVND > 0 && rate > 0) {
      // 100k * 14.5 = 1450
      const moneyK = moneyVND / 1000;
      const totalGem = Math.floor(moneyK * rate);
      
      // Trừ 5% phí
      const realGem = Math.floor(totalGem * 0.95);

      elTotal.innerText = formatNumber(totalGem);
      elReal.innerText = formatNumber(realGem);
  } else {
      elTotal.innerText = "0";
      elReal.innerText = "0";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const fMap = document.getElementById("filterMap");
  const fItem = document.getElementById("filterItem");
  const fDate = document.getElementById("dateFilter");
  if (fMap) fMap.addEventListener("input", filterData);
  if (fItem) fItem.addEventListener("input", filterData);
  if (fDate) fDate.addEventListener("change", filterData);
  
  populateDateSelect();
  renderQuickMaps();
  filterData();
  typeWriterEffect();
  analyzeAndRenderSchedule(); // Gọi hàm phân tích tự động

  // Tự động cập nhật mỗi phút để đánh dấu các dự kiến đã quá thời gian
  setInterval(() => {
    const container = document.getElementById("tableBody");
    if (container && container.children.length > 0) {
      // Chỉ cập nhật lại render nếu đang xem ngày hiện tại
      const dateFilter = document.getElementById("dateFilter");
      if (dateFilter) {
        const selectedDate = dateFilter.value;
        const today = new Date();
        const todayStr = `${String(today.getDate()).padStart(2, "0")}/${String(
          today.getMonth() + 1
        ).padStart(2, "0")}/${today.getFullYear()}`;
        if (selectedDate === todayStr) {
          filterData(); // Cập nhật lại để đánh dấu các dự kiến đã quá thời gian
        }
      }
    }
  }, 60000); // Mỗi 60 giây (1 phút)
});