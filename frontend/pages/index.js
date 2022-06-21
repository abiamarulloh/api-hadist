import { useEffect, useState } from 'react';
import Footer from '../layouts/footer';
import Header from '../layouts/header';

function HomePage() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3000/hadist/shahih-muslim')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No Hadist data</p>

  return (
    <>
    <Header></Header>
    
    <div>Welcome to Next.js!</div>

    <Footer></Footer>
    </>
)
}

export default HomePage