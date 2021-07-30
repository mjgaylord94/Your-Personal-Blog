import { Query } from "./index";

const one = async (id: string) => 
    Query(`Call spBlogTags(?)`, [id]);

const add = async (blogid: string, tagid: string) =>
    Query(`INSERT INTO blogtags (blogid, tagid) VALUES (?, ?)`, [blogid, tagid])

const remove = async (blogid: string) =>
    Query(`DELETE FROM blogtags WHERE blogtags.blogid = ?`, [blogid]);

export default {
    one,
    add,
    remove
}