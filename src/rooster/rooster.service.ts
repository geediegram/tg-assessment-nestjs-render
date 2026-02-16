import { Injectable } from '@nestjs/common';

@Injectable()
export class RoosterService {

    private rooster = [
        { id: 1, title: 'Outpatient Shift', name: "Omar R. Beschikbaar", startTime: '18:00', endTime: '20:00' },
        { id: 2, title: 'Consult', name: "Omar R. Beschikbaar", startTime: '12:00', endTime: '17:00' },
        { id: 3, title: 'Check In', name: "Omar R. Beschikbaar", startTime: '13:00', endTime: '14:30' },
        { id: 4, title: 'Rounds', name: "Omar R. Beschikbaar", startTime: '12:00', endTime: '20:00' },
        { id: 5, title: 'Surgery', name: "Omar R. Beschikbaar", startTime: '12:30', endTime: '19:00' },
        { id: 6, title: 'Check In', name: "Omar R. Beschikbaar", startTime: '12:00', endTime: '20:00' },
        { id: 7, title: 'Consult', name: "Omar R. Beschikbaar", startTime: '12:00', endTime: '20:00' },
        { id: 8, title: 'Team Briefing', name: "Omar R. Beschikbaar", startTime: '12:00', endTime: '20:00' },
        { id: 9, title: 'Consult', name: "Omar R. Beschikbaar", startTime: '14:00', endTime: '19:30' },
        { id: 10, title: 'Consult', name: "Omar R. Beschikbaar", startTime: '12:00', endTime: '20:00' },
      ];      

    findAll() {
        return this.rooster;
    }

    findOne(id: number) {
        return this.rooster.find(r => r.id === id);
    }

    create(rooster: { title: string; name: string, startTime: string, endTime: string }) {
        const newRoster = {
            id: this.rooster.length + 1,
            ...rooster,
        };

        this.rooster.push(newRoster);
        return newRoster;
    }
}
