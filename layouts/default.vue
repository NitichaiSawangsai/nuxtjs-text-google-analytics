<template>
  <v-app dark>

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        },

        {
          icon: 'mdi-chart-bubble',
          title: 'contact',
          to: '/menu/contact'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'contact ID 1',
          to: '/menu/contact/1'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'contact ID 2',
          to: '/menu/contact/2'
        },

        {
          icon: 'mdi-chart-bubble',
          title: 'internal-info',
          to: '/menu/internal-info'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'internal-info ID 1',
          to: '/menu/internal-info/1'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'internal-info ID 2',
          to: '/menu/internal-info/2'
        },

        {
          icon: 'mdi-chart-bubble',
          title: 'product',
          to: '/menu/product'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'product ID 1',
          to: '/menu/product/1'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'product ID 2',
          to: '/menu/product/2'
        },

        {
          icon: 'mdi-chart-bubble',
          title: 'promotion-and-loyalty',
          to: '/menu/promotion-and-loyalty'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'promotion-and-loyalty ID 1',
          to: '/menu/promotion-and-loyalty/1'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'promotion-and-loyalty ID 2',
          to: '/menu/promotion-and-loyalty/2'
        },

        {
          icon: 'mdi-chart-bubble',
          title: 'store',
          to: '/menu/store'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'store ID 1',
          to: '/menu/store/1'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'store ID 2',
          to: '/menu/store/2'
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
