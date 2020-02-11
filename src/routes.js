import MyCropper from 'pages/crop/myCropper'
import Croppie from 'pages/crop/croppie'
import Cropper from 'pages/crop/cropper'
import GoogleCharts from 'pages/graph/react-google-charts'
import ApexCharts from 'pages/graph/react-apex-charts'

export default [
  {
    path: '/crop/my-cropper',
    component: MyCropper,
  },
  {
    path: '/crop/croppie',
    component: Croppie,
  },
  {
    path: '/crop/cropper',
    component: Cropper,
  },
  {
    path: '/graph/react-google-charts',
    component: GoogleCharts,
  },
  {
    path: '/graph/react-apex-charts',
    component: ApexCharts,
  },
]
