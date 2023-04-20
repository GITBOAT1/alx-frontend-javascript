import handleResponseFromAPI from "./2-then";

test("handleResponseFromAPI have a finally callback", async () => {
  const spy = jest.spyOn(console, "warn").mockImplementation();

  const promise = Promise.resolve();
  await handleResponseFromAPI(promise);
  expect(spy).toBeCalledWith("Got a response from the API");
  spy.mockRestore();
});