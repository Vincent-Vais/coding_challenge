const serviceError = (response) => {
  let error = false;
  if (!response) {
    return new Error("Bad request. Please try again later.");
  }
  const { data, status } = response;
  if (!status || !data) {
    error = new Error("Something went wrong");
  } else if (response.status >= 400 || !data.responseData || data.error) {
    error = new Error(data.error || "Something went wrong");
  }
  return error;
};

const getDataFromService = async (url, axios) => {
  try {
    const response = await axios.get(url);
    const error = serviceError(response);
    if (error) {
      throw error;
    }
    const data = response.data.responseData;
    return data;
  } catch (err) {
    // we want to check if an error was caused by our code or other service
    if (err.isAxiosError) {
      err.status = err.response.status;
      err.message = err.response.data.error;
    } else {
      err.status = err.status || 500;
      err.message = err.message || "Unable to get a car by id";
    }
    throw err;
  }
};

module.exports = {
  serviceError,
  getDataFromService,
};
