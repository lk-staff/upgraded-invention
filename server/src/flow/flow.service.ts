import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FlowDocument } from './schemas/flow.schema';
import { CreateFlowDto } from './dto/create-flow.dto';
import { UpdateFlowDto } from './dto/update-flow.dto';

@Injectable()
export class FlowService {
  constructor(
    @InjectModel('Flow') private readonly flowModel: Model<FlowDocument>,
  ) {}

  create(createFlowDto: CreateFlowDto) {
    return 'This action adds a new flow';
  }

  findAll() {
    return `This action returns all flow`;
  }

  findOne(id: number) {
    return `This action returns a #${id} flow`;
  }

  update(id: number, updateFlowDto: UpdateFlowDto) {
    return `This action updates a #${id} flow`;
  }

  remove(id: number) {
    return `This action removes a #${id} flow`;
  }
}
