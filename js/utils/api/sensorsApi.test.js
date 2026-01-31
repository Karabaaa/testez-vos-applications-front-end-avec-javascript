import { retrieveSensorsData } from "./sensorsApi.js";
import { data } from "../../../data/mock-homepage-data.js";

describe("SensorsApi Unit Test Suites", () => {
  it("should return mockData whenI call retrieveSensorsData in test environment", () => {
    const RetrievedData = retrieveSensorsData();
    expect(RetrievedData).toBeDefined();
    expect(RetrievedData.length).toBeGreaterThan(0);
    expect(RetrievedData).toBe(data.facades);
  });
});
