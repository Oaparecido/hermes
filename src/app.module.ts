import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { AddressModule } from './address/address.module';

@Module({
  imports: [
    UsersModule,
    AddressModule,
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
