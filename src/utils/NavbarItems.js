export const STYLES = {
    DEFAULT: 0,
    DOWNLOAD: 1
}

export const Items = [
    {
        label: 'Home',
        url: '/',
        active: false,
        newTab: false,
        style: STYLES.DEFAULT
    },
    {
        label: 'Source Code',
        url: '/github',
        active: false,
        newTab: true,
        style: STYLES.DEFAULT
    },
    {
        label: 'Twitter',
        url: '/twitter',
        active: false,
        newTab: true,
        style: STYLES.DEFAULT
    },
    {
        label: 'Download',
        mobilelabel: '',
        url: '/download',
        active: false,
        newTab: false,
        style: STYLES.DOWNLOAD
    }
]