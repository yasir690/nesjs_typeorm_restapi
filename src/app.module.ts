

// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { User } from './entity/user.entity';
// import { Posts } from './entity/post.entity';
// import { UserService } from './users/user.service';
// import { PostService } from './post/post.service';
// import { UserController } from './users/user.controller';
// import { PostController } from './post/post.controller';
// import { userModule } from './users/user.module';
// import { postModule } from './post/post.module';


// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       isGlobal: true,
//       envFilePath: '.env',
//     }),
//     TypeOrmModule.forRootAsync({
//       imports: [ConfigModule],
//       useFactory: (configService: ConfigService) => {
//         return {
//           type: 'postgres',
//           host: configService.get('HOST'),
//           port: +configService.get<number>('DB_PORT'),
//           username: configService.get('Name'),
//           password: configService.get('PASSWORD'),
//           database: configService.get('DBNAME'),
//           entities: [User, Posts],
//           synchronize: configService.get<boolean>('DB_SYNC'),
//         };
//       },
//       inject: [ConfigService],
      
//     }),
//     userModule,
//     postModule
//   ],
//   providers:[UserService,PostService],
//   controllers:[UserController,PostController]
// })
// export class AppModule {}


import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './entity/user.entity';
import { Posts } from './entity/post.entity';
import { UserService } from './users/user.service';
import { PostService } from './post/post.service';
import { UserController } from './users/user.controller';
import { PostController } from './post/post.controller';
import { userModule,  } from './users/user.module';
import { postModule, } from './post/post.module';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get('HOST'),
          port: configService.get<number>('DB_PORT'),
          username: configService.get('NAME'),
          password: configService.get('PASSWORD'),
          database: configService.get('DBNAME'),
          entities: [User, Posts],
          synchronize: configService.get<boolean>('DB_SYNC'),
        };
      },
      inject: [ConfigService],
    }),
    userModule,
    postModule,
  ],
  providers: [AppService,UserService, PostService],
  controllers: [AppController, UserController, PostController], // Include AppController here
})
export class AppModule {}
