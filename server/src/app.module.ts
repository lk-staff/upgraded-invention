import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongooseConfig } from './config/mongoose.config';
import { FlowModule } from './flow/flow.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: getMongooseConfig,
      inject: [ConfigService],
    }),
    FlowModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
