import { Query } from "./index";

const all = async () => Query(`SELECT id, name FROM authors`);

export default {
    all
}