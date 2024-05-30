
/** @param {string} str  */
export function getDateFromISO(str) {
    const [ namespace, ...isoDate ] = str.split(":");

    if (namespace != "dateiso") {
        return;
    }

    return new Date(isoDate.join(":"));
}

/** @param {string} str  */
export function getDateFromDashedDate(str) {
    const [ namespace, dashedDate ] = str.split(":");

    if (namespace != "date") {
        return;
    }

    const [ day, month, year, hour, minute ] = dashedDate.split("-").map(Number);

    const date = new Date(year, month - 1, day);
    
    hour && date.setHours(hour);
    minute && date.setMinutes(minute);

    return date;
}

/** @param {Date} date  */
export function formatDate(date) {
    const localeDateString = date.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit"
    });

    const [ day, month, dayNum, year, _, time, ampm ] = localeDateString.replace(/,/g, "").split(" ");

    const formattedDate = [
        day, ",",
        dayNum, month, year, ",",
        time, ampm
    ].join(" ").replace(/ ,/g, ",");

    return formattedDate;
}