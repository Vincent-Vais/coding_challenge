const assert = require("assert");
const sandbox = require("sinon").createSandbox();
const axiosInstace = require("../axios.config");

const controllerUtils = require("./controllers");
describe("Controller utils", function () {
  describe("serviceError", function () {
    const { serviceError } = controllerUtils;
    it("should return a new Error when no response is present", function () {
      assert.ok(serviceError(null) instanceof Error, new Error());
    });
    it("should return a new Error when no status on response object is present", function () {
      const response = {
        data: {},
      };
      assert.ok(serviceError(response) instanceof Error, new Error());
    });
    it("should return a new Error when no data on response object is present", function () {
      const response = {
        status: true,
      };
      assert.ok(serviceError(response) instanceof Error, new Error());
    });
    it("should return a new Error when status code is greater or equal to 400", function () {
      const response = {
        status: 400,
        data: {},
      };
      assert.ok(serviceError(response) instanceof Error, new Error());
    });
    it("should return a new Error when no responseData property on data object", function () {
      const response = {
        status: 200,
        data: {},
      };
      assert.ok(serviceError(response) instanceof Error, new Error());
    });
    it("should return a new Error when error property on data object is present", function () {
      const response = {
        status: 200,
        data: {
          responseData: {},
          error: "error",
        },
      };
      assert.ok(serviceError(response) instanceof Error, new Error());
    });
    it("should return false if no error are conditions met", function () {
      const response = {
        status: 200,
        data: {
          responseData: {},
        },
      };
      assert.equal(serviceError(response), false);
    });
  });

  describe("getDataFromService", function () {
    const { getDataFromService } = controllerUtils;
    it("should return data from service", async function () {
      const axiosInstance = {
        get: (url) =>
          new Promise((r) =>
            r({
              data: {
                responseData: "Response data",
              },
              status: 200,
            })
          ),
      };
      const response = await getDataFromService(
        "https://www.testurl.com/",
        axiosInstance
      );
      assert.equal(response, "Response data");
    });
    it("should throw an error if a call to serviceError returns an error", async function () {
      const axiosInstance = {
        get: (url) =>
          new Promise((r) =>
            r({
              status: 400,
            })
          ),
      };

      await assert.rejects(
        getDataFromService("https://www.testurl.com/", axiosInstance)
      );
    });
  });
});
