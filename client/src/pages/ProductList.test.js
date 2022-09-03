import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import ProductList from "./ProductList";
import { Provider } from 'react-redux';
import { store } from 'app/store';
import { BrowserRouter } from "react-router-dom";

const dummyProducts = [
  {
    _id: 1,
    name: 'p1',
    price: 10
  },
  {
    _id: 2,
    name: 'p1',
    price: 10
  },
  {
    _id: 3,
    name: 'p1',
    price: 10
  }
]
jest.mock('axios')
test("Product list", async() => {
  axios.get.mockResolvedValue({ data: dummyProducts});
  render(<Provider store={store}>
    <BrowserRouter>
    <ProductList />
    </BrowserRouter>
  </Provider>);
  const productList = await waitFor(() => screen.findAllByTestId("product-card"));
  expect(productList).toHaveLength(3)
})