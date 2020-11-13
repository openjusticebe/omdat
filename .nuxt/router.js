import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _80f7f2e4 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _6b88dc85 = () => interopDefault(import('../pages/graphql-test.vue' /* webpackChunkName: "pages/graphql-test" */))
const _41883d5a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _9c6b78f2 = () => interopDefault(import('../pages/_countries/index.vue' /* webpackChunkName: "pages/_countries/index" */))
const _6647b842 = () => interopDefault(import('../pages/_countries/_courts/index.vue' /* webpackChunkName: "pages/_countries/_courts/index" */))
const _0244ca1d = () => interopDefault(import('../pages/_countries/_courts/_years/index.vue' /* webpackChunkName: "pages/_countries/_courts/_years/index" */))
const _45925875 = () => interopDefault(import('../pages/_countries/_courts/_years/_documents/_ref.vue' /* webpackChunkName: "pages/_countries/_courts/_years/_documents/_ref" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _80f7f2e4,
    name: "about"
  }, {
    path: "/graphql-test",
    component: _6b88dc85,
    name: "graphql-test"
  }, {
    path: "/",
    component: _41883d5a,
    name: "index"
  }, {
    path: "/:countries",
    component: _9c6b78f2,
    name: "countries"
  }, {
    path: "/:countries/:courts",
    component: _6647b842,
    name: "countries-courts"
  }, {
    path: "/:countries/:courts/:years",
    component: _0244ca1d,
    name: "countries-courts-years"
  }, {
    path: "/:countries/:courts/:years/:documents/:ref?",
    component: _45925875,
    name: "countries-courts-years-documents-ref"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
