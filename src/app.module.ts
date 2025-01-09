import { Module } from '@nestjs/common';
import { usersController } from './users.controller';
import { usersAlbum } from './users.album';
import { usersRedirect } from './users.redirect';
import { usersData } from './users.data';

@Module({

  controllers: [usersController,usersAlbum,usersRedirect,usersData],
  
})
export class AppModule {}
