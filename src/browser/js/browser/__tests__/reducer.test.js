/*
 * MinIO Cloud Storage (C) 2016, 2018 MinIO, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import reducer from "../reducer"
import * as actionsCommon from "../actions"

describe("common reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({"objectName": "", "serverConfig": {}, "serverConfigModDate": "", "serverImage": [], "serverInfo": {}, "sidebarOpen": false, "storageInfo": {"free": 0, "total": 0}})
  })

  it("should handle TOGGLE_SIDEBAR", () => {
    expect(
      reducer(
        { sidebarOpen: false },
        {
          type: actionsCommon.TOGGLE_SIDEBAR
        }
      )
    ).toEqual({
      sidebarOpen: true
    })
  })

  it("should handle SET_STORAGE_INFO", () => {
    expect(
      reducer(
        {},
        {
          type: actionsCommon.SET_STORAGE_INFO,
          storageInfo: { total: 100, free: 40 }
        }
      )
    ).toEqual({
      storageInfo: { total: 100, free: 40 }
    })
  })

  it("should handle SET_SERVER_INFO", () => {
    expect(
      reducer(undefined, {
        type: actionsCommon.SET_SERVER_INFO,
        serverInfo: {
          version: "test",
          memory: "test",
          platform: "test",
          runtime: "test",
          info: "test"
        }
      }).serverInfo
    ).toEqual({
      version: "test",
      memory: "test",
      platform: "test",
      runtime: "test",
      info: "test"
    })
  })
})
