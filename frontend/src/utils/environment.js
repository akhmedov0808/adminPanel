export const PRODUCTION_SERVER = 's.com'

export function getEnv() {
    if (process.env && process.env.NODE_ENV === 'production') {
        return window.location.host === PRODUCTION_SERVER ? 'production' : 'staging'
    }

    return 'development'
}
