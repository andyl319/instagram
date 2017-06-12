export const fetchAllPhotos = () => (
  $.ajax({
    method: "GET",
    url: "/api/photos"
  })
);

export const fetchPhoto = (photoId) => (
  $.ajax({
    method: "GET",
    url: `/api/photos/${photoId}`
  })
);

export const createPhoto = (photo) => (
  $.ajax({
    method: "POST",
    url: '/api/photos',
    data: {photo}
  })
);

export const updatePhoto = (photo, id) => (
  $.ajax({
    method: 'PATCH',
    url: `api/photos/${id}`,
    data: {photo}
  })
);

export const removePhoto = (id) => (
  $.ajax ({
    method: 'DELETE',
    url: `api/photos/${id}`
  })
);
