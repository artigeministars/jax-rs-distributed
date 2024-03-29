// APP TEXT
export const APP_TITLE = "Welcome, Developer"
export const FOOTER_TEXT = `${new Date().getFullYear()} Built with ♡ by Welcome, Developer`
// PAGES TITLE
export const PAGE_TITLE_HOME = "Home"
export const PAGE_TITLE_DASHBOARD = "Dashboard"
export const PAGE_TITLE_GH_PRIVATE = "GitHub Private"
export const PAGE_TITLE_GH_PUBLIC = "GitHub Public"
export const PAGE_TITLE_CODE = "Code Editor"
export const PAGE_TITLE_SETTINGS = "Settings"
// UI CONSTANTS
export const FOOTER_HEIGHT = 30
export const HEADER_HEIGHT = 60
export const DRAWER_WIDTH = 250
// Axios base url
export enum POST_CONSTANTS {
    POSTBASEURL = "https:/localhost/"
}

export enum USER_CONSTANTS {
    POSTBASEURL = "https:/localhost:8025"
}

export enum POST_CRUD {
    addPosts = "/Posts",
    getPosts = "/Posts",
    deletePost = "/Posts",
    putPost = "/Posts"
}

export enum USER_CRUD {
    addUsers = "/users",
    getUsers = "/users",
    deleteUser = "/users",
    putUser = "/users"
}
