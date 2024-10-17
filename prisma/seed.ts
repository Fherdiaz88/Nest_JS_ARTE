import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy creatures
  const post1 = await prisma.arte.upsert({
    where: { name: 'La guernica' },
    update: {},
    create: {
      name: 'La guernica',
      description: 'Testimonio de horror que supuso la guerra civil española.',
      autor:"Pablo Picasso",
    },
  });

  const post2 = await prisma.arte.upsert({
    where: { name: 'The black square' },
    update: {},
    create: {
      name: 'The black square',
      description:
        'El artista llevo la pintura al punto cero, al limite de la abstraccion.',
        autor:"Kazimir Malévich",
    },
  });

  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });  