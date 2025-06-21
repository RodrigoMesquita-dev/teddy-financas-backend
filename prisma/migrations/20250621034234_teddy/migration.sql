-- CreateTable
CREATE TABLE "peoples" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "payment" DOUBLE PRECISION NOT NULL,
    "company" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "peoples_pkey" PRIMARY KEY ("id")
);
