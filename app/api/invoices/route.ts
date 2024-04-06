import { prisma } from "@/lib/prisma"

export async function GET() {
    const invoices = await prisma.invoice.findMany({
        include: {
            items: true
        }
    })

    return Response.json(invoices)
}