// The videos data is sourced from a local .json file.
// In the future this data might come, instead, from a REST API.
import videos from './data.json'

const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Produces a random delay within a given range
 * @param {number} minDelayInMilliseconds The minimum delay in milliseconds
 * @param {number} maxDelayInMilliseconds The maximum delay in milliseconds
 * @return {Promise<unknown>} A promise
 */
const wait = (minDelayInMilliseconds, maxDelayInMilliseconds) => {
  const delayInMilliseconds = getRandomInteger(minDelayInMilliseconds, maxDelayInMilliseconds)
  return new Promise((resolve) => setTimeout(resolve, delayInMilliseconds))
}

const getAllVideos = async () => {
  // Simulate a delay (this is done just to test that the Suspense component works as expected)
  await wait(200, 2000)

  return videos
}

const getVideoById = async (id) => {
  // Simulate a delay (this is done just to test that the Suspense component works as expected)
  await wait(100, 1000)

  return videos.find((el) => {
    return el.id === id
  })
}

export { getAllVideos, getVideoById }
