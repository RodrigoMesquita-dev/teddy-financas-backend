import { Module } from '@nestjs/common';
import { PeopleModule } from './people/people.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PeopleModule,
    PrismaModule],
})
export class AppModule {}
