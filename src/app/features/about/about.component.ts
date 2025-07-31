import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  position: string;
  github: string;
  githubUrl: string;
  birthday: Date;
  image: string;
  description: string;
  favShow: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  getZodiacSign(date: Date): { sign: string; emoji: string } {
    const month = date.getMonth();
    const day = date.getDate();

    if ((month === 2 && day >= 21) || (month === 3 && day <= 19)) return { sign: 'Aries', emoji: '🐏' };
    if ((month === 3 && day >= 20) || (month === 4 && day <= 20)) return { sign: 'Taurus', emoji: '🐂' };
    if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) return { sign: 'Gemini', emoji: '👯' };
    if ((month === 5 && day >= 21) || (month === 6 && day <= 22)) return { sign: 'Cancer', emoji: '🦀' };
    if ((month === 6 && day >= 23) || (month === 7 && day <= 22)) return { sign: 'Leo', emoji: '🦁' };
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return { sign: 'Virgo', emoji: '👩' };
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return { sign: 'Libra', emoji: '⚖️' };
    if ((month === 9 && day >= 23) || (month === 10 && day <= 21)) return { sign: 'Scorpio', emoji: '🦂' };
    if ((month === 10 && day >= 22) || (month === 11 && day <= 21)) return { sign: 'Sagittarius', emoji: '🏹' };
    if ((month === 11 && day >= 22) || (month === 0 && day <= 19)) return { sign: 'Capricorn', emoji: '🐐' };
    if ((month === 0 && day >= 20) || (month === 1 && day <= 18)) return { sign: 'Aquarius', emoji: '🌊' };
    return { sign: 'Pisces', emoji: '🐟' }; // February 19 - March 20
  }

  teamMembers: TeamMember[] = [
    {
      name: 'Mariela',
      position: 'Full-time Captain',
      github: '@mgonzalesdev',
      githubUrl: 'https://github.com/mgonzalesdev',
      birthday: new Date(2000, 0, 15), // January 15
      image: 'assets/team/mariela.jpg',
      description: 'TBC',
      favShow: 'Juego de Tronos'
    },
    {
      name: 'Arnau',
      position: 'Afterhours DJ',
      github: '@Arnau-66',
      githubUrl: 'https://github.com/Arnau-66',
      birthday: new Date(2000, 1, 1), // February 1
      image: 'assets/team/arnau.jpg',
      description: 'TBC',
      favShow: 'Rick & Morty'
    },
    {
      name: 'Giu',
      position: 'Filmmaker',
      github: '@JungleGiu',
      githubUrl: 'https://github.com/JungleGiu',
      birthday: new Date(2000, 9, 2), // October 2
      image: 'assets/team/giu.jpg',
      description: 'TBC',
      favShow: ''
    },
    {
      name: 'Ot',
      position: 'Branch Manager',
      github: '@otrocadev',
      githubUrl: 'https://github.com/otrocadev',
      birthday: new Date(2000, 5, 18), // June 18
      image: 'assets/team/ot.jpg',
      description: 'TBC',
      favShow: 'Picky Blinders'
    },
    {
      name: 'Víctor',
      position: 'Rifazos CEO',
      github: '',
      githubUrl: '',
      birthday: new Date(2000, 2, 8), // March 8
      image: 'assets/team/victor.jpg',
      description: 'TBC',
      favShow: 'Big Bang Theory'
    },
    {
      name: 'Ana',
      position: 'Coffee Specialist',
      github: '@zanlamar',
      githubUrl: 'https://github.com/zanlamar',
      birthday: new Date(2000, 2, 21), // March 21
      image: 'assets/team/ana.jpg',
      description: 'TBC',
      favShow: 'Love, Death & Robots'
    }
  ];
}
