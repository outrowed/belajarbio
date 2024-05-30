import { getEntry, setEntry } from "./load-save.js";

export function createOptionEntry(key, { type, name, placeholder, defaultValue }) {
    const container = document.createElement("div");
    container.className = "option-entry";

    const label = document.createElement("div");
    label.textContent = name;
    container.appendChild(label);

    const input = document.createElement("input");
    container.appendChild(input);
    
    switch (type) {
        case "text":
        case "number":
            Object.assign(input, { type, placeholder });
            if (defaultValue) {
                input.value = defaultValue;
            }
            if (getEntry(key)) {
                input.value = getEntry(key);
            }
            else {
                setEntry(key, defaultValue);
            }
            input.addEventListener("change", () => {
                setEntry(key, input.value);
            });
        break;
        case "date":
            input.type = "datetime-local";
            const entryValue = getEntry(key);
            if (entryValue) {
                input.valueAsDate = entryValue;
            }
            input.addEventListener("change", () => {
                setEntry(key, new Date(input.value));
            });
        break;
    }

    return container;
}