import customAxios from './config';

const fetchImage = (query, page = 1) => {
    return customAxios('/api', {
        params: {
            q: query,
            page
        },
    }).then((data) => data).catch((error) => error);
};

export default fetchImage;