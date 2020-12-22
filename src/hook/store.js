import { useEffect, useState } from "react";

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = (shouldListen = true) => {
    const setState = useState(globalState)[1];

    const dispatch = (actionIdentifier, payload) => {
        const newState = actions[actionIdentifier](globalState, payload);
        globalState = { ...globalState, ...newState };
        for (const listener of listeners) {
            listener(globalState);
        }
    };

    useEffect(() => {
        if (shouldListen) {
            listeners.push(setState);
        }
        return () => {
            if (shouldListen) {
                listeners = listeners.filter((li) => li !== setState);
            }
        };
    }, [shouldListen, setState]);

    console.log("globalState---", globalState);
    console.log("listeners---", listeners);
    console.log("actions---", actions);
    return { globalState: globalState, dispatch: dispatch };
};

export const initStore = (userActions, initStore) => {
    if (initStore) {
        globalState = { ...globalState, ...initStore };
    }
    actions = { ...actions, ...userActions };
};
