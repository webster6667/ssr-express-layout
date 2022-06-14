import { api } from "@api";
import { GET_USERS } from "./endpoints";

import {IUser} from "@shared-types"

export const fetchUsers = async () => {
    const data = await api.get<IUser[]>(GET_USERS);

    return data;
};