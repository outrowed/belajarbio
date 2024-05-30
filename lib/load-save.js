import { getDateFromDashedDate, getDateFromISO } from "./date-format.js";

export function saveData(dump) {
    const serialized = JSON.stringify(dump);

    localStorage.setItem("ui_data", serialized);
}

export function loadData() {
    return JSON.parse(localStorage.getItem("ui_data") ?? "{}");
}

export function setEntry(entry, value) {
    const data = loadData();
    if (value instanceof Date) {
        data[entry] = `${toDashedDate(value)}`;
    }
    else {
        data[entry] = value;
    }
    saveData(data);
}

/** @param {Date} date  */
function toDashedDate(date) {
    const dashedDate =
        `date:${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}`;

    return dashedDate;
}

export function getEntry(entry) {
    const data = loadData();
    
    if (data[entry]?.startsWith?.("date:")) {
        return getDateFromDashedDate(data[entry]);
    }

    return data[entry];
}