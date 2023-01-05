import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Flow {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export type FlowDocument = HydratedDocument<Flow>;
export const FlowSchema = SchemaFactory.createForClass(Flow);
