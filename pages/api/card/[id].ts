import { NextApiRequest, NextApiResponse } from 'next';
import prisma from "@/app/libs/prismadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    try {
      const deletedListing = await prisma.listing.delete({
        where: { id: id as string },
      });
      res.status(200).json(deletedListing);
    } catch (error) {
      res.status(500).json({ message: 'Impossible de supprimer la liste' });
    }
  } else {
    res.status(405).json({ message: 'Méthode Non Autorisée' });
  }
}