import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ApiModule } from '../generated-sources/clients/petstore/api.module';

@Module({
  imports: [ApiModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule { }
