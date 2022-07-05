import { useEffect, useState } from 'react';
import styles from './index.module.css';

function HomePage() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [dataSearch, setSearch] = useState('')
  const [dataHadistType, setHadistType] = useState('shahih-bukhari')

  useEffect(() => {
    setLoading(true);
    handleHadistOnLoad();
  }, [])

  const handleHadistOnLoad = () => {
     const params = { 
      hadist: dataHadistType,
      page: '',
      search: dataSearch
    }
    getHadist(params)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const params = { 
      hadist: dataHadistType,
      page: '',
      search: dataSearch
    }
    getHadist(params)
  }

  const getHadist = (params) => {
    fetch(`/api/hadist/${params.hadist}?page=${params.page}&search=${params.search}`)
    .then((res) => res.json())
    .then((data) => {
      setData(data)
      setLoading(false)
    })
  }

  const changeHadist = (hadistType) =>  {
    const params = { 
      hadist: hadistType,
      page: '',
      search: dataSearch
    }
    console.log(hadistType)

    getHadist(params)
    setHadistType(hadistType)
  }

  const textConverter = (text) => {
    switch (text) {
      case 'shahih_muslim':
        return 'Shahih Muslim'
        break;
      case 'shahih_bukhari':
        return 'Shahih Bukhari'
        break;
      case 'sunan_tirmidzi':
        return 'Sunan Tirmidzi'
        break;
    
      default:
        break;
    }
  }

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No Hadist data</p>

  return (
    <>
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.listTypeHadist}>
          <div className={styles.listTypeHadistItem} onClick={(e) => changeHadist('shahih-bukhari')}>
            Hadist Shahih Bukhari
          </div>
          <div className={styles.listTypeHadistItem} onClick={(e) => changeHadist('shahih-muslim')}>
            Hadist Shahih Muslim
          </div>
          <div className={styles.listTypeHadistItem} onClick={(e) => changeHadist('sunan-tirmidzi')}>
            Hadist Sunan Tirmidzi
          </div>
        </div>

        <div className={styles.hadistListByType}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label>Cari Hadist &nbsp;
              <input 
                type="text" 
                value={dataSearch}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
            <button type="submit">Cari Hadist</button>
          </form>

          {
            dataSearch ? <p>Hasil Pencarian untuk : {dataSearch}</p> : ''
          }

          <div className={styles.listItemScrollY}>
            <ul>
              {data.data.map(function(object, i){
                return (
                  <li key={i}>
                    <p><u>{textConverter(object.kitab)}</u></p>
                    <p>{object.arab}</p>
                    <p>{object.terjemah}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>

   
    </>
)
}

export default HomePage