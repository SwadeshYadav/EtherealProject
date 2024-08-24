
import './globals.css'; 
import Sidebar from './components/Sidebar';

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar />
          <main className="flex-grow p-5">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default Layout;
