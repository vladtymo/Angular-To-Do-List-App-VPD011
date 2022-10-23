export interface ITask {
    name: string;
    date: Date,
    isComplete: boolean,
    description?: string
}

export const TASK_MOCK_DATA: ITask[] = [
    { name: "Create first Angular applicaiton", date: new Date(2022, 10, 23), isComplete: true },
    {
        name: "Create first component",
        date: new Date(2022, 10, 24),
        isComplete: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ex."
    },
    {
        name: "Generate first service",
        date: new Date(2022, 10, 28),
        isComplete: false,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus possimus facilis itaque, ratione quas explicabo dicta eius quibusdam repellendus eum.'
    }
];
