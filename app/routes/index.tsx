import { LoaderFunction, redirect } from 'remix';

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  if (url.pathname === '/') {
    return redirect('/2022');
  }
  return null;
};
