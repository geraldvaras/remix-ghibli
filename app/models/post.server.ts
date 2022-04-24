import { prisma } from "~/db.server";
import { getPosts } from "~/models/post.server"
  
export async function getPosts(): Promise<Array<Post>> {
    return prisma.post.findMany();
}