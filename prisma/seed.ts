import prisma from "../lib/prisma";

async function main() {
  console.log("Seeding process...");

  const userSeed = await prisma.user.create({
    data: {
      name: "Admin",
      email: "admin@admin.com",
      role: "ADMIN",
      password: "$2a$12$XOdwaiq7R48y6BTobWLLsujq/eDYS2Pfy.m5wgMoaDnu9u.XVz7uG", // admin123
    },
  });
  console.log({ userSeed });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
