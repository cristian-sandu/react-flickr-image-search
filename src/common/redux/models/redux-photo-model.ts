import { FLICKR_PHOTO_BASE_API } from 'common/constants'
import { PhotoTypes, RawPhoto } from 'common/types'

const createFlickrPhotoURL = (
  serverId: string,
  photoId: string,
  secret: string,
  sizeSuffix = 'm',
) =>
  `${FLICKR_PHOTO_BASE_API}${serverId}/${photoId}_${secret}_${sizeSuffix}.jpg`

const ReduxPhotoModel = ({
  id,
  title,
  secret,
  server,
}: PhotoTypes): RawPhoto => ({
  id,
  title,
  url: createFlickrPhotoURL(server, id, secret),
})

export default ReduxPhotoModel
