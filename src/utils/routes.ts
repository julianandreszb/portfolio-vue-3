import type { IRoute } from '@/utils/typeScriptDefinitions/IRoute'

const routes: Array<IRoute> = [
  { id: 'nav-item-about', label: 'About Me', hash: '#about' },
  { id: 'nav-item-skills', label: 'Skills', hash: '#skills' },
  { id: 'nav-item-portfolio', label: 'Portfolio', hash: '#portfolio' },
  { id: 'nav-item-career', label: 'Career', hash: '#career' },
  { id: 'nav-item-contact', label: 'Contact', hash: '#contact' }
]

export { routes }
