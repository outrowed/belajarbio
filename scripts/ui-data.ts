
export interface UIData {
    course: {
        prefix: string;
        postfix: string;
        name: string;
        title: string;
    };
    attemptsAllowed: number;
    timeLimit: Date;
    date: {
        quizOpened: Date;
        quizClosed: Date;
        courseSubmitted: Date;
    };
    user: {
        absen: number;
        class: string;
        name: string;
        title: string;
    }
}