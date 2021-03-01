import en from './en.json'
import fr from './fr.json'

interface Messages {
  [key: string]: string
}

interface MessagesCollection {
  [locale: string]: Messages
}

export const messages: MessagesCollection = {
  en,
  fr,
}
