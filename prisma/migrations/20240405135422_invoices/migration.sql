/*
  Warnings:

  - A unique constraint covering the columns `[generated_id]` on the table `Invoice` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Invoice_generated_id_key" ON "Invoice"("generated_id");
