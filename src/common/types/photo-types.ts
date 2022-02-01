import { PayloadAction } from '@reduxjs/toolkit'

import { BooleanNumber } from '../enums'

export type RawPhoto = {
  id: string
  title: string
  url: string
}

export type PhotoTypes = {
  farm: number
  id: string
  isfamily: BooleanNumber
  isfriend: BooleanNumber
  ispublic: BooleanNumber
  owner: string
  secret: string
  server: string
  title: string
}

export type PhotosType = {
  page: number
  pages: number
  perpage: number
  total: number
  photo: PhotoTypes[]
}

export type FetchGallerySuccessAction = PayloadAction<PhotosType>
