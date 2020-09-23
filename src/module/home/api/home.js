let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre;
import http from './../../../base/api/public'

export const page_list_tree = () => {
  return http.requestQuickGet(apiUrl+'/file/fileTree' )

}

export const page_list_page = (pid,pageId, pageSize) => {
  console.log("parentId=%s pageId=%s pageSize=%s", pid,pageId, pageSize)
  return http.requestGet(apiUrl+'/file/fileList?pid='+pid+'&pageId='+pageId+'&pageSize='+pageSize)
}


export const page_list_select = (label) => {
  return http.requestQuickGet(apiUrl+'/file/select?label='+label)

}


export const page_list_path = (fileGuid) => {
  return http.requestQuickGet(apiUrl+'/Path/filePathfromGuid?fileGuid='+fileGuid)

}

