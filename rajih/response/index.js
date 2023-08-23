const response = (status, data, pagination) => {
  if (status.status === 200) {
    return {
      meta: {
        error_type: "Success",
        code: 200,
        error_message: "",
      },
      data,
      pagination: {
        next_url: "",
        next_max_id: "",
      },
    };
  } else if (status.status === 400) {
    return {
      meta: {
        error_type: "Bad Request",
        code: 400,
        error_message: status.message,
      },
      data: {
        data,
      },
      pagination: {
        next_url: "",
        next_max_id: "",
      },
    };
  } else if (status.status === 404) {
    return {
      meta: {
        error_type: "Not Found",
        code: 404,
        error_message: status.message,
      },
      data: {
        data,
      },
      pagination: {
        next_url: "",
        next_max_id: "",
      },
    };
  } else if (status.status === 401) {
    return {
      meta: {
        error_type: "Unauthorized",
        code: 401,
        error_message: status.message,
      },
      data: {
        data,
      },
      pagination: {
        next_url: "",
        next_max_id: "",
      },
    };
  }
};

module.exports = response;
