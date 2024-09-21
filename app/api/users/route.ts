import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/app/libs/prismadb";
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
 
import { Prisma } from '@prisma/client';

// Gestion de la récupération des utilisateurs
export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ message: 'Non authentifié' }, { status: 401 });
  }

  try {
    const users = await prisma.user.findMany({
      where: {
        email: { not: session.user.email }, // Exclure l'utilisateur connecté
      },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
      },
    });

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs:', error);
    return NextResponse.json({ message: 'Erreur lors de la récupération des utilisateurs' }, { status: 500 });
  }
}

// Gestion de la suppression des utilisateurs
export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ message: 'Non authentifié' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ message: 'ID utilisateur manquant' }, { status: 400 });
    }

    // Ajoutez une validation pour vous assurer que l'utilisateur a le droit de supprimer cet utilisateur
    const userToDelete = await prisma.user.findUnique({
      where: { id },
    });

    if (!userToDelete) {
      return NextResponse.json({ message: 'Utilisateur non trouvé' }, { status: 404 });
    }

    const deletedUser = await prisma.user.delete({
      where: { id },
    });

    return NextResponse.json(deletedUser, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'utilisateur:', error);

    // Utilisation de Prisma.PrismaClientKnownRequestError pour une gestion d'erreurs plus spécifique
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Ajoutez ici une gestion plus spécifique en fonction du code de l'erreur (e.g., P2002 pour violation de contrainte unique)
    }

    return NextResponse.json({ message: 'Erreur lors de la suppression de l\'utilisateur' }, { status: 500 });
  }
}
