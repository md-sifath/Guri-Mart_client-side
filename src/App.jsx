import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import AppLayout from './ui/AppLayout';
import Home from './page/Home';
import Login from './page/Login';
import Products from './page/Products';
import DashboardLayout from './ui/DashboardLayout';
import Dashboard from './page/Dashboard/Dashboard';
import AddData from './page/AddData';
import Signup from './page/Signup';
import CartPage from './page/CartPage';
import CardDetails from './ui/CardDetails';
import Order from './page/Order';
import Profile from './page/Profile';
import MyOrder from './page/MyOrder';
import OrderDetails from './feature/Order/OrderDetails';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<CardDetails />} />
            <Route path="/addData" element={<AddData />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/order" element={<Order />} />
          </Route>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/myorder" element={<MyOrder />} />
            <Route path="/dashboard/myorder/:id" element={<OrderDetails />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            backgroundColor: '#004E5A',
            color: 'white',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
          error: {
            duration: 5000,
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
