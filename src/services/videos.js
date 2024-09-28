import videos from '@/assets/videos.json'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const getAllVideos = async () => {
  await sleep(1000)
  return videos
}

const getVideoById = async (id) => {
  await sleep(1000)
  return videos.find((el) => {
    return el.id === id
  })
}

export { getAllVideos, getVideoById }
