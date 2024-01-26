import { AppShell } from '@mantine/core';

import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <AppShell>
      <Header />
      {children}
      <Footer />
    </AppShell>
  );
};

export default Layout;
