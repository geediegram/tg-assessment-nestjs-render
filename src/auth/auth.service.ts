import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  private users = [
    {
      id: 1,
      username: 'admin',
      password: '123456',
    },
  ];

  login(username: string, password: string) {
    const user = this.users.find(
      (u) => u.username === username && u.password === password,
    );

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return {
      token: 'mock-jwt-token-12345',
      user: {
        id: user.id,
        username: user.username,
      },
    };
  }
}
