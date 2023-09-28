import type { IRoute } from '@/utils/tsinterfaces/IRoute'

const routes: Array<IRoute> = [
  { id: 'nav-item-about', label: 'About Me', path: '/about' },
  { id: 'nav-item-skills', label: 'Skills', path: '/skills' },
  { id: 'nav-item-portfolio', label: 'Portfolio', path: '/portfolio' },
  { id: 'nav-item-career', label: 'Career', path: '/career' },
  { id: 'nav-item-contact', label: 'Contact', path: '/contact' }
]

export { routes }
