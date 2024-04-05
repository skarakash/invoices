-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "generated_id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "street_from" TEXT NOT NULL,
    "city_from" TEXT NOT NULL,
    "zip_from" TEXT NOT NULL,
    "country_from" TEXT NOT NULL,
    "client_name" TEXT NOT NULL,
    "client_email" TEXT NOT NULL,
    "client_street" TEXT NOT NULL,
    "client_city" TEXT NOT NULL,
    "client_zip" TEXT NOT NULL,
    "client_country" TEXT NOT NULL,
    "invoice_date" TIMESTAMP(3) NOT NULL,
    "net_days" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "invoiceId" TEXT NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
