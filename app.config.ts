export default {
  routes: [
    { id: 'nav-item-Home', label: 'Home', hash: '#home' },
    { id: 'nav-item-about', label: 'About Me', hash: '#about' },
    //{ id: 'nav-item-skills', label: 'Skills', hash: '#skills' },
    { id: 'nav-item-portfolio', label: 'Portfolio', hash: '#portfolio' },
    { id: 'nav-item-career', label: 'Career', hash: '#career' },
    { id: 'nav-item-contact', label: 'Contact', hash: '#contact' }
  ],
  sections: {
    summary: {
      greeting: {
        text: 'Hi, I’m',
        name: 'Julian'
      },
      occupation: {
        text: 'Full-stack Web Developer'
      },
      photo: {
        src: 'https://media.licdn.com/dms/image/D4D03AQEnI7r7NcJCAw/profile-displayphoto-shrink_800_800/0/1692085835922?e=1705536000&v=beta&t=mjZoJm8JlkIxIBuLdC2ARlaEpGjEvt5ivi74WnRwUqY'
      },
      description: {
        text: "I'm a full-stack web developer making great stuff happen since 2013. Currently building awesome code and apps at Life-File"
      }
    },
    aboutMe: {
      description: {
        text: 'I’ve been coding for more than 10 years. I’ve created everything from regular websites, to complex webs and mobile applications. I have an extensive experience in back-end using Node.js and PHP.  I’m growing as front-end developer using Vue 2.x & 3.x'
      }
    },
    skills: {
      items: [
        {
          id: 'test_0',
          label: 'TEST #0',
          currentRating: 0,
          maxRating: 5
        },
        {
          id: 'test_1',
          label: 'TEST #1',
          currentRating: 1,
          maxRating: 5
        },
        {
          id: 'test_2',
          label: 'TEST #2',
          currentRating: 2,
          maxRating: 5
        },
        {
          id: 'test_3',
          label: 'TEST #3',
          currentRating: 3,
          maxRating: 5
        },
        {
          id: 'test_4',
          label: 'TEST #4',
          currentRating: 4,
          maxRating: 5
        },
        {
          id: 'test_5',
          label: 'TEST #5',
          currentRating: 5,
          maxRating: 5
        }
      ]
    },
    portfolio: {
      tags: [
        {
          id: 'javascript',
          label: 'JavaScript',
          isActive: false
        },
        {
          id: 'html',
          label: 'HTML',
          isActive: false
        },
        {
          id: 'github',
          label: 'Github',
          isActive: false
        },
        {
          id: 'php',
          label: 'PHP',
          isActive: false
        },
        {
          id: 'vue3',
          label: 'Vue3',
          isActive: false
        }
      ],
      projects: [
        {
          isActive: true,
          id: 'custom-id-1',
          title: 'NADA Project',
          description:
            'Back-end Developer: Develop robust server-side applications and APIs to support our web and mobile applications.',
          tags: [
            {
              id: 'javascript',
              label: 'JavaScript',
              isActive: false
            },
            {
              id: 'html',
              label: 'HTML',
              isActive: false
            }
          ],
          linkIcons: [
            {
              id: 'git',
              label: '',
              style: {
                'background-color': 'transparent'
              },
              icon: {
                class: 'bi-github'
              },
              isActive: false,
              title: 'Open Git Repository'
            },
            {
              id: 'demo',
              label: '',
              style: {
                'background-color': 'transparent'
              },
              icon: {
                class: 'bi-box-arrow-up-right'
              },
              isActive: false,
              title: 'Open Demo'
            }
          ]
        },
        {
          isActive: true,
          id: 'custom-id-2',
          title: 'Binary To Decimal',
          description:
            'Back-end Developer: Develop robust server-side applications and APIs to support our web and mobile applications.',
          tags: [
            {
              id: 'php',
              label: 'PHP',
              isActive: false
            },
            {
              id: 'vue3',
              label: 'Vue3',
              isActive: false
            }
          ],
          linkIcons: [
            {
              id: 'git',
              label: '',
              style: {
                'background-color': 'transparent'
              },
              icon: {
                class: 'bi-github'
              },
              isActive: false,
              title: 'Open Git Repository'
            },
            {
              id: 'demo',
              label: '',
              style: {
                'background-color': 'transparent'
              },
              icon: {
                class: 'bi-box-arrow-up-right'
              },
              isActive: false,
              title: 'Open Demo'
            }
          ]
        }
      ]
    },
    career: [
      {
        id: 'lifefile',
        title: 'Full-Stack Web Developer',
        company: '@Lifefile',
        startDate: '2013',
        endDate: 'Present',
        description:
          'Back-end Developer: Develop robust server-side applications and APIs to support our web and mobile applications. Optimize database performance and ensure data security',
        tags: ['PHP', 'Laravel', 'Vue']
      },
      {
        id: 'lifefile',
        title: 'Freelance - Backend Engineer',
        company: '@OnlyOne',
        startDate: '2015',
        endDate: '2018',
        description:
          'Front-end Developer: Create responsive and visually appealing user interfaces for our web applications, ensuring seamless user experiences across various devices and browsers.',
        tags: ['HTML', 'CSS', 'JavaScript']
      }
    ],
    contact: {
      title: 'Contact Me!',
      email: 'contact@julianzb.com',
      socialMedia: [
        {
          id: 'linkedin',
          url: 'https://www.linkedin.com/in/jzapatab/',
          label: 'JZapataB',
          icon: {
            class: 'bi-linkedin'
          }
        },
        {
          id: 'github',
          url: 'https://github.com/julianandreszb',
          label: 'JulianAndresZB',
          icon: {
            class: 'bi-github'
          }
        }
      ],
      copyright: 'JulianZB.com'
    }
  }
}
