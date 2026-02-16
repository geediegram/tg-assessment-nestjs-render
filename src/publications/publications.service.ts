import { Injectable } from '@nestjs/common';

@Injectable()
export class PublicationsService {
  private publications = [
    {
      id: 1,
      title: 'Vaccine hesitancy trends',
      description: 'How do you build stroke risk tools that are both clinically powerful and user-friendly for everyday care?',
      tags: ['Covid', 'Vaccine'],
      date: '20 Jan 2022',
      publisherName: 'Elijah Oyindamola',
      image: 'https://via.placeholder.com/300',
    },
    {
        id: 2,
        title: 'AI in Vaccine',
        description: 'How does AI contribute to vaccine development and distribution? Exploring the transformative role of artificial intelligence in accelerating vaccine research.',
        tags: ['AI', 'Vaccine'],
        date: '20 Feb 2024',
        publisherName: 'Elijah Oyindamola',
        image: 'https://via.placeholder.com/300',
      },
      {
        id: 3,
        title: 'Preventing Vaccine Misinformation',
        description: 'What strategies can be employed to combat vaccine misinformation and promote accurate information about vaccines? How effective are the current approaches?',
        tags: ['News', 'Vaccine'],
        date: '13 Nov 2025',
        publisherName: 'Elijah Oyindamola',
        image: 'https://via.placeholder.com/300',
      },
  ];

  findAll() {
    return this.publications;
  }

  findOne(id: number) {
    return this.publications.find((p) => p.id === id);
  }

  create(publication: {
    title: string;
    description: string;
    tags: string[];
    date: string;
    publisherName: string;
    image: string;
  }) {
    const newPublication = {
      id: this.publications.length + 1,
      ...publication,
    };

    this.publications.push(newPublication);
    return newPublication;
  }
}
