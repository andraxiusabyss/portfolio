import { PrismaClient } from "@prisma/client";

export default async function getFeaturedProjects() {
  const prisma = new PrismaClient();

  try {
    const allProjects = await prisma.project.findMany({
      include: {
        tags: true,
      },
      where: {
        isFeatured: true,
      },
    });

    return allProjects;
  } catch (error: any) {
    return [];
  }
}
