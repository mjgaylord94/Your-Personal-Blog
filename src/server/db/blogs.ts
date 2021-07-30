import { Query } from "./index";

const all = async () =>
    Query(`SELECT b.id, b.title, b.content, a.name FROM blogs b JOIN authors a on b.authorid = a.id`);

const one = async (id: string) =>
    Query(`SELECT b.id, b.title, b.content, a.name FROM blogs b JOIN authors a on b.authorid = a.id WHERE b.id = ?`, [id]);

const add = async (title: string, content: string, authorid: string) =>
    Query(`INSERT INTO blogs (title, content, authorid) VALUES (?, ?, ?)`, [title, content, authorid]);

const edit = async (id: string, title: string, content: string) =>
    Query(`UPDATE blogs SET title = ?, content = ? WHERE blogs.id = ?`, [title, content, id]);

const remove = async (id: string) =>
    Query(`DELETE FROM blogs WHERE blogs.id = ?`, [id]);

export default {
    all,
    one,
    add,
    edit,
    remove
}