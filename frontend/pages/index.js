import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import { useEffect, useState } from "react";
import styles from "../styles/index.module.css";

function HomePage() {
  const [dataHadits, setDataHadits] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [dataSearch, setSearch] = useState("");
  const [dataHaditsType, setHaditsType] = useState("shahih-bukhari");
  const [dataSuggestion, setSuggestion] = useState();
  const listSuggestion = [
    "hadits tentang berqur'ban",
    "hadits tentang zakat",
    "hadits tentang Infaq",
    "hadits tentang Puasa senin kamis",
    "hadits tentang Puasa Arafah",
    "hadits tentang Puasa Tarwiyah",
    "hadits tentang menikah",
    "hadits tentang bercerai",
  ];
  const [isShowModalSearch, setShowModalSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const listHadits = [
    {
      type: "shahih-bukhari",
      name: "Shahih Bukhari",
    },
    {
      type: "shahih-muslim",
      name: "Shahih muslim",
    },
    {
      type: "sunan-tirmidzi",
      name: "Sunan Tirmidzi",
    },
  ];

  useEffect(() => {
    setLoading(true);
    handlehaditsOnLoad();
  }, []);

  const handlehaditsOnLoad = () => {
    const params = {
      hadits: dataHaditsType,
      page: 1,
      search: dataSearch,
    };
    getHadits(params);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const params = {
      hadits: dataHaditsType,
      page: 1,
      search: dataSearch,
    };
    getHadits(params);
    window.scrollTo({
      top: window.innerHeight + 200,
      left: 100,
      behavior: 'smooth'
    });
  };

  const getHadits = (params) => {
    fetch(
      `/api/hadist/${params.hadits}?page=${params.page}&search=${params.search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDataHadits(data);
        setLoading(false);
        setShowModalSearch(false);
      });
  };

  const changeHadits = (haditsType) => {
    const params = {
      hadits: haditsType,
      page: 1,
      search: dataSearch,
    };

    getHadits(params);
    setHaditsType(haditsType);
    setCurrentPage(1)
  };

  const changeHaditsSuggestion = (suggestion) => {
    const params = {
      hadits: dataHaditsType,
      page: 1,
      search: suggestion,
    };

    getHadits(params);
    setSuggestion(suggestion);
  };

  const textConverter = (text, separator) => {
    return text.split(separator).join(" ");
  };

  const handleLoader = (event) => {
    if (isLoading) {
      return (
        <div className="wrapLoading">
          <div className="loading">
            <FontAwesomeIcon icon="spinner" size="lg" spin />
          </div>
        </div>
      );
    }
  };

  const handleCloseSubmit = () => {
    setShowModalSearch(false);
    setSearch("");
    const params = {
      hadits: dataHaditsType,
      page: 1,
      search: "",
    };
    getHadits(params);
    window.scrollTo({
      top: window.innerHeight,
      left: 100,
      behavior: 'smooth'
    });
  };

  const handleChangePagination = (page, type) => {
    if(type === 'previous' && page > 1) {
      page--
    } else if(type === 'next') {
      page++
    }
    
    const params = {
     hadits: dataHaditsType,
     page: page,
     search: dataSearch,
   };
    setCurrentPage(page) 
    getHadits(params);
    
  }

  const templateModalSearch = () => {
    return (
      <div className={`${styles.home_action_filter_search}`}>
        <div
          className={`${styles.home_action_filter_item} ${styles.home_action_filter_item_search}`}
        >
          <div className={styles.home_action_filter_wrap_item}>
            <div className={styles.home_text_title_search}>
              Cari hadits berdasarkan periwayat! (
              {textConverter(dataHaditsType, "-")})
            </div>
            <div className={styles.home_action_filter_input}>
              <input
                type="text"
                placeholder="Silahkan cari hadits"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button onClick={(e) => handleSubmit(e)}>Cari Hadits</button>
              <button onClick={(e) => handleCloseSubmit(e)}>Batal</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (!dataHadits) return <p>No hadits data</p>;

  return (
    <>
      {isLoading ? (
        handleLoader()
      ) : (
        <div className={styles.home}>
          <div className={styles.home_greeting}>Assalamualaikum Akhi/Ukhti</div>

          <div className={styles.home_training}>
            <div
              className={`${styles.home_training_item} ${styles.home_training_item_active}`}
            >
              <div className={styles.home_training_item_icon}>
                <FontAwesomeIcon
                  icon="fas-regular fa-book-open-reader"
                  size="lg"
                />
              </div>
              <div className={styles.home_training_item_title}>
                Membaca hadits
              </div>
            </div>
            <div className={`${styles.home_training_item}`}>
              <div className={styles.home_training_item_icon}>
                <FontAwesomeIcon icon="fas-regular fa-circle-play" size="lg" />
              </div>
              <div className={styles.home_training_item_title}>
                Mendengarkan hadits
              </div>
            </div>

            <div className={`${styles.home_training_item} `}>
              <div className={styles.home_training_item_icon}>
                <FontAwesomeIcon
                  icon="fas-solid fa-microphone-lines"
                  size="lg"
                />
              </div>
              <div className={styles.home_training_item_title}>
                Cari hadits dengan suara
              </div>
            </div>

            <div
              className={`${styles.home_training_item}`}
              onClick={(e) => setShowModalSearch(true)}
            >
              <div className={styles.home_training_item_icon}>
                <FontAwesomeIcon icon="fas-solid fa-file-lines" size="lg" />
              </div>
              <div className={styles.home_training_item_title}>
                Cari hadits dengan Text
              </div>
            </div>
          </div>

          <div className={styles.home_text_title}>
            Apa kamu sedang butuh saran hadits ?
          </div>
          <div className={styles.home_suggestion}>
            {listSuggestion.map((suggestion, i) => {
              return (
                <div
                  key={i}
                  className={`${styles.home_suggestion_title} ${
                    suggestion === dataSuggestion
                      ? styles.home_suggestion_title_active
                      : ""
                  }`}
                  onClick={(e) => changeHaditsSuggestion(suggestion)}
                >
                  {suggestion}
                </div>
              );
            })}
          </div>

          <div className={styles.home_wrapper_hadits_action}>
            <div className={styles.home_text_title}>
              hadits berdasarkan periwayat!
            </div>
            <div className={styles.home_action_filter}>
              {listHadits.map((hadits, i) => {
                return (
                  <div
                    key={i}
                    className={`${styles.home_action_filter_item} ${
                      dataHaditsType === hadits.type
                        ? styles.home_action_filter_item_active
                        : ""
                    }`}
                    onClick={(e) => changeHadits(hadits.type)}
                  >
                    {hadits.name}
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.home_hadits_popular}>
            {dataHadits.data.map((hadits, i) => (
              <Link key={i} href={{
                  pathname: 'detail-hadits',
                  query: { haditsType: hadits.kitab, id: hadits.id },
                }}>
                <div className={styles.home_hadits_popular_item} >
                  <div className={styles.home_hadits_popular_item_type}>
                    {textConverter(hadits.kitab, "_")}
                  </div>
                  <div className={styles.home_hadits_popular_item_title}>
                    {hadits.terjemah}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="pagination"> 
            <a  onClick={ (e) => handleChangePagination(currentPage, 'previous') }>&laquo;</a>
            <a  onClick={ (e) => handleChangePagination(currentPage, 'next')}>&raquo;</a>
          </div>
          <div className="pagination-info">
            Halaman ke {currentPage}
          </div>

        </div>
      )}

      {isShowModalSearch == true ? templateModalSearch() : ""}
    </>
  );
}

export default HomePage;
