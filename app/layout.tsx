import {Nunito} from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';
import RentModal from './components/modals/RentModal';
import useRentModal from './hooks/useRentModal';

import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';
import SearchModal from './components/modals/SearchModal';
import AuthContext from './context/AuthContext';
import MobileFooter from './components/sidebar/MobileFooter';
import { OneSignalInitial } from './components/OneSignalInitial';

export const metadata = {
  title: '在宅ケア動画',
  description: 'Zaitaku-video',
  manifest:'/manifest.json'
}

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

 return (
    <html lang="ja">
     
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
         
          <LoginModal />
          <RegisterModal />
          <RentModal />
        
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className='pb-20 pt-28'>
          <AuthContext>
            <OneSignalInitial/>
        {children}
          <MobileFooter />
        </AuthContext>
        </div>
      </body>
    </html>
  )
}

