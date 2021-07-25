import { serverUrl } from "../global/GlobalVariables"
export const downloadZip = async function () {
  try {
    const results = await fetch(`${serverUrl}/download`)
    const blob = await results.blob()
    const file = window.URL.createObjectURL(blob)
    window.location.assign(file)
    return results
  }
  catch (err) {
    console.error(err)
  }
}