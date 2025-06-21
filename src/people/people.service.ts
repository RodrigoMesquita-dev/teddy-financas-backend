import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreatePeopleDto, EditPeopleDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PeopleService {
  constructor(private prisma: PrismaService) {}

  async createPeople(dto: CreatePeopleDto) {
    const people = await this.prisma.people.create({
      data: {
        ...dto,
      },
    });

    return people;
  }

  getPeople() {
    return this.prisma.people.findMany({});
  }

  getPeopleById(peopleId: number) {
    return this.prisma.people.findFirst({
      where: {
        id: peopleId,
      },
    });
  }

  async editPeopleById(
    peopleId: number,
    dto: EditPeopleDto,
  ) {
    const people = await this.prisma.people.findUnique({
      where: {
        id: peopleId,
      },
    });

    if (!people) {
      throw new ForbiddenException('Access to resource denied');
    }

    return this.prisma.people.update({
      where: {
        id: peopleId,
      },
      data: {
        ...dto,
      },
    });
  }

  async deletePeopleById(peopleId: number) {
    const people = await this.prisma.people.findUnique({
      where: {
        id: peopleId,
      },
    });

    if (!people) {
      throw new ForbiddenException('Access to resource denied');
    }

    await this.prisma.people.delete({
      where: {
        id: peopleId,
      },
    });
  }

  async findAllPaginated(page: number, limit: number) {
    const skip = (page - 1) * limit

    const [data, total] = await this.prisma.$transaction([
      this.prisma.people.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'asc' }
      }),
      this.prisma.people.count()
    ])

    return {
      data,
      total,
      page,
      limit,
    }
  }
}
