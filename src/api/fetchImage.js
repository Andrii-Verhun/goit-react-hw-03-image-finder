import customAxios from './config';

const fetchImage = (query, page = 1) => {
    return customAxios('/api', {
        params: {
            q: query,
            page
        },
    });
};

export default fetchImage;