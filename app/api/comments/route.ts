import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    console.error("User not authenticated");
    return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { listingId, content } = body;

    console.log("Received body:", body);  // Ajoutez ce log
    console.log("Current User ID:", currentUser.id);  // Ajoutez ce log

    if (!listingId || !content) {
      console.error("Listing ID or content missing");
      return NextResponse.json({ error: "Listing ID and content are required" }, { status: 400 });
    }

    const comment = await prisma.comment.create({
      data: {
        content,
        listingId,
        userId: currentUser.id,
      },
      include: {
        user: true,
      },
    });

    console.log("Comment created successfully:", comment);

    return NextResponse.json(comment);
  } catch (error) {
    console.error("Error creating comment:", error);  
    return NextResponse.json({ error: "Failed to create comment" }, { status: 500 });
  }
}
