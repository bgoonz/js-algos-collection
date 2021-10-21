import { tarjanConnectedComponents as tj } from "../../../src/graphs/others/tarjan-connected-components";

const nonConnected = {
  v1: [],
  v2: [],
  v3: [],
  v4: [],
  v5: [],
};

const cyclicGraph = {
  v1: ["v2"],
  v2: ["v3"],
  v3: ["v4"],
  v4: ["v5"],
  v5: ["v1"],
};

describe("Tarjan's algorithm for finding connected components", () => {
  "use strict";
  it("should be defined", () => {
    expect(typeof tj).toBe("function");
  });

  it("should return an array", () => {
    expect(tj() instanceof Array).toBeTruthy();
  });

  it("should work with non-connected graphs", () => {
    expect(tj(nonConnected)).toEqual([["v1"], ["v2"], ["v3"], ["v4"], ["v5"]]);
  });

  it("should workw ith cycles", () => {
    expect(tj(cyclicGraph)).toEqual([["v5", "v4", "v3", "v2", "v1"]]);
  });
});
