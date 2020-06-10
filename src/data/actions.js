export const saveSettings = (data) => {
    return {
        type: "SAVE_SETTINGS",
        data: data
    };
};

export const handleIncrement1 = () => {
    return {
        type: "INCREMENTPLAYER1",
    };
};

export const handleIncrement2 = () => {
    return {
        type: "INCREMENTPLAYER2",
    };
};

export const reset = () => {
    return {
        type: "RESET",
    };
};