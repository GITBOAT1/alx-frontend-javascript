/*
import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
handleResponseFromAPI(promise);
*/


import handleResponseFromAPI from "./2-then";

test("handleResponseFromAPI return the right response on reject", () => {
    const promise = Promise.reject(new Error());
  
    const successResponse = handleResponseFromAPI(promise);
    return expect(successResponse).resolves.toEqual(new Error());
});

/*
import handleResponseFromAPI from "./2-then";

test("handleResponseFromAPI return the right response on resolve", () => {
  const promise = Promise.resolve();

  const successResponse = handleResponseFromAPI(promise);
  return expect(successResponse).resolves.toEqual({
    body: 'success',
    status: 200
  });
});
*/