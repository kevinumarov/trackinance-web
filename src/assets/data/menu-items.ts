import type { MenuItemType } from '@/types/menu'

export const MENU_ITEMS: MenuItemType[] = [
  {
    key: 'general',
    label: 'GENERAL',
    isTitle: true
  },
  {
    key: 'dashboards',
    icon: 'iconamoon:home-duotone',
    label: 'Dashboards',
    children: [
      {
        key: 'dashboard-analytics',
        label: 'Analytics',
        route: { name: 'dashboards.analytics' },
        parentKey: 'dashboards'
      },
      {
        key: 'dashboard-income',
        label: 'Income',
        route: { name: 'dashboards.income' },
        parentKey: 'dashboards'
      },
      {
        key: 'dashboard-expense',
        label: 'Expense',
        route: { name: 'dashboards.expense' },
        parentKey: 'dashboards'
      }
    ]
  },

  {
    key: 'income',
    icon: 'iconamoon:money-duotone',
    label: 'Income',
    route: { name: 'income' }
  },
  {
    key: 'expense',
    icon: 'iconamoon:money-duotone',
    label: 'Expense',
    route: { name: 'expense' }
  },
  {
    key: 'assets',
    icon: 'iconamoon:shopping-bag-duotone',
    label: 'Assets',
    children: [
      {
        key: 'assets-products',
        label: 'Products',
        route: { name: 'assets.products' },
        parentKey: 'ecommerce'
      },
      {
        key: 'assets-productsdetails',
        label: 'Product Details',
        route: { name: 'assets.products.details', params: { id: '1001' } },
        parentKey: 'assets'
      },
      {
        key: 'assets-createproduct',
        label: 'Create Product',
        route: { name: 'assets.products.create' },
        parentKey: 'assets'
      },
      {
        key: 'assets-customers',
        label: 'Customers',
        route: { name: 'assets.customers' },
        parentKey: 'assets'
      },
      {
        key: 'ecommerce-sellers',
        label: 'Sellers',
        route: { name: 'ecommerce.sellers' },
        parentKey: 'ecommerce'
      },
      {
        key: 'ecommerce-orders',
        label: 'Orders',
        route: { name: 'ecommerce.orders' },
        parentKey: 'ecommerce'
      },
      {
        key: 'ecommerce-orderdetails',
        label: 'Order Details',
        route: { name: 'ecommerce.orders.details', params: { id: '10001' } },
        parentKey: 'ecommerce'
      },
      {
        key: 'ecommerce-inventory',
        label: 'Inventory',
        route: { name: 'ecommerce.inventory' },
        parentKey: 'ecommerce'
      }
    ]
  },
  {
    key: 'apps-chat',
    icon: 'iconamoon:comment-dots-duotone',
    label: 'Chat',
    route: { name: 'apps.chat' }
  },
  {
    key: 'apps-email',
    icon: 'iconamoon:email-duotone',
    label: 'Email',
    route: { name: 'apps.email' }
  },
  {
    key: 'apps-calendar',
    icon: 'iconamoon:calendar-1-duotone',
    label: 'Calendar',
    children: [
      {
        key: 'calendar-schedule',
        label: 'Schedule',
        route: { name: 'calendar.schedule' },
        parentKey: 'apps-calendar'
      },
      {
        key: 'calendar-integration',
        label: 'Integration',
        route: { name: 'calendar.integration' },
        parentKey: 'apps-calendar'
      },
      {
        key: 'calendar-help',
        label: 'Help',
        route: { name: 'calendar.help' },
        parentKey: 'apps-calendar'
      }
    ]
  },
  {
    key: 'apps-todo',
    icon: 'iconamoon:ticket-duotone',
    label: 'Todo',
    route: { name: 'apps.todo' }
  },
  {
    key: 'apps-social',
    icon: 'iconamoon:squinting-face-duotone',
    label: 'Social',
    route: { name: 'apps.social' },
    badge: {
      text: 'Hot',
      variant: 'danger'
    }
  },
  {
    key: 'apps-contacts',
    icon: 'iconamoon:profile-circle-duotone',
    label: 'Contacts',
    route: { name: 'apps.contacts' }
  },
  {
    key: 'apps-invoices',
    icon: 'iconamoon:invoice-duotone',
    label: 'Invoices',
    children: [
      {
        key: 'invoices',
        label: 'Invoices List',
        route: { name: 'invoice' },
        parentKey: 'apps-invoices'
      },
      {
        key: 'invoices-details',
        label: 'Invoices Details',
        route: { name: 'invoice.details', params: { id: 'RB6985' } },
        parentKey: 'apps-invoices'
      }
    ]
  },
  {
    key: 'custom',
    label: 'Custom',
    isTitle: true
  },
  {
    key: 'pages',
    label: 'Pages',
    isTitle: false,
    icon: 'iconamoon:copy-duotone',
    children: [
      {
        key: 'page-welcome',
        label: 'Welcome',
        route: { name: 'pages.welcome' },
        parentKey: 'pages'
      },
      {
        key: 'page-faqs',
        label: 'FAQs',
        route: { name: 'pages.faqs' },
        parentKey: 'pages'
      },
      {
        key: 'page-profile',
        label: 'Profile',
        route: { name: 'pages.profile' },
        parentKey: 'pages'
      },
      {
        key: 'page-coming-soon',
        label: 'Coming Soon',
        route: { name: 'pages.coming-soon' },
        parentKey: 'pages'
      },
      {
        key: 'page-contact-us',
        label: 'Contact Us',
        route: { name: 'pages.contact-us' },
        parentKey: 'pages'
      },
      {
        key: 'page-about-us',
        label: 'About Us',
        route: { name: 'pages.about-us' },
        parentKey: 'pages'
      },
      {
        key: 'page-our-team',
        label: 'Our Team',
        route: { name: 'pages.our-team' },
        parentKey: 'pages'
      },
      {
        key: 'page-timeline',
        label: 'Timeline',
        route: { name: 'pages.timeline' },
        parentKey: 'pages'
      },
      {
        key: 'page-pricing',
        label: 'Pricing',
        route: { name: 'pages.pricing' },
        parentKey: 'pages'
      },
      {
        key: 'page-maintenance',
        label: 'Maintenance',
        route: { name: 'pages.maintenance' },
        parentKey: 'pages'
      },
      {
        key: 'page-404-error',
        label: '404 Error',
        route: { name: 'error.404' },
        parentKey: 'pages'
      },
      {
        key: 'page-404-error2',
        label: '404 Error 2',
        route: { name: 'error.404-2' },
        parentKey: 'pages'
      },
      {
        key: 'page-error-404-alt',
        label: 'Error 404 Alt',
        route: { name: 'error.404-alt' },
        parentKey: 'pages'
      }
    ]
  },
  {
    key: 'page-authentication',
    label: 'Authentication',
    isTitle: false,
    icon: 'iconamoon:lock-duotone',
    children: [
      {
        key: 'sign-in',
        label: 'Sign In',
        route: { name: 'auth.sign-in' },
        parentKey: 'page-authentication'
      },
      {
        key: 'sign-in-2',
        label: 'Sign In 2',
        route: { name: 'auth.sign-in-2' },
        parentKey: 'page-authentication'
      },
      {
        key: 'signup',
        label: 'Sign Up',
        route: { name: 'auth.sign-up' },
        parentKey: 'page-authentication'
      },
      {
        key: 'signup2',
        label: 'Sign Up 2',
        route: { name: 'auth.sign-up-2' },
        parentKey: 'page-authentication'
      },
      {
        key: 'reset-pass',
        label: 'Reset Password',
        route: { name: 'auth.reset-password' },
        parentKey: 'page-authentication'
      },
      {
        key: 'reset-pass2',
        label: 'Reset Password 2',
        route: { name: 'auth.reset-password-2' },
        parentKey: 'page-authentication'
      },
      {
        key: 'lock-screen',
        label: 'Lock Screen',
        route: { name: 'auth.lock-screen' },
        parentKey: 'page-authentication'
      },
      {
        key: 'lock-screen-2',
        label: 'Lock Screen 2',
        route: { name: 'auth.lock-screen-2' },
        parentKey: 'page-authentication'
      }
    ]
  },
  {
    key: 'widgets',
    icon: 'iconamoon:gift-duotone',
    label: 'Widgets',
    route: { name: 'widgets' },
    badge: {
      text: '9+',
      variant: 'info'
    }
  },
  {
    key: 'components',
    label: 'COMPONENTS',
    isTitle: true
  },
  {
    key: 'base-ui',
    icon: 'iconamoon:briefcase-duotone',
    label: 'Base UI',
    children: [
      {
        key: 'base-ui-accordions',
        label: 'Accordions',
        route: { name: 'ui.accordions' },
        parentKey: 'base-ui'
      },
      {
        key: 'base-ui-alerts',
        label: 'Alerts',
        route: { name: 'ui.alerts' },
        parentKey: 'base-ui'
      },
      {
        key: 'base-ui-avatars',
        label: 'Avatars',
        route: { name: 'ui.avatars' },
        parentKey: 'base-ui'
      },
      {
        key: 'base-ui-badges',
        label: 'Badges',
        route: { name: 'ui.badges' },
        parentKey: 'base-ui'
      },
      {
        key: 'base-ui-breadcrumb',
        label: 'Breadcrumb',
        route: { name: 'ui.breadcrumb' },
        parentKey: 'base-ui'
      },
      {
        key: 'base-ui-buttons',
        label: 'Buttons',
        route: { name: 'ui.buttons' },
        parentKey: 'base-ui'
      },
      {
        key: 'base-ui-cards',
        label: 'Cards',
        route: { name: 'ui.cards' },
        parentKey: 'base-ui'
      },
      {
        key: 'base-ui-carousel',
        label: 'Carousel',
        route: { name: 'ui.carousel' },
        parentKey: 'base-ui'
      },
      {
        key: 'base-ui-collapse',
        label: 'Collapse',
        route: { name: 'ui.collapse' },
        parentKey: 'base-ui'
      },
      {
        key: 'base-ui-dropdowns',
        label: 'Dropdowns',
        route: { name: 'ui.dropdowns' },
        parentKey: 'base-ui'
      },
      {
        key: 'base-ui-list-group',
        label: 'List Group',
        route: { name: 'ui.list-group' },
        parentKey: 'base-ui'
      },
      {
        key: 'base-ui-modals',
        label: 'Modals',
        route: { name: 'ui.modals' },
        parentKey: 'base-ui'
      },
      {
        key: 'base-ui-tabs',
        label: 'Tabs',
        route: { name: 'ui.tabs' },
        parentKey: 'base-ui'
      },
      {
        key: 'base-ui-offcanvas',
        label: 'Offcanvas',
        route: { name: 'ui.offcanvas' },
        parentKey: 'base-ui'
      },
      {
        key: 'base-ui-pagination',
        label: 'Pagination',
        route: { name: 'ui.pagination' },
        parentKey: 'base-ui'
      },
      {
        key: 'base-ui-placeholders',
        label: 'Placeholders',
        route: { name: 'ui.placeholders' },
        parentKey: 'base-ui'
      },
      {
        key: 'base-ui-popovers',
        label: 'Popovers',
        route: { name: 'ui.popovers' },
        parentKey: 'base-ui'
      },
      {
        key: 'base-ui-progress',
        label: 'Progress',
        route: { name: 'ui.progress' },
        parentKey: 'base-ui'
      },
      {
        key: 'base-ui-scrollspy',
        label: 'Scrollspy',
        route: { name: 'ui.scrollspy' },
        parentKey: 'base-ui'
      },
      {
        key: 'base-ui-spinners',
        label: 'Spinners',
        route: { name: 'ui.spinners' },
        parentKey: 'base-ui'
      },
      {
        key: 'base-ui-toasts',
        label: 'Toasts',
        route: { name: 'ui.toasts' },
        parentKey: 'base-ui'
      },
      {
        key: 'base-ui-tooltips',
        label: 'Tooltips',
        route: { name: 'ui.tooltips' },
        parentKey: 'base-ui'
      }
    ]
  },
  {
    key: 'advanced-ui',
    icon: 'iconamoon:component-duotone',
    label: 'Advanced UI',
    children: [
      {
        key: 'advanced-ui-ratings',
        label: 'Ratings',
        route: { name: 'advanced.ratings' },
        parentKey: 'advanced-ui'
      },
      {
        key: 'advanced-ui-sweet-alert',
        label: 'Sweet Alert',
        route: { name: 'advanced.alert' },
        parentKey: 'advanced-ui'
      },
      {
        key: 'advanced-ui-swiper-slider',
        label: 'Swiper Slider',
        route: { name: 'advanced.swiper' },
        parentKey: 'advanced-ui'
      },
      {
        key: 'advanced-ui-scrollbar',
        label: 'Scrollbar',
        route: { name: 'advanced.scrollbar' },
        parentKey: 'advanced-ui'
      },
      {
        key: 'advanced-ui-toastify',
        label: 'Toastify',
        route: { name: 'advanced.toastify' },
        parentKey: 'advanced-ui'
      }
    ]
  },
  {
    key: 'charts',
    icon: 'iconamoon:3d-duotone',
    label: 'Charts',
    children: [
      {
        key: 'charts-area',
        label: 'Area',
        route: { name: 'charts.area' },
        parentKey: 'charts'
      },
      {
        key: 'charts-bar',
        label: 'Bar',
        route: { name: 'charts.bar' },
        parentKey: 'charts'
      },
      {
        key: 'charts-bubble',
        label: 'Bubble',
        route: { name: 'charts.bubble' },
        parentKey: 'charts'
      },
      {
        key: 'charts-candl-stick',
        label: 'Candle Stick',
        route: { name: 'charts.candlestick' },
        parentKey: 'charts'
      },
      {
        key: 'charts-column',
        label: 'Column',
        route: { name: 'charts.column' },
        parentKey: 'charts'
      },
      {
        key: 'charts-heatmap',
        label: 'Heatmap',
        route: { name: 'charts.heatmap' },
        parentKey: 'charts'
      },
      {
        key: 'charts-line',
        label: 'Line',
        route: { name: 'charts.line' },
        parentKey: 'charts'
      },
      {
        key: 'charts-mixed',
        label: 'Mixed',
        route: { name: 'charts.mixed' },
        parentKey: 'charts'
      },
      {
        key: 'charts-timeline',
        label: 'Timeline',
        route: { name: 'charts.timeline' },
        parentKey: 'charts'
      },
      {
        key: 'charts-boxplot',
        label: 'Boxplot',
        route: { name: 'charts.boxplot' },
        parentKey: 'charts'
      },
      {
        key: 'charts-treemap',
        label: 'Treemap',
        route: { name: 'charts.treemap' },
        parentKey: 'charts'
      },
      {
        key: 'charts-pie',
        label: 'Pie',
        route: { name: 'charts.pie' },
        parentKey: 'charts'
      },
      {
        key: 'charts-radar',
        label: 'Radar',
        route: { name: 'charts.radar' },
        parentKey: 'charts'
      },
      {
        key: 'charts-radial-bar',
        label: 'Radial Bar',
        route: { name: 'charts.radial-bar' },
        parentKey: 'charts'
      },
      {
        key: 'charts-scatter',
        label: 'Scatter',
        route: { name: 'charts.scatter' },
        parentKey: 'charts'
      },
      {
        key: 'charts-polar-area',
        label: 'Polar Area',
        route: { name: 'charts.polar' },
        parentKey: 'charts'
      }
    ]
  },
  {
    key: 'forms',
    icon: 'iconamoon:cheque-duotone',
    label: 'Forms',
    children: [
      {
        key: 'forms-basic-elements',
        label: 'Basic Elements',
        route: { name: 'forms.basic' },
        parentKey: 'forms'
      },
      {
        key: 'forms-checkbox&radio',
        label: 'Checkbox & Radio',
        route: { name: 'forms.checkbox' },
        parentKey: 'forms'
      },
      {
        key: 'forms-choice-select',
        label: 'Choice Select',
        route: { name: 'forms.select' },
        parentKey: 'forms'
      },
      {
        key: 'forms-clipboard',
        label: 'Clipboard',
        route: { name: 'forms.clipboard' },
        parentKey: 'forms'
      },
      {
        key: 'forms-flat-picker',
        label: 'Flat Picker',
        route: { name: 'forms.flat-picker' },
        parentKey: 'forms'
      },
      {
        key: 'forms-validation',
        label: 'Validation',
        route: { name: 'forms.validation' },
        parentKey: 'forms'
      },
      {
        key: 'forms-wizard',
        label: 'Wizard',
        route: { name: 'forms.wizard' },
        parentKey: 'forms'
      },
      {
        key: 'forms-file-uploads',
        label: 'File Uploads',
        route: { name: 'forms.file-uploads' },
        parentKey: 'forms'
      },
      {
        key: 'forms-editors',
        label: 'Editors',
        route: { name: 'forms.editors' },
        parentKey: 'forms'
      },
      {
        key: 'forms-input-mask',
        label: 'Input Mask',
        route: { name: 'forms.input-mask' },
        parentKey: 'forms'
      },
      {
        key: 'forms-slider',
        label: 'Slider',
        route: { name: 'forms.slider' },
        parentKey: 'forms'
      }
    ]
  },
  {
    key: 'tables',
    icon: 'iconamoon:box-duotone',
    label: 'Tables',
    children: [
      {
        key: 'tables-basic',
        label: 'Basic Tables',
        route: { name: 'tables.basic' },
        parentKey: 'tables'
      },
      {
        key: 'tables-grid-js',
        label: 'Grid JS',
        route: { name: 'tables.gridjs' },
        parentKey: 'tables'
      }
    ]
  },
  {
    key: 'icons',
    icon: 'iconamoon:lightning-1-duotone',
    label: 'Icons',
    children: [
      {
        key: 'icons-boxicons',
        label: 'Boxicons',
        route: { name: 'icons.boxicons' },
        parentKey: 'icons'
      },
      {
        key: 'icons-iconamoon',
        label: 'IconaMoon',
        route: { name: 'icons.iconamoon' },
        parentKey: 'icons'
      }
    ]
  },
  {
    key: 'maps',
    icon: 'iconamoon:location-pin-duotone',
    label: 'Maps',
    children: [
      {
        key: 'maps-google',
        label: 'Google',
        route: { name: 'maps.google' },
        parentKey: 'maps'
      },
      {
        key: 'maps-vector',
        label: 'Vector',
        route: { name: 'maps.vector' },
        parentKey: 'maps'
      }
    ]
  },
  {
    key: 'badge-menu',
    icon: 'iconamoon:badge-duotone',
    label: 'Badge Menu',
    badge: {
      text: '1',
      variant: 'danger'
    }
  },
  {
    key: 'menuitem',
    icon: 'iconamoon:folder-add-duotone',
    label: 'Menu Item',
    children: [
      {
        key: 'menu-item-1',
        label: 'Menu Item 1',
        parentKey: 'menuitem'
      },
      {
        key: 'menu-item-2',
        label: 'Menu Item 2',
        parentKey: 'menuitem',
        children: [
          {
            key: 'menu-sub-item',
            label: 'Menu Sub Item',
            parentKey: 'menu-item-2'
          }
        ]
      }
    ]
  },
  {
    key: 'disabled-item',
    icon: 'iconamoon:unavailable-duotone',
    label: 'Disabled Item',
    disabled: true
  }
]
