import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService {
  private profile = {
    general: {
      name: 'Omar R. Beschikbaar',
      title: 'Senior Doctor',
      email: 'omar@example.com',
      username: 'omar',
      country: 'Netherlands',
      phone: '+31 123456789',
      language: 'English',
      appearance: 'Light',
    },
    location: {
      home: 'Amsterdam',
      work: 'City Hospital',
    },
    notifications: {
      reminders: true,
      newsandupdates: true,
      sounds: true,
      badges: true,
      showOnLock: true,
    },
  };

  getProfile() {
    return this.profile;
  }

  updateProfile(updatedProfile: any) {
    this.profile = { ...this.profile, ...updatedProfile };
    return this.profile;
  }
}
