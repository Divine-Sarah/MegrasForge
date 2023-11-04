import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest, response: NextResponse){
    try {
         const body = await request.json();

        const recipes =await prisma.recipe.create({
            data: {
                title: body.title,
                ingredients: body.ingredients,
                instructions: body.instructions,
                image: ""
            }
        });

        let json_response = {
      status: "success",
      data: {
        recipes,
      },
    };
      return new NextResponse(JSON.stringify(json_response), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
    } catch (error: any) {
         if (error.code === "P2002") {
      let error_response = {
        status: "fail",
        message: "Recipe already exists",
      };
      return new NextResponse(JSON.stringify(error_response), {
        status: 409,
        headers: { "Content-Type": "application/json" },
      });
    }
        let error_response = {
      status: "error",
      message: error.message,
    };
    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
    }
}