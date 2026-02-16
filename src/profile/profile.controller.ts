import { Controller, Get, Put, Body } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  getProfile() {
    return {
      success: true,
      data: this.profileService.getProfile(),
    };
  }

  @Put()
  updateProfile(@Body() body: any) {
    return {
      success: true,
      data: this.profileService.updateProfile(body),
    };
  }
}
