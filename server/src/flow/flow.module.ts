import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FlowService } from './flow.service';
import { FlowController } from './flow.controller';
import { FlowSchema } from './schemas/flow.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Flow', schema: FlowSchema }])],
  controllers: [FlowController],
  providers: [FlowService],
})
export class FlowModule {}
