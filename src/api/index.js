import request from "./request.js"

const fetchBooks = (page, len, params) => {
    params.p = page
    params.len = len
    return request({
        method: 'get',
        url: '/book/query',
        params
    })
}

const fetchCatalog = (book_id) => {
    return request({
        method: 'get',
        url: '/catalog/query',
        params: {
            book_id
        }
    })
}

const fetContent = (id) => {
    return request({
        method: 'get',
        url: '/content/query',
        params: {
            id
        }
    })
}
