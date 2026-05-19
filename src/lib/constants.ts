export const CHURCH_NAME = 'IBCL'
export const CHURCH_FULL_NAME = 'Igreja Batista Central Leste'
export const CHURCH_SLOGAN = 'Muito mais que amigos, uma família que caminha junto na Palavra.'
export const CHURCH_TAGLINE = 'Um lugar onde você é esperado, acolhido e desafiado a crescer.'

export const CHURCH_ADDRESS = 'Av. Cosme Ferreira, 2690, Aleixo, Manaus/AM'
export const CHURCH_ADDRESS_SHORT = 'Av. Cosme Ferreira, 2690, Aleixo, Manaus/AM'
export const CHURCH_MAPS_URL =
  'https://maps.app.goo.gl/vA2B2puRC3vDoiwY7'
export const CHURCH_MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.917823290853!2d-59.9763!3d-3.0870!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1a4e7a34f0ab%3A0x1234567890abcdef!2sAv.%20Cosme%20Ferreira%2C%202690%20-%20Aleixo%2C%20Manaus%20-%20AM!5e0!3m2!1spt-BR!2sbr!4v1234567890'

export const WHATSAPP_NUMBER = '5592992082294'
export const WHATSAPP_DISPLAY = '(92) 99208-2294'

function buildWhatsAppUrl(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export const WHATSAPP_URL = buildWhatsAppUrl('Vim do site da IBCL e gostaria de saber como participar.')
export const WHATSAPP_URL_HERO = buildWhatsAppUrl('Vim do site da IBCL e gostaria de conhecer mais sobre a comunidade.')
export const WHATSAPP_URL_PRIMEIRA_VISITA = buildWhatsAppUrl('Vim do site da IBCL e gostaria de saber mais sobre a primeira visita.')
export const WHATSAPP_URL_MINISTERIOS = buildWhatsAppUrl('Vim do site da IBCL e gostaria de saber como participar dos ministérios.')
export const WHATSAPP_URL_GRUPOS_ORACAO = buildWhatsAppUrl('Vim do site da IBCL e gostaria de participar de um grupo de oração.')
export const WHATSAPP_URL_CONTATO = buildWhatsAppUrl('Vim do site da IBCL e gostaria de entrar em contato com a secretaria.')

export const INSTAGRAM_IBCL = 'https://www.instagram.com/ibcentralleste'
export const INSTAGRAM_KIDS = 'https://www.instagram.com/ibclkids'
export const INSTAGRAM_TEENS = 'https://www.instagram.com/ibclteens'
export const INSTAGRAM_JOVEM = 'https://www.instagram.com/ibcljovem'
export const YOUTUBE_URL = 'https://www.youtube.com/videosibcl'

export const CULTO_HORARIO = 'Domingos às 18h'
export const CULTO_DURACAO = 'Duração: ~1h30'

export const SECRETARIA_HORARIO = 'Segunda a Sexta, 9h às 17h'

export const NAV_LINKS = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/ministerios', label: 'Ministérios' },
  { href: '/mensagens', label: 'Mensagens' },
  { href: '/devocionais', label: 'Devocionais' },
  { href: '/contato', label: 'Contato' },
]
