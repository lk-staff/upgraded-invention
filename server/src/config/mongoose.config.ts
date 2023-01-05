import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export const getMongooseConfig = async (
  configService: ConfigService,
): Promise<MongooseModuleOptions> => ({
  uri: configService.get<string>('DATABASE_URI'),
});
