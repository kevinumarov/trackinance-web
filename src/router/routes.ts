const setTitle = (title: string) => {
  return title ? `${title} | Trackinance - AI Powered Financial Management` : 'Trackinance Vue | AI Powered Financial Management'
}

const authRoutes = [
  {
    path: '/auth/sign-in',
    name: 'auth.sign-in',
    meta: {
      title: setTitle('Sign In')
    },
    component: () => import('@/views/auth/sign-in.vue')
  },
  {
    path: '/auth/sign-in-2',
    name: 'auth.sign-in-2',
    meta: {
      title: setTitle('Sign In 2')
    },
    component: () => import('@/views/auth/sign-in-2.vue')
  },
  {
    path: '/auth/sign-up',
    name: 'auth.sign-up',
    meta: {
      title: setTitle('Sign Up')
    },
    component: () => import('@/views/auth/sign-up.vue')
  },
  {
    path: '/auth/sign-up-2',
    name: 'auth.sign-up-2',
    meta: {
      title: setTitle('Sign Up 2')
    },
    component: () => import('@/views/auth/sign-up-2.vue')
  },
  {
    path: '/auth/reset-password',
    name: 'auth.reset-password',
    meta: {
      title: setTitle('Reset Password')
    },
    component: () => import('@/views/auth/reset-password.vue')
  },
  {
    path: '/auth/reset-password-2',
    name: 'auth.reset-password-2',
    meta: {
      title: setTitle('Reset Password 2')
    },
    component: () => import('@/views/auth/reset-password-2.vue')
  },
  {
    path: '/auth/lock-screen',
    name: 'auth.lock-screen',
    meta: {
      title: setTitle('Lock Screen')
    },
    component: () => import('@/views/auth/lock-screen.vue')
  },
  {
    path: '/auth/lock-screen-2',
    name: 'auth.lock-screen-2',
    meta: {
      title: setTitle('Lock Screen 2')
    },
    component: () => import('@/views/auth/lock-screen-2.vue')
  }
]

const errorRoutes = [
  {
    path: '/404',
    name: 'error.404',
    meta: {
      title: setTitle('Error 404')
    },
    component: () => import('@/views/pages/error-404.vue')
  },
  {
    path: '/404-alt',
    name: 'error.404-alt',
    meta: {
      title: setTitle('Error 404 Alt')
    },
    component: () => import('@/views/pages/error-404-alt.vue')
  },
  {
    path: '/404-2',
    name: 'error.404-2',
    meta: {
      title: setTitle('Error 404 2')
    },
    component: () => import('@/views/pages/error-404-2.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: '404'
  }
]

const dashboardRoutes = [
  {
    path: '/',
    name: 'dashboards.analytics',
    meta: {
      title: setTitle('Analytics'),
      authRequired: true
    },
    component: () => import('@/views/dashboards/analytics/index.vue')
  },
  {
    path: '/dashboards/finance',
    name: 'dashboards.finance',
    meta: {
      title: setTitle('Finance'),
      authRequired: true
    },
    component: () => import('@/views/dashboards/finance/index.vue')
  },
  {
    path: '/dashboards/sales',
    name: 'dashboards.sales',
    meta: {
      title: setTitle('Sales'),
      authRequired: true
    },
    component: () => import('@/views/dashboards/sales/index.vue')
  }
]

const ecommerceRoutes = [
  {
    path: '/ecommerce',
    children: [
      {
        path: '/products',
        name: 'ecommerce.products',
        meta: {
          title: setTitle('Products List'),
          authRequired: true
        },
        component: () => import('@/views/ecommerce/products/index.vue')
      },
      {
        path: '/products/:id',
        name: 'ecommerce.products.details',
        params: { id: '1001' },
        meta: {
          title: setTitle('Products Details'),
          authRequired: true
        },
        component: () => import('@/views/ecommerce/products/[id]/index.vue')
      },
      {
        path: '/products/create',
        name: 'ecommerce.products.create',
        meta: {
          title: setTitle('Create Products'),
          authRequired: true
        },
        component: () => import('@/views/ecommerce/products/create/index.vue')
      },
      {
        path: '/customers',
        name: 'ecommerce.customers',
        meta: {
          title: setTitle('Customers List'),
          authRequired: true
        },
        component: () => import('@/views/ecommerce/customers/index.vue')
      },
      {
        path: '/sellers',
        name: 'ecommerce.sellers',
        meta: {
          title: setTitle('Sellers List'),
          authRequired: true
        },
        component: () => import('@/views/ecommerce/sellers/index.vue')
      },
      {
        path: '/orders',
        name: 'ecommerce.orders',
        meta: {
          title: setTitle('Orders List'),
          authRequired: true
        },
        component: () => import('@/views/ecommerce/orders/index.vue')
      },
      {
        path: '/orders/:id',
        name: 'ecommerce.orders.details',
        params: { id: '10001' },
        meta: {
          title: setTitle('Orders Details'),
          authRequired: true
        },
        component: () => import('@/views/ecommerce/orders/[id]/index.vue')
      },
      {
        path: '/inventory',
        name: 'ecommerce.inventory',
        meta: {
          title: setTitle('Inventory'),
          authRequired: true
        },
        component: () => import('@/views/ecommerce/inventory/index.vue')
      }
    ]
  }
]

const appRoutes = [
  {
    path: '/apps/chat',
    name: 'apps.chat',
    meta: {
      title: setTitle('Chat'),
      authRequired: true
    },
    component: () => import('@/views/apps/chat/index.vue')
  },
  {
    path: '/apps/email',
    name: 'apps.email',
    meta: {
      title: setTitle('Email'),
      authRequired: true
    },
    component: () => import('@/views/apps/email/index.vue')
  },
  {
    path: '/apps/todo',
    name: 'apps.todo',
    meta: {
      title: setTitle('Todo'),
      authRequired: true
    },
    component: () => import('@/views/apps/todo/index.vue')
  },
  {
    path: '/apps/social',
    name: 'apps.social',
    meta: {
      title: setTitle('Social'),
      authRequired: true
    },
    component: () => import('@/views/apps/social/index.vue')
  },
  {
    path: '/apps/contacts',
    name: 'apps.contacts',
    meta: {
      title: setTitle('Contacts'),
      authRequired: true
    },
    component: () => import('@/views/apps/contacts/index.vue')
  },
  {
    path: '/calendar/schedule',
    name: 'calendar.schedule',
    meta: {
      title: setTitle('Schedule'),
      authRequired: true
    },
    component: () => import('@/views/calendar/schedule/index.vue')
  },
  {
    path: '/calendar/integration',
    name: 'calendar.integration',
    meta: {
      title: setTitle('Integration'),
      authRequired: true
    },
    component: () => import('@/views/calendar/integration/index.vue')
  },
  {
    path: '/calendar/help',
    name: 'calendar.help',
    meta: {
      title: setTitle('Help'),
      authRequired: true
    },
    component: () => import('@/views/calendar/help/index.vue')
  },
  {
    path: '/invoice',
    name: 'invoice',
    meta: {
      title: setTitle('Invoice'),
      authRequired: true
    },
    component: () => import('@/views/invoice/index.vue')
  },
  {
    path: '/invoice/:id',
    name: 'invoice.details',
    params: { id: 'RB6985' },
    meta: {
      title: setTitle('Invoice Details'),
      authRequired: true
    },
    component: () => import('@/views/invoice/[id]/index.vue')
  }
]

const pagesRoutes = [
  {
    path: '/pages/welcome',
    name: 'pages.welcome',
    meta: {
      title: setTitle('Welcome'),
      authRequired: true
    },
    component: () => import('@/views/pages/welcome.vue')
  },
  {
    path: '/pages/faqs',
    name: 'pages.faqs',
    meta: {
      title: setTitle('FAQs'),
      authRequired: true
    },
    component: () => import('@/views/pages/faqs/index.vue')
  },
  {
    path: '/pages/profile',
    name: 'pages.profile',
    meta: {
      title: setTitle('Profile'),
      authRequired: true
    },
    component: () => import('@/views/pages/profile/index.vue')
  },
  {
    path: '/pages/coming-soon',
    name: 'pages.coming-soon',
    meta: {
      title: setTitle('Coming Soon'),
      authRequired: true
    },
    component: () => import('@/views/pages/coming-soon.vue')
  },
  {
    path: '/pages/contact-us',
    name: 'pages.contact-us',
    meta: {
      title: setTitle('Contact Us'),
      authRequired: true
    },
    component: () => import('@/views/pages/contact-us/index.vue')
  },
  {
    path: '/pages/about-us',
    name: 'pages.about-us',
    meta: {
      title: setTitle('About Us'),
      authRequired: true
    },
    component: () => import('@/views/pages/about-us/index.vue')
  },
  {
    path: '/pages/our-team',
    name: 'pages.our-team',
    meta: {
      title: setTitle('Our Team'),
      authRequired: true
    },
    component: () => import('@/views/pages/our-team/index.vue')
  },
  {
    path: '/pages/timeline',
    name: 'pages.timeline',
    meta: {
      title: setTitle('Timeline'),
      authRequired: true
    },
    component: () => import('@/views/pages/timeline/index.vue')
  },
  {
    path: '/pages/pricing',
    name: 'pages.pricing',
    meta: {
      title: setTitle('Pricing'),
      authRequired: true
    },
    component: () => import('@/views/pages/pricing/index.vue')
  },
  {
    path: '/pages/maintenance',
    name: 'pages.maintenance',
    meta: {
      title: setTitle('Maintenance'),
      authRequired: true
    },
    component: () => import('@/views/pages/maintenance.vue')
  },
  {
    path: '/widgets',
    name: 'widgets',
    meta: {
      title: setTitle('Widgets'),
      authRequired: true
    },
    component: () => import('@/views/widgets/index.vue')
  }
]

const uiRoutes = [
  {
    path: '/ui/accordions',
    name: 'ui.accordions',
    meta: {
      title: setTitle('Accordions'),
      authRequired: true
    },
    component: () => import('@/views/ui/Accordions.vue')
  },
  {
    path: '/ui/alerts',
    name: 'ui.alerts',
    meta: {
      title: setTitle('Alerts'),
      authRequired: true
    },
    component: () => import('@/views/ui/Alerts.vue')
  },
  {
    path: '/ui/avatars',
    name: 'ui.avatars',
    meta: {
      title: setTitle('Avatars'),
      authRequired: true
    },
    component: () => import('@/views/ui/Avatars.vue')
  },
  {
    path: '/ui/badges',
    name: 'ui.badges',
    meta: {
      title: setTitle('Badges'),
      authRequired: true
    },
    component: () => import('@/views/ui/Badges.vue')
  },
  {
    path: '/ui/breadcrumb',
    name: 'ui.breadcrumb',
    meta: {
      title: setTitle('Breadcrumb'),
      authRequired: true
    },
    component: () => import('@/views/ui/Breadcrumb.vue')
  },
  {
    path: '/ui/buttons',
    name: 'ui.buttons',
    meta: {
      title: setTitle('Buttons'),
      authRequired: true
    },
    component: () => import('@/views/ui/Buttons.vue')
  },
  {
    path: '/ui/cards',
    name: 'ui.cards',
    meta: {
      title: setTitle('Cards'),
      authRequired: true
    },
    component: () => import('@/views/ui/Cards.vue')
  },
  {
    path: '/ui/carousel',
    name: 'ui.carousel',
    meta: {
      title: setTitle('Carousel'),
      authRequired: true
    },
    component: () => import('@/views/ui/Carousel.vue')
  },
  {
    path: '/ui/collapse',
    name: 'ui.collapse',
    meta: {
      title: setTitle('Collapse'),
      authRequired: true
    },
    component: () => import('@/views/ui/Collapse.vue')
  },
  {
    path: '/ui/dropdowns',
    name: 'ui.dropdowns',
    meta: {
      title: setTitle('Dropdowns'),
      authRequired: true
    },
    component: () => import('@/views/ui/Dropdowns.vue')
  },
  {
    path: '/ui/list-group',
    name: 'ui.list-group',
    meta: {
      title: setTitle('ListGroup'),
      authRequired: true
    },
    component: () => import('@/views/ui/ListGroup.vue')
  },
  {
    path: '/ui/modals',
    name: 'ui.modals',
    meta: {
      title: setTitle('Modals'),
      authRequired: true
    },
    component: () => import('@/views/ui/Modals.vue')
  },
  {
    path: '/ui/offcanvas',
    name: 'ui.offcanvas',
    meta: {
      title: setTitle('Offcanvas'),
      authRequired: true
    },
    component: () => import('@/views/ui/Offcanvas.vue')
  },
  {
    path: '/ui/pagination',
    name: 'ui.pagination',
    meta: {
      title: setTitle('Pagination'),
      authRequired: true
    },
    component: () => import('@/views/ui/Pagination.vue')
  },
  {
    path: '/ui/placeholders',
    name: 'ui.placeholders',
    meta: {
      title: setTitle('Placeholders'),
      authRequired: true
    },
    component: () => import('@/views/ui/Placeholders.vue')
  },
  {
    path: '/ui/popovers',
    name: 'ui.popovers',
    meta: {
      title: setTitle('Popovers'),
      authRequired: true
    },
    component: () => import('@/views/ui/Popovers.vue')
  },
  {
    path: '/ui/progress',
    name: 'ui.progress',
    meta: {
      title: setTitle('Progress'),
      authRequired: true
    },
    component: () => import('@/views/ui/Progress.vue')
  },
  {
    path: '/ui/scrollspy',
    name: 'ui.scrollspy',
    meta: {
      title: setTitle('Scrollspy'),
      authRequired: true
    },
    component: () => import('@/views/ui/Scrollspy.vue')
  },
  {
    path: '/ui/spinners',
    name: 'ui.spinners',
    meta: {
      title: setTitle('Spinners'),
      authRequired: true
    },
    component: () => import('@/views/ui/Spinners.vue')
  },
  {
    path: '/ui/tabs',
    name: 'ui.tabs',
    meta: {
      title: setTitle('Tabs'),
      authRequired: true
    },
    component: () => import('@/views/ui/Tabs.vue')
  },
  {
    path: '/ui/toasts',
    name: 'ui.toasts',
    meta: {
      title: setTitle('Toasts'),
      authRequired: true
    },
    component: () => import('@/views/ui/Toasts.vue')
  },
  {
    path: '/ui/tooltips',
    name: 'ui.tooltips',
    meta: {
      title: setTitle('Tooltips'),
      authRequired: true
    },
    component: () => import('@/views/ui/Tooltips.vue')
  }
]

const advancedUiRoutes = [
  {
    path: '/advanced/ratings',
    name: 'advanced.ratings',
    meta: {
      title: setTitle('Ratings'),
      authRequired: true
    },
    component: () => import('@/views/advanced/ratings/index.vue')
  },
  {
    path: '/advanced/alert',
    name: 'advanced.alert',
    meta: {
      title: setTitle('Sweet Alert'),
      authRequired: true
    },
    component: () => import('@/views/advanced/alert/index.vue')
  },
  {
    path: '/advanced/swiper',
    name: 'advanced.swiper',
    meta: {
      title: setTitle('Swiper'),
      authRequired: true
    },
    component: () => import('@/views/advanced/swiper/index.vue')
  },
  {
    path: '/advanced/scrollbar',
    name: 'advanced.scrollbar',
    meta: {
      title: setTitle('Scrollbar'),
      authRequired: true
    },
    component: () => import('@/views/advanced/scrollbar/index.vue')
  },
  {
    path: '/advanced/toastify',
    name: 'advanced.toastify',
    meta: {
      title: setTitle('Toastify'),
      authRequired: true
    },
    component: () => import('@/views/advanced/toastify/index.vue')
  }
]

const chartsRoutes = [
  {
    path: '/charts/area',
    name: 'charts.area',
    meta: {
      title: setTitle('Apex Area Chart'),
      authRequired: true
    },
    component: () => import('@/views/charts/area/index.vue')
  },
  {
    path: '/charts/bar',
    name: 'charts.bar',
    meta: {
      title: setTitle('Apex Bar Chart'),
      authRequired: true
    },
    component: () => import('@/views/charts/bar/index.vue')
  },
  {
    path: '/charts/boxplot',
    name: 'charts.boxplot',
    meta: {
      title: setTitle('Apex Boxplot Chart'),
      authRequired: true
    },
    component: () => import('@/views/charts/boxplot/index.vue')
  },
  {
    path: '/charts/bubble',
    name: 'charts.bubble',
    meta: {
      title: setTitle('Apex Bubble Chart'),
      authRequired: true
    },
    component: () => import('@/views/charts/bubble/index.vue')
  },
  {
    path: '/charts/candlestick',
    name: 'charts.candlestick',
    meta: {
      title: setTitle('Apex Candlestick Chart'),
      authRequired: true
    },
    component: () => import('@/views/charts/candlestick/index.vue')
  },
  {
    path: '/charts/column',
    name: 'charts.column',
    meta: {
      title: setTitle('Apex Column Chart'),
      authRequired: true
    },
    component: () => import('@/views/charts/column/index.vue')
  },
  {
    path: '/charts/heatmap',
    name: 'charts.heatmap',
    meta: {
      title: setTitle('Apex Heatmap Chart'),
      authRequired: true
    },
    component: () => import('@/views/charts/heatmap/index.vue')
  },
  {
    path: '/charts/line',
    name: 'charts.line',
    meta: {
      title: setTitle('Apex Line Chart'),
      authRequired: true
    },
    component: () => import('@/views/charts/line/index.vue')
  },
  {
    path: '/charts/mixed',
    name: 'charts.mixed',
    meta: {
      title: setTitle('Apex Mixed Chart'),
      authRequired: true
    },
    component: () => import('@/views/charts/mixed/index.vue')
  },
  {
    path: '/charts/pie',
    name: 'charts.pie',
    meta: {
      title: setTitle('Apex Pie Chart'),
      authRequired: true
    },
    component: () => import('@/views/charts/pie/index.vue')
  },
  {
    path: '/charts/polar',
    name: 'charts.polar',
    meta: {
      title: setTitle('Apex Polar Chart'),
      authRequired: true
    },
    component: () => import('@/views/charts/polar/index.vue')
  },
  {
    path: '/charts/radar',
    name: 'charts.radar',
    meta: {
      title: setTitle('Apex Radar Chart'),
      authRequired: true
    },
    component: () => import('@/views/charts/radar/index.vue')
  },
  {
    path: '/charts/radial-bar',
    name: 'charts.radial-bar',
    meta: {
      title: setTitle('Apex Radial Bar Chart'),
      authRequired: true
    },
    component: () => import('@/views/charts/radial-bar/index.vue')
  },
  {
    path: '/charts/scatter',
    name: 'charts.scatter',
    meta: {
      title: setTitle('Apex Scatter Chart'),
      authRequired: true
    },
    component: () => import('@/views/charts/scatter/index.vue')
  },
  {
    path: '/charts/timeline',
    name: 'charts.timeline',
    meta: {
      title: setTitle('Apex Timeline Chart'),
      authRequired: true
    },
    component: () => import('@/views/charts/timeline/index.vue')
  },
  {
    path: '/charts/treemap',
    name: 'charts.treemap',
    meta: {
      title: setTitle('Apex Treemap Chart'),
      authRequired: true
    },
    component: () => import('@/views/charts/treemap/index.vue')
  }
]

const formsRoutes = [
  {
    path: '/forms/basic',
    name: 'forms.basic',
    meta: {
      title: setTitle('Form Basic'),
      authRequired: true
    },
    component: () => import('@/views/forms/basic.vue')
  },
  {
    path: '/forms/checkbox',
    name: 'forms.checkbox',
    meta: {
      title: setTitle('Form Checkbox'),
      authRequired: true
    },
    component: () => import('@/views/forms/checkbox.vue')
  },
  {
    path: '/forms/select',
    name: 'forms.select',
    meta: {
      title: setTitle('Choice Select'),
      authRequired: true
    },
    component: () => import('@/views/forms/select.vue')
  },
  {
    path: '/forms/clipboard',
    name: 'forms.clipboard',
    meta: {
      title: setTitle('Clipboard'),
      authRequired: true
    },
    component: () => import('@/views/forms/clipboard.vue')
  },
  {
    path: '/forms/flat-picker',
    name: 'forms.flat-picker',
    meta: {
      title: setTitle('Flat Picker'),
      authRequired: true
    },
    component: () => import('@/views/forms/flat-picker.vue')
  },
  {
    path: '/forms/validation',
    name: 'forms.validation',
    meta: {
      title: setTitle('Validation'),
      authRequired: true
    },
    component: () => import('@/views/forms/validation/index.vue')
  },
  {
    path: '/forms/wizard',
    name: 'forms.wizard',
    meta: {
      title: setTitle('Wizard'),
      authRequired: true
    },
    component: () => import('@/views/forms/wizard.vue')
  },
  {
    path: '/forms/file-uploads',
    name: 'forms.file-uploads',
    meta: {
      title: setTitle('File Uploads'),
      authRequired: true
    },
    component: () => import('@/views/forms/file-uploads.vue')
  },
  {
    path: '/forms/editors',
    name: 'forms.editors',
    meta: {
      title: setTitle('Editors'),
      authRequired: true
    },
    component: () => import('@/views/forms/editors.vue')
  },
  {
    path: '/forms/input-mask',
    name: 'forms.input-mask',
    meta: {
      title: setTitle('Input Mask'),
      authRequired: true
    },
    component: () => import('@/views/forms/input-mask.vue')
  },
  {
    path: '/forms/slider',
    name: 'forms.slider',
    meta: {
      title: setTitle('Slider'),
      authRequired: true
    },
    component: () => import('@/views/forms/slider.vue')
  }
]

const tablesRoutes = [
  {
    path: '/tables/basic',
    name: 'tables.basic',
    meta: {
      title: setTitle('Tables Basic'),
      authRequired: true
    },
    component: () => import('@/views/tables/basic.vue')
  },
  {
    path: '/tables/gridjs',
    name: 'tables.gridjs',
    meta: {
      title: setTitle('Tables Grid Js'),
      authRequired: true
    },
    component: () => import('@/views/tables/gridjs/index.vue')
  }
]

const iconsRoutes = [
  {
    path: '/icons/boxicons',
    name: 'icons.boxicons',
    meta: {
      title: setTitle('Boxicons Icons'),
      authRequired: true
    },
    component: () => import('@/views/icons/boxicons.vue')
  },
  {
    path: '/icons/iconamoon',
    name: 'icons.iconamoon',
    meta: {
      title: setTitle('Iconamoon Icons'),
      authRequired: true
    },
    component: () => import('@/views/icons/iconamoon.vue')
  }
]

const mapsRoutes = [
  {
    path: '/maps/google',
    name: 'maps.google',
    meta: {
      title: setTitle('Google Map'),
      authRequired: true
    },
    component: () => import('@/views/maps/google.vue')
  },
  {
    path: '/maps/vector',
    name: 'maps.vector',
    meta: {
      title: setTitle('Vector Map'),
      authRequired: true
    },
    component: () => import('@/views/maps/vector.vue')
  }
]

const componentsRoutes = [...uiRoutes, ...advancedUiRoutes, ...chartsRoutes, ...formsRoutes, ...tablesRoutes, ...iconsRoutes, ...mapsRoutes]

export const allRoute = [...authRoutes, ...errorRoutes, ...dashboardRoutes, ...ecommerceRoutes, ...appRoutes, ...pagesRoutes, ...componentsRoutes]
