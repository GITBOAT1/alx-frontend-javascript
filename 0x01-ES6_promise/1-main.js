import getFullResponseFromAPI from './1-promise';

test("getFullResponseFromAPI resolves correctly", () => {
    const successResponse = getFullResponseFromAPI(true);
    return expect(successResponse).resolves.toEqual({
      status: 200,
      body: "Success"
    });
});