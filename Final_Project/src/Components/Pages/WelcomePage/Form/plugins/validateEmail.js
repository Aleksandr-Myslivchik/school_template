export const validate = (data) => {

    const str = data
    const match = str.match(/[A-Za-z0-9\._-]+\@[a-z_-]+\.[a-z]{2,}/g)
    if (!match) {
        return 
    } else {
        return true
    }
}