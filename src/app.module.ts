import { Module } from '@nestjs/common';
import { usersController } from './users.controller';
import { usersAlbum } from './users.album';

@Module({

  controllers: [usersController,usersAlbum],
  
})
export class AppModule {}
