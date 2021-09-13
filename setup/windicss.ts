import { defineWindiSetup } from '@slidev/types'
import colors from 'windicss/colors'

// extending the builtin windicss configurations
export default defineWindiSetup(() => ({
  theme: {
    colors: {
      primary: "#003865",
      secondary: '#FAFAFA',
      ...colors,
    },
  },
}))
