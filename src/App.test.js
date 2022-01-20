import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App.js";
import { store } from "./app/store";
import { Provider } from "react-redux";

describe("App.js", () => {
	it("render img", () => {
		render(
			<Provider store={store}>
				<App />
			</Provider>
		);
		const img = screen.getByAltText("logo");
    expect(img).toBeTruthy()
	});
});
