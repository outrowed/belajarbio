
import lodash from "https://esm.run/lodash@4";
import { getDateFromDashedDate, getDateFromISO } from "../lib/date-format.js";
import { loadData } from "../lib/load-save.js";

const userData = loadData();

const searchParams = new URLSearchParams(window.location.search).entries();

lodash.merge(userData, Object.fromEntries(searchParams));

for (const [k, v] of Object.entries(userData)) {
    if (v.startsWith?.("date:")) {
        lodash.set(window, k, getDateFromDashedDate(v));
    }
    else if (v.startsWith?.("dateiso:")) {
        lodash.set(window, k, getDateFromISO(v));
    }
    else {
        lodash.set(window, k, v);
    }
}

if (window.ui != undefined) {
    if (ui.date && ui.date.quizOpened && ui.date.quizClosed) {
        const hour = ui.date.quizClosed.getHours() - ui.date.quizOpened.getHours();
        const minute = ui.date.quizClosed.getMinutes() - ui.date.quizOpened.getMinutes();

        ui.timeLimit = `${hour} hours ${minute} mins`;
    }

    if (ui.course && ui.course) {
        ui.course.title = `${ui.course.prefix} ${ui.course.name} ${ui.course.postfix}`;
        ui.user.title = `${ui.user.class}-${ui.user.absen} ${ui.user.name}`;
    }
}