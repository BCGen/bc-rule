// please search and install types in https://microsoft.github.io/TypeSearch/

// npm install --D @types/swiper
import swiper from 'swiper'
import popper from 'popper.js'
import { __ } from 'lodash'
import { VueConstructor } from 'vue'
import { AxiosInstance } from 'axios'

declare global {
  const _: __
  const axios: AxiosInstance
  const Popper: typeof popper
  const Swiper: typeof swiper
  const Vue: VueConstructor

  interface Window {
    [key: string]: any
  }

  interface CSRF_TOKEN_TYPE extends Element {
    content: String
  }
}
