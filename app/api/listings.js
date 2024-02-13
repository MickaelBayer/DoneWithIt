import apiClient from './client';

const endpoint = '/listings';

const getListings = () => apiClient.get(endpoint);

const postListing = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append('title', listing.title);
  data.append('price', listing.price);
  data.append('categoryId', listing.category.id);
  data.append('description', listing.description);
  listing.images.forEach((img, index) =>
    data.append('images', {
      name: 'image' + index + '.jpg',
      type: 'image/jpeg',
      uri: img
    })
  );
  if (listing.location)
    data.append('location', JSON.stringify(listing.location));

  return apiClient.post(endpoint, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total)
  });
};

export default {
  getListings,
  postListing
};
