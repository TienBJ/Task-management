import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({ secret: 'secretKey', signOptions: { expiresIn: '1d'} }),
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
