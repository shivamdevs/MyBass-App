import uuid from "../../util/uuid";

const appData = {
    name: "MyBass",
    session: uuid(),
    storage: {
        history: "mybass:history",
        setting: "mybass:setting",
    }
};

export default appData;