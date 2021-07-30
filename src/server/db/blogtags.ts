import { Query } from "./index";

const all = async (id: string) => 
    Query(`Call spBlogTags(?)`, [id]);

export default {
    all
}