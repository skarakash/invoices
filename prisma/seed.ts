import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

function generateRandomAlphaNumeric(length: number) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

async function main() {
    const invoice = await prisma.invoice.upsert({
        where: { generated_id: generateRandomAlphaNumeric(6) },
        update: {},
        create: {
            generated_id: generateRandomAlphaNumeric(6),
            status: 'pending',
            street_from: '19 Union Terrace',
            city_from: 'London',
            zip_from: 'E1 3EZ',
            country_from: 'United Kingdom',
            client_name: 'Alex Grim',
            client_email: 'alexgrim@mail.com',
            client_street: '84 Church Way',
            client_city: 'Bradford',
            client_zip: 'BD1 9PB',
            client_country: 'United Kingdom',
            invoice_date: new Date('2021-08-21'),
            net_days: 30,
            description: 'Graphic Design',
        }
    })

    const items = [
        {
            name: 'Banner Design',
            quantity: 1,
            price: 15600,
            total: 15600,
        },
        {
            name: 'Email Design',
            quantity: 2,
            price: 5000,
            total: 5000,
        }
    ];

    // Loop through items and create them with the invoiceId reference
    for (const itemData of items) {
        await prisma.item.create({
            data: {
                ...itemData,
                invoice: { connect: { generated_id: invoice.generated_id } }
            }
        });
    }
}

main()
.then(() => prisma.$disconnect())
.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})