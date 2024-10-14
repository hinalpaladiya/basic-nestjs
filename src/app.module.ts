import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
       type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'hinal',
      database: 'basic-nestjs',
      // entities: [],
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // this automatically picks all entity files
      synchronize: true,

    }),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}