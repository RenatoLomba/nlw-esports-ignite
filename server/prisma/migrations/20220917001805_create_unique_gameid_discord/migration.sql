/*
  Warnings:

  - A unique constraint covering the columns `[discord,gameId]` on the table `Ad` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE INDEX "Ad_gameId_idx" ON "Ad"("gameId");

-- CreateIndex
CREATE UNIQUE INDEX "Ad_discord_gameId_key" ON "Ad"("discord", "gameId");
