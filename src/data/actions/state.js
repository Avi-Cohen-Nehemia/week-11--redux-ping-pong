export const saveGameData = (data) => {
    return {
        type: "SAVE_GAME_DATA",
        ...data
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