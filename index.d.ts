// Hack for warning message:
//  - Vue: Cannot find module@/components/{component}.vue or its corresponding type declarations.
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
