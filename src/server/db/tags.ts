import { Query } from "./index";

const all = async () => Query(`SELECT id, name FROM tags`);

export default {
    all
}