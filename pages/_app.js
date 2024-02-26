import { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { auth } from '@/utils/firebase';
import "@/styles/globals.css";

// Create a context
export const GenInfoContext = createContext();

export default function App({ Component, pageProps }) {
  const [genInfo, setGenInfo] = useState([]); // State to store general information
  const router = useRouter(); // Next.js router

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/reg?uid=${auth.currentUser.uid}`);
        if (res.status === 200) {
          setGenInfo(res.data);
        } else {
          console.log("Error");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (auth?.currentUser?.uid) {
      fetchData();
    } else {
      
      router.push('/');
    }
  }, [auth?.currentUser?.uid]);

  console.log(genInfo);

  return (
    
    <GenInfoContext.Provider value={genInfo}>
      <Component {...pageProps} />
    </GenInfoContext.Provider>
  );
}
