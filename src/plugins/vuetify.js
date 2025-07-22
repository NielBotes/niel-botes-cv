// src/plugins/vuetify.js
import 'vuetify/styles' // Required for Vuetify 3 styles
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  theme: { // <-- ADD THIS THEME CONFIGURATION
    themes: {
      light: { // You can define 'dark' theme as well if you want a dark mode
        colors: {
          primary: 'linear-gradient(to right, #8E1600, #000000ff)', // A vibrant red
          secondary: '#212121', // A dark black/grey
          accent: '#FFC107', // An accent color, e.g., amber
          // You can add more colors here if needed, like success, info, warning, error
        },
      },
      // You can also define a dark theme if your app has a dark mode toggle
      // dark: {
      //   colors: {
      //     primary: '#FFEBEE', // A lighter red for dark mode
      //     secondary: '#424242', // A slightly lighter black
      //     accent: '#FFD700', // A gold accent
      //   },
      // },
    },
  },
})