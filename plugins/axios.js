export default function({ $axios }) {
  $axios.onRequest(config => {
    // eslint-disable-next-line no-console
    console.log('making request to ' + config.url)
  })
}
