declare interface ImportMetaEnv {
  VITE_APP_TITLE: string
  CI: CiTypeEnum
  // 更多环境变量...
}

enum CiTypeEnum {
  GH = 'gh'
}
