import type { SellerType } from '@/views/ecommerce/sellers/components/types'

import avatar1 from '@/assets/images/users/avatar-1.jpg'
import avatar2 from '@/assets/images/users/avatar-2.jpg'
import avatar3 from '@/assets/images/users/avatar-3.jpg'
import avatar4 from '@/assets/images/users/avatar-4.jpg'
import avatar5 from '@/assets/images/users/avatar-5.jpg'
import avatar6 from '@/assets/images/users/avatar-6.jpg'
import avatar7 from '@/assets/images/users/avatar-7.jpg'
import avatar8 from '@/assets/images/users/avatar-8.jpg'
import avatar9 from '@/assets/images/users/avatar-9.jpg'
import avatar10 from '@/assets/images/users/avatar-10.jpg'

export const sellersList: SellerType[] = [
  {
    id: 1,
    seller: {
      image: avatar1,
      name: 'Anna M. Hines'
    },
    storeName: 'Acme',
    rating: 4.9,
    products: 356,
    walletBalance: 256.45,
    createDate: '09/04/2021',
    revenue: 269.56
  },
  {
    id: 2,
    seller: {
      image: avatar2,
      name: 'Candice F. Gilmore'
    },
    storeName: 'Globex',
    rating: 3.2,
    products: 289,
    walletBalance: 156.98,
    createDate: '13/05/2021',
    revenue: 89.75
  },
  {
    id: 3,
    seller: {
      image: avatar3,
      name: 'Vanessa R. Davis'
    },
    storeName: 'Soylent',
    rating: 4.1,
    products: 71,
    walletBalance: 859.5,
    createDate: '21/02/2020',
    revenue: 452.5
  },
  {
    id: 4,
    seller: {
      image: avatar4,
      name: 'Judith H. Fritsche'
    },
    storeName: 'Initech',
    rating: 2.5,
    products: 125,
    walletBalance: 163.75,
    createDate: '09/05/2020',
    revenue: 365
  },
  {
    id: 5,
    seller: {
      image: avatar5,
      name: 'Peter T. Smith'
    },
    storeName: 'Hooli',
    rating: 3.7,
    products: 265,
    walletBalance: 545,
    createDate: '15/06/2019',
    revenue: 465.59
  },
  {
    id: 6,
    seller: {
      image: avatar6,
      name: 'Emmanuel J. Delcid'
    },
    storeName: 'Vehement',
    rating: 4.3,
    products: 68,
    walletBalance: 136.54,
    createDate: '11/12/2019',
    revenue: 278.95
  },
  {
    id: 7,
    seller: {
      image: avatar7,
      name: 'William J. Cook'
    },
    storeName: 'Massive',
    rating: 1.8,
    products: 550,
    walletBalance: 365.85,
    createDate: '26/1/2021',
    revenue: 475.96
  },
  {
    id: 8,
    seller: {
      image: avatar8,
      name: 'Martin R. Peters'
    },
    storeName: 'Fringe',
    rating: 3.5,
    products: 123,
    walletBalance: 95.7,
    createDate: '13/04/2020',
    revenue: 142
  },
  {
    id: 9,
    seller: {
      image: avatar9,
      name: 'Paul M. Schubert'
    },
    storeName: 'Weeds',
    rating: 2.4,
    products: 789,
    walletBalance: 423.4,
    createDate: '05/07/2020',
    revenue: 652.9
  },
  {
    id: 10,
    seller: {
      image: avatar10,
      name: 'Janet J. Champine'
    },
    storeName: 'Soylent',
    rating: 4.6,
    products: 75,
    walletBalance: 216.8,
    createDate: '17/03/2019',
    revenue: 180.75
  }
]
