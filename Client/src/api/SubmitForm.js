import { serverUrl } from "../global/GlobalVariables"
export const SubmitForm = async function (params) {
  try {
    const file = appendFiles(params)
    const results = await fetch(`${serverUrl}/getYourSite`, {
      method: 'POST',
      body: file
    })
    return results
  }
  catch (err) {
    console.error(err)
  }
}

function appendFiles(params) {
  const files = new FormData();
  const fileParams = ['siteBackGroundImg', 'siteSvg', 'yourPicture']
  fileParams.forEach(fileParam => files.append(fileParam, params[fileParam], fileParam))
  params.projects.forEach((project) => { files.append(`projectPic`, project.projectPic, project.name) })
  files.append('body', JSON.stringify(params))
  return files
}