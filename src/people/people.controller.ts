import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { PeopleService } from './people.service';
import { CreatePeopleDto, EditPeopleDto } from './dto';

@Controller('peoples')
export class PeopleController {
  constructor(private peopleService: PeopleService) {}

  @Post()
  createPeoples(
    @Body() dto: CreatePeopleDto,
  ) {
    return this.peopleService.createPeople(dto);
  }

  @Get()
  getPeoples() {
    return this.peopleService.getPeople();
  }

  @Get('/paginated')
  async findAll(
    @Query('page') page = '1',
    @Query('limit') limit = '10',
  ) {
    const pageNumber = parseInt(page)
    const limitNumber = parseInt(limit)

    return this.peopleService.findAllPaginated(pageNumber, limitNumber)
  }

  @Get(':id')
  getPeopleById(@Param('id', ParseIntPipe) peopleId: number) {
    return this.peopleService.getPeopleById(peopleId);
  }

  @Patch(':id')
  editPeopleById(
    @Param('id', ParseIntPipe) peopleId: number,
    @Body() dto: EditPeopleDto,
  ) {
    return this.peopleService.editPeopleById(peopleId, dto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deletePeopleById(
    @Param('id', ParseIntPipe) peopleId: number,
  ) {
    return this.peopleService.deletePeopleById(peopleId);
  }
}
