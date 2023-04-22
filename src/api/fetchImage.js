import customAxios from './config';

const fetchImage = async (query, page = 1) => {
    return await customAxios('/api', {
        params: {
            q: query,
            page
        },
    }).then((data) => console.log(data))
        .catch((error) => console.log(error));
};

export default fetchImage;