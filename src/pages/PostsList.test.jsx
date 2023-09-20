import { describe, it } from "vitest";
import { renderRoute } from "../../test-setup/renderRoute";
import { screen } from "@testing-library/react";

describe("PostList page", () => {
  it("works", () => {
    renderRoute("/posts");
  });
});
