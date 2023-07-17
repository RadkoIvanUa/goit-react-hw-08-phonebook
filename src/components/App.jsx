import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/selectors';
import { useEffect } from 'react';
import { refresh } from 'redux/operations';
import RestrictedRoute from './RestrictedRoute';
import PrivateRout from './PrivateRout';
import { ThreeDots } from 'react-loader-spinner';
import NotFound from 'pages/NotFounPage/NotFound';

export function App() {
  const isRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <div style={{ width: '100%', display: 'flex' }}>
      <ThreeDots
        height="200"
        width="200"
        radius="9"
        color="#1976d2"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ margin: '0 auto' }}
        wrapperClassName=""
        visible={true}
      />
    </div>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/registration"
          element={
            <RestrictedRoute
              component={<RegisterPage />}
              redirectTo="/contacts"
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRout component={<ContactsPage />} redirectTo="/login" />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
