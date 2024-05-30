
import entries from "../../lib/entries.js";
import { loadData, saveData } from "../../lib/load-save.js";
import { createOptionEntry } from "../../lib/settings.js";

const optionEntries = document.querySelector(".option-entries");

for (const [key, val] of Object.entries(entries)) {
    const optionEntry = createOptionEntry(key, val);
    optionEntries.appendChild(optionEntry);
}

const urlOutput = document.querySelector("#url-output");
const createUrl = document.querySelector("#btn-create-url");
const copyUrl = document.querySelector("#btn-copy-url");
const gotoUrl = document.querySelector("#btn-goto-url");
const clearLocalStorage = document.querySelector("#btn-clear-local-storage");

createUrl.addEventListener("click", () => {
    const data = loadData();
    const searchParams = new URLSearchParams(data);
    const url = `${window.location.origin}/?${searchParams}`;

    urlOutput.value = url;
});

copyUrl.addEventListener("click", () => {
    navigator.clipboard.writeText(urlOutput.value);
});

gotoUrl.addEventListener("click", () => {
    window.location.href = urlOutput.value;
});

clearLocalStorage.addEventListener("click", () => {
    saveData({});
    window.location.reload();
});